const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

interface FetchOptions extends RequestInit {
  token?: string;
}

async function apiRequest<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...fetchOptions.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "An error occurred" }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Products API
export const productsApi = {
  getAll: (params?: {
    page?: number;
    limit?: number;
    category?: string;
    tool?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, String(value));
        }
      });
    }
    const query = searchParams.toString();
    return apiRequest<{
      products: any[];
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    }>(`/products${query ? `?${query}` : ""}`);
  },

  getBySlug: (slug: string) => {
    return apiRequest<any>(`/products/${slug}`);
  },

  create: (data: any, token: string) => {
    return apiRequest<{ message: string; product: any }>("/products", {
      method: "POST",
      body: JSON.stringify(data),
      token,
    });
  },

  update: (slug: string, data: any, token: string) => {
    return apiRequest<{ message: string; product: any }>(`/products/${slug}`, {
      method: "PUT",
      body: JSON.stringify(data),
      token,
    });
  },

  delete: (slug: string, token: string) => {
    return apiRequest<{ message: string }>(`/products/${slug}`, {
      method: "DELETE",
      token,
    });
  },
};

// Auth API
export const authApi = {
  register: (data: { email: string; password: string; name?: string }) => {
    return apiRequest<{ message: string; user: any }>("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  login: (data: { email: string; password: string }) => {
    return apiRequest<{ message: string; token: string; user: any }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  forgotPassword: (email: string) => {
    return apiRequest<{ message: string }>("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  },

  resetPassword: (data: { token: string; password: string }) => {
    return apiRequest<{ message: string }>("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

export default apiRequest;
