import db from "@/lib/mongodb";

import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";

import {
  getAuthenticatedUser,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";

const apiKey = process.env.LEMONSQUEEZY_API_KEY;

lemonSqueezySetup({
  apiKey,
  onError: (error) => console.error("Error!", error),
});

// POST /api/products/create - Create a new product (Admin only)
export async function POST(request: Request) {
  try {
    // Require admin authentication
    const authResult = await requireAdmin();
    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const body = await request.json().catch(() => ({}));
    const {
      name,
      slug,
      description,
      price,
      category,
      tool,
      keyFeatures,
      howItWorks,
      whatsIncluded,
      technicalDetails,
      discounts,
      lemonSqueezyProductId,
      lemonSqueezyVariantId,
    } = body;

    // Validate required fields
    if (!name || !slug || !price || !tool) {
      return NextResponse.json(
        { message: "Name, slug, price, and tool are required" },
        { status: 400 }
      );
    }

    if (typeof price !== "number" || price <= 0) {
      return NextResponse.json(
        { message: "Price must be a positive number" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingProduct = await db
      .collection("products")
      .findOne({ slug, tool });
    if (existingProduct) {
      return NextResponse.json(
        {
          message: `Product with slug "${slug}" and tool "${tool}" already exists`,
        },
        { status: 409 }
      );
    }

    const { data, error } = await getAuthenticatedUser();

    if (error) {
      console.error("Lemon Squeezy auth error:", error);
      return NextResponse.json(
        { message: "Failed to authenticate with Lemon Squeezy" },
        { status: 500 }
      );
    }

    console.log("error => ", error);
    console.log("data => ", data);

    return;

    // Note: Lemon Squeezy SDK does not support product creation via API.
    // Products and variants must be created manually in the Lemon Squeezy dashboard.
    // You can optionally provide lemonSqueezyProductId and lemonSqueezyVariantId
    // to link this MongoDB product with an existing Lemon Squeezy product.

    // Get next ID for MongoDB
    const lastProduct = await db
      .collection("products")
      .find({})
      .sort({ id: -1 })
      .limit(1)
      .toArray();
    const nextId = lastProduct.length > 0 ? lastProduct[0].id + 1 : 1;

    // Create new product in MongoDB
    const newProduct = {
      id: nextId,
      name,
      slug,
      description: description || "",
      price,
      category: category || "Automation",
      tool: tool || "n8n",
      keyFeatures: keyFeatures || [],
      howItWorks: howItWorks || [],
      whatsIncluded: whatsIncluded || [],
      technicalDetails: technicalDetails || {
        complexity: "Intermediate",
        setupTime: "2-4 hours",
        apis: [],
        requirements: [],
      },
      discounts: discounts || [],

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.collection("products").insertOne(newProduct);

    // Return product data (excluding _id that MongoDB adds)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...productResponse } = newProduct as typeof newProduct & {
      _id?: unknown;
    };

    return NextResponse.json(
      {
        message: "Product created successfully",
        product: productResponse,
      },
      { status: 201 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Create product error:", err);

    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
