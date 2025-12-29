import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/router";

interface User {
  id: string;
  email: string;
  name: string;
  purchasedProducts: number[];
}

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  forgotPassword: (
    email: string
  ) => Promise<{ success: boolean; error?: string }>;
  resetPassword: (
    token: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("autorithm_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("autorithm_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get stored users
    const usersJson = localStorage.getItem("autorithm_users");
    const users = usersJson ? JSON.parse(usersJson) : [];

    // Find user
    const foundUser = users.find((u: any) => u.email === email);

    if (!foundUser) {
      return { success: false, error: "No account found with this email" };
    }

    if (foundUser.password !== password) {
      return { success: false, error: "Incorrect password" };
    }

    // Login successful
    const userData = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      purchasedProducts: foundUser.purchasedProducts || [],
    };

    setUser(userData);
    localStorage.setItem("autorithm_user", JSON.stringify(userData));

    return { success: true };
  };

  const register = async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get stored users
    const usersJson = localStorage.getItem("autorithm_users");
    const users = usersJson ? JSON.parse(usersJson) : [];

    // Check if user exists
    if (users.find((u: any) => u.email === email)) {
      return {
        success: false,
        error: "An account with this email already exists",
      };
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
      purchasedProducts: [],
    };

    users.push(newUser);
    localStorage.setItem("autorithm_users", JSON.stringify(users));

    // Auto-login
    const userData = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      purchasedProducts: newUser.purchasedProducts,
    };

    setUser(userData);
    localStorage.setItem("autorithm_user", JSON.stringify(userData));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("autorithm_user");
    router.push("/");
  };

  const forgotPassword = async (email: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get stored users
    const usersJson = localStorage.getItem("autorithm_users");
    const users = usersJson ? JSON.parse(usersJson) : [];

    // Check if user exists
    const foundUser = users.find((u: any) => u.email === email);

    if (!foundUser) {
      return { success: false, error: "No account found with this email" };
    }

    // In a real app, this would send an email with a reset link
    // For demo purposes, we'll store a reset token
    const resetToken = Math.random().toString(36).substring(7);
    localStorage.setItem(`reset_token_${email}`, resetToken);

    console.log(
      `Password reset link: ${window.location.origin}/reset-password?token=${resetToken}&email=${email}`
    );

    return { success: true };
  };

  const resetPassword = async (token: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get email from URL (in real app, token would be verified on backend)
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");

    if (!email) {
      return { success: false, error: "Invalid reset link" };
    }

    // Verify token
    const storedToken = localStorage.getItem(`reset_token_${email}`);
    if (!storedToken || storedToken !== token) {
      return { success: false, error: "Invalid or expired reset link" };
    }

    // Update password
    const usersJson = localStorage.getItem("autorithm_users");
    const users = usersJson ? JSON.parse(usersJson) : [];

    const userIndex = users.findIndex((u: any) => u.email === email);
    if (userIndex === -1) {
      return { success: false, error: "User not found" };
    }

    users[userIndex].password = password;
    localStorage.setItem("autorithm_users", JSON.stringify(users));

    // Remove used token
    localStorage.removeItem(`reset_token_${email}`);

    return { success: true };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
