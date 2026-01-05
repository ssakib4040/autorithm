import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/mongodb";
import { requireAuth } from "@/lib/auth";

/**
 * GET /api/purchases/[id]
 * Get a single purchase by ID with populated product and user details
 * Users can only view their own purchases, admins can view all
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Require authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    const authenticatedUser = authResult;

    const { id } = await params;
    const collection = db.collection("purchases");

    const purchase = await collection
      .aggregate([
        { $match: { id: parseInt(id) } },
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

    if (!purchase || purchase.length === 0) {
      return NextResponse.json(
        { status: 404, message: "Purchase not found" },
        { status: 404 }
      );
    }

    // Check if user owns this purchase (unless admin)
    if (
      !authenticatedUser.isAdmin &&
      purchase[0].purchasedBy.toString() !== authenticatedUser.id
    ) {
      return NextResponse.json(
        { error: "Forbidden: You can only view your own purchases" },
        { status: 403 }
      );
    }

    return NextResponse.json(purchase[0]);
  } catch (error: unknown) {
    console.error("Error fetching purchase:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch purchase",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/purchases/[id]
 * Delete a purchase by ID
 * Users can only delete their own purchases, admins can delete any
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Require authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    const authenticatedUser = authResult;

    const { id } = await params;
    const collection = db.collection("purchases");

    // First, check if purchase exists and belongs to user
    const purchase = await collection.findOne({ id: parseInt(id) });

    if (!purchase) {
      return NextResponse.json(
        { status: 404, message: "Purchase not found" },
        { status: 404 }
      );
    }

    // Check ownership (unless admin)
    if (
      !authenticatedUser.isAdmin &&
      purchase.purchasedBy.toString() !== authenticatedUser.id
    ) {
      return NextResponse.json(
        { error: "Forbidden: You can only delete your own purchases" },
        { status: 403 }
      );
    }

    const result = await collection.deleteOne({ id: parseInt(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { status: 404, message: "Purchase not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Purchase deleted successfully",
    });
  } catch (error: unknown) {
    console.error("Error deleting purchase:", error);
    return NextResponse.json(
      {
        error: "Failed to delete purchase",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
