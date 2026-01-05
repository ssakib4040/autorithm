import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  isAdmin?: boolean;
}

export async function getSession(): Promise<AuthUser | null> {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return null;
    }

    return {
      id: (session.user as { id?: string }).id || "",
      email: session.user.email!,
      name: session.user.name!,
      isAdmin: (session.user as { isAdmin?: boolean }).isAdmin || false,
    };
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  return user;
}

export async function requireAdmin() {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (!user.isAdmin) {
    return NextResponse.json(
      { message: "Forbidden: Admin access required" },
      { status: 403 }
    );
  }

  return user;
}
