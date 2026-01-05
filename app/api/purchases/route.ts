import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { requireAuth } from "@/lib/auth";

/**
 * GET /api/purchases
 * Authenticated users can only see their own purchases
 * Admins can see all purchases and filter by userId
 * Query params:
 * - userId: Filter by user ID (admin only)
 * - productId: Filter by product ID
 * - page: Page number (default: 1)
 * - limit: Items per page (default: 10)
 */
export async function GET(request: NextRequest) {
  try {
    // Require authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    const authenticatedUser = authResult;

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const productId = searchParams.get("productId");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const collection = db.collection("purchases");

    // Build query filter
    const filter: Record<string, unknown> = {};

    // Non-admin users can only see their own purchases
    if (!authenticatedUser.isAdmin) {
      filter.purchasedBy = new ObjectId(authenticatedUser.id);
    } else if (userId) {
      // Admins can filter by userId if provided
      filter.purchasedBy = new ObjectId(userId);
    }

    if (productId) {
      filter.productId = parseInt(productId);
    }

    // Get total count for pagination
    const total = await collection.countDocuments(filter);

    // Fetch purchases with population
    const purchases = await collection
      .aggregate([
        { $match: filter },
        { $sort: { purchaseDate: -1 } },
        { $skip: skip },
        { $limit: limit },
        // Populate product details
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "id",
            as: "product",
          },
        },
        { $unwind: { path: "$product", preserveNullAndEmptyArrays: true } },
        // Populate user details
        {
          $lookup: {
            from: "users",
            localField: "purchasedBy",
            foreignField: "_id",
            as: "user",
          },
        },
        { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
        // Remove sensitive user data
        {
          $project: {
            "user.password": 0,
          },
        },
      ])
      .toArray();

    return NextResponse.json({
      purchases,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: unknown) {
    console.error("Error fetching purchases:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch purchases",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/purchases
 * Create a new purchase for authenticated user
 */
export async function POST(request: NextRequest) {
  try {
    // Require authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    const authenticatedUser = authResult;

    const body = await request.json();
    const { productId, discountApplied, originalPrice, finalPrice } = body;

    // Validation
    if (!productId || !originalPrice || !finalPrice) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: productId, originalPrice, finalPrice",
        },
        { status: 400 }
      );
    }

    const collection = db.collection("purchases");

    // Get next ID
    const lastPurchase = await collection
      .find({})
      .sort({ id: -1 })
      .limit(1)
      .toArray();
    const nextId = lastPurchase.length > 0 ? lastPurchase[0].id + 1 : 1;

    const newPurchase = {
      id: nextId,
      productId: parseInt(productId),
      purchasedBy: new ObjectId(authenticatedUser.id), // Use authenticated user's ID
      discountApplied: discountApplied || null,
      originalPrice,
      finalPrice,
      purchaseDate: new Date(),
    };

    const result = await collection.insertOne(newPurchase);

    return NextResponse.json(
      {
        message: "Purchase created successfully",
        purchase: { ...newPurchase, _id: result.insertedId },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error creating purchase:", error);
    return NextResponse.json(
      {
        error: "Failed to create purchase",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
