import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name: string;
    isAdmin?: boolean;
    purchasedProducts: number[];
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      isAdmin?: boolean;
      purchasedProducts: number[];
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    isAdmin?: boolean;
    purchasedProducts: number[];
  }
}
