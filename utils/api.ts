const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

if (!process.env.NEXT_PUBLIC_API_URL) {
  console.log(
    "WARNING: NEXT_PUBLIC_API_URL is not set. Falling back to default localhost URL."
  );
}

interface Product {
  id: number;
  name: string;
  description: string;
  tool: "n8n" | "Make";
  category: string;
  price: number;
  slug: string;
}

interface User {
  email: string;
  name: string;
  isAdmin?: boolean;
  isVerified?: boolean;
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    // headers: {
    //   "Content-Type": "application/json",
    //   ...options.headers,
    // },
  });

  console.log("res= > ", res);

  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

function buildQuery(params?: Record<string, string | number>): string {
  if (!params) return "";
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(key, String(value));
  });
  return `?${searchParams.toString()}`;
}

// Products API
export const productsApi = {
  getAll: (params?: Record<string, string | number>) => {
    return apiRequest<{ products: Product[]; totalPages: number }>(
      `/products${buildQuery(params)}`
    );
  },

  getBySlug: (slug: string) => apiRequest<Product>(`/products/${slug}`),

  create: (data: Partial<Product>, token: string) =>
    apiRequest<{ message: string; product: Product }>("/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    }),

  update: (slug: string, data: Partial<Product>, token: string) =>
    apiRequest<{ message: string; product: Product }>(`/products/${slug}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    }),

  delete: (slug: string, token: string) =>
    apiRequest<{ message: string }>(`/products/${slug}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }),
};

// Auth API
export const authApi = {
  register: (data: { email: string; password: string; name?: string }) =>
    apiRequest<{ message: string; user: User }>("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  login: (data: { email: string; password: string }) =>
    apiRequest<{ message: string; token: string; user: User }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  forgotPassword: (email: string) =>
    apiRequest<{ message: string }>("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),

  resetPassword: (data: { token: string; password: string }) =>
    apiRequest<{ message: string }>("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
