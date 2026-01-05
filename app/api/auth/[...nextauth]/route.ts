import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        // Find user in database
        const user = await db
          .collection("users")
          .findOne({ email: credentials.email.toLowerCase() });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        // Return user object (this will be stored in session)
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        } as User;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to token on sign in
      if (user) {
        token.id = user.id;
        // Get user from DB to check admin status
        const dbUser = await db
          .collection("users")
          .findOne({ _id: new ObjectId(user.id) });
        token.isAdmin = dbUser?.isAdmin || false;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user data to session
      if (session.user) {
        (session.user as { id?: string; isAdmin?: boolean }).id =
          token.id as string;
        (session.user as { id?: string; isAdmin?: boolean }).isAdmin =
          token.isAdmin as boolean;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
