export interface Product {
  id: number;
  name: string;
  description: string;
  tool: "n8n" | "Make";
  category: string;
  price: number;
  slug: string;
  discounts?: {
    percentage: number;
    reason: string;
    startDate: Date;
    expiresAt: Date;
  }[];
  discount?: {
    percentage: number;
    reason: string;
    timeLeft?: string;
  };
  keyFeatures: string[];
  howItWorks: {
    title: string;
    description: string;
  }[];
  technicalDetails: {
    complexity: string;
    setupTime: string;
    apis: string[];
    requirements: string[];
  };
  whatsIncluded?: string[];
}

export interface ProductDetailResponse {
  name: string;
  category: string;
  product: Product;
  relatedVersions: Product[];
}

export interface ErrorResponse {
  status: number;
  message: string;
}
