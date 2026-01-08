import { NextResponse } from "next/server";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export interface AuthUser {
  email: string;
  name: string;
  isAdmin?: boolean;
}

async function verifyToken(): Promise<AuthUser | null> {
  try {
    const headersList = await headers();
    const authorization = headersList.get("authorization");

    if (!authorization || !authorization.startsWith("Bearer ")) {
      return null;
    }

    const token = authorization.substring(7); // Remove "Bearer " prefix

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback-secret"
    ) as AuthUser;

    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export async function requireAuth() {
  const user = await verifyToken();
  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized: Valid Bearer token required" },
      { status: 401 }
    );
  }
  return user;
}

export async function requireAdmin() {
  const user = await verifyToken();
  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized: Valid Bearer token required" },
      { status: 401 }
    );
  }

  if (!user.isAdmin) {
    return NextResponse.json(
      { message: "Forbidden: Admin access required" },
      { status: 403 }
    );
  }

  return user;
}
