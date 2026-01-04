import { NextResponse } from "next/server";
import db from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";

// GET /api/products/[slug]?tool=n8n|Make - Get single product with related versions
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const tool = searchParams.get("tool");

    // Build query - if tool is specified, filter by it (case-insensitive)
    const query: {
      slug: string;
      tool?: { $regex: string; $options: string } | string;
    } = { slug };
    if (tool) {
      query.tool = { $regex: `^${tool}$`, $options: "i" };
    }

    const product = await db
      .collection("products")
      .findOne(query, { projection: { _id: 0 } });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Find the first valid discount (if any)
    const now = new Date();
    let discount = null;
    if (product.discounts && Array.isArray(product.discounts)) {
      const validDiscount = product.discounts.find((d: any) => {
        const startDate = new Date(d.startDate);
        const expiresAt = new Date(d.expiresAt);
        return startDate <= now && expiresAt >= now;
      });
      
      if (validDiscount) {
        const expiresAt = new Date(validDiscount.expiresAt);
        const timeLeftMs = expiresAt.getTime() - now.getTime();
        
        // Calculate time left
        const daysLeft = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor(timeLeftMs / (1000 * 60 * 60));
        const minutesLeft = Math.floor(timeLeftMs / (1000 * 60));
        
        let timeLeft = "";
        if (daysLeft > 0) {
          timeLeft = `${daysLeft} day${daysLeft > 1 ? 's' : ''} left`;
        } else if (hoursLeft > 0) {
          timeLeft = `${hoursLeft} hour${hoursLeft > 1 ? 's' : ''} left`;
        } else {
          timeLeft = `${minutesLeft} minute${minutesLeft > 1 ? 's' : ''} left`;
        }
        
        discount = {
          ...validDiscount,
          timeLeft,
        };
      }
    }
    
    // Remove discounts array and add single discount
    delete product.discounts;
    product.discount = discount;

    // Fetch related versions (same slug, different platform)
    let relatedVersions: unknown[] = [];
    const otherVersions = await db
      .collection("products")
      .find(
        {
          slug: product.slug,
          tool: { $ne: product.tool }, // Different platform
        },
        { projection: { _id: 0 } }
      )
      .toArray();

    relatedVersions = otherVersions;

    return NextResponse.json(
      {
        ...product,
        relatedVersions,
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Get product error:", err);

    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT /api/products/[slug] - Update product (Admin only)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const authResult = await requireAdmin(request);
    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const { slug } = await params;
    const body = await request.json();

    // Remove fields that shouldn't be updated directly
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...updateData } = body;

    const result = await db
      .collection("products")
      .updateOne({ slug }, { $set: { ...updateData, updatedAt: new Date() } });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const updatedProduct = await db
      .collection("products")
      .findOne({ slug }, { projection: { _id: 0 } });

    return NextResponse.json(
      { message: "Product updated successfully", product: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Update product error:", err);

    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE /api/products/[slug] - Delete product (Admin only)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const authResult = await requireAdmin(request);
    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const { slug } = await params;

    const result = await db.collection("products").deleteOne({ slug });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error("Delete product error:", err);

    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
