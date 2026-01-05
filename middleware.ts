import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Check if route requires admin access
    const isAdminRoute = path.startsWith("/admin");

    if (isAdminRoute && !token?.isAdmin) {
      // Redirect non-admin users trying to access admin routes
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;

        // Allow all API routes to pass through (handle auth in API endpoints)
        if (path.startsWith("/api")) {
          return true;
        }

        // Public routes that don't require auth
        const publicRoutes = [
          "/",
          "/login",
          "/register",
          "/products",
          "/contact",
        ];
        const isPublicRoute = publicRoutes.some(
          (route) => path === route || path.startsWith("/products/")
        );

        if (isPublicRoute) {
          return true;
        }

        // All other routes require authentication
        return !!token;
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

// Specify which routes this middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)",
  ],
};
