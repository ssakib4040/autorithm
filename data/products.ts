export interface Product {
  id: number;
  name: string;
  description: string;
  tool: "n8n" | "Make";
  category: string;
  price: number;
  slug: string;
}

export interface ProductDetail extends Product {
  headline: string;
  longDescription: string;
  keyFeatures: string[];
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  included: string[];
  forWho: string[];
  notFor: string[];
  technicalDetails: {
    platform: string;
    complexity: string;
    setupTime: string;
    apis: string[];
    triggers: string[];
    assumptions: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "AI Lead Enrichment System",
    description:
      "Automatically enrich leads with AI-powered research and scoring",
    tool: "n8n",
    category: "CRM",
    price: 149,
    slug: "1",
  },
  {
    id: 2,
    name: "SaaS Onboarding Orchestrator",
    description:
      "Complete user onboarding workflow with email sequences and task tracking",
    tool: "Make",
    category: "SaaS Ops",
    price: 199,
    slug: "2",
  },
  {
    id: 3,
    name: "E-commerce Order Pipeline",
    description: "Process orders, manage inventory, and sync across platforms",
    tool: "n8n",
    category: "E-commerce",
    price: 179,
    slug: "3",
  },
  {
    id: 4,
    name: "CRM Data Sync Engine",
    description: "Keep your CRM in perfect sync with all connected tools",
    tool: "n8n",
    category: "CRM",
    price: 129,
    slug: "4",
  },
  {
    id: 5,
    name: "Marketing Campaign Automator",
    description:
      "Multi-channel campaign orchestration with performance tracking",
    tool: "Make",
    category: "Marketing",
    price: 139,
    slug: "5",
  },
  {
    id: 6,
    name: "Social Media Scheduler Pro",
    description: "Content scheduling and publishing across all major platforms",
    tool: "Make",
    category: "Marketing",
    price: 119,
    slug: "6",
  },
  {
    id: 7,
    name: "Multi-Channel Support Router",
    description:
      "Route and manage support tickets across platforms intelligently",
    tool: "n8n",
    category: "Support",
    price: 159,
    slug: "7",
  },
  {
    id: 8,
    name: "Client Reporting System",
    description:
      "Automated report generation and delivery for client dashboards",
    tool: "Make",
    category: "Analytics",
    price: 149,
    slug: "8",
  },
  {
    id: 9,
    name: "Document Processing Pipeline",
    description: "Extract, transform, and route documents automatically",
    tool: "n8n",
    category: "Document Management",
    price: 169,
    slug: "9",
  },
  {
    id: 10,
    name: "Inventory Sync System",
    description:
      "Real-time inventory synchronization across all sales channels",
    tool: "n8n",
    category: "E-commerce",
    price: 169,
    slug: "10",
  },
  {
    id: 11,
    name: "Lead Scoring Pipeline",
    description: "Intelligent lead qualification and routing based on behavior",
    tool: "Make",
    category: "CRM",
    price: 139,
    slug: "11",
  },
  {
    id: 12,
    name: "Customer Feedback Aggregator",
    description:
      "Collect, analyze, and act on customer feedback from all sources",
    tool: "n8n",
    category: "Support",
    price: 129,
    slug: "12",
  },
  {
    id: 13,
    name: "Payment Processing Hub",
    description: "Unified payment handling across multiple providers",
    tool: "n8n",
    category: "Finance",
    price: 189,
    slug: "13",
  },
  {
    id: 14,
    name: "Content Distribution Hub",
    description: "One-click content syndication across multiple platforms",
    tool: "Make",
    category: "Marketing",
    price: 129,
    slug: "14",
  },
  {
    id: 15,
    name: "Appointment Scheduling System",
    description: "Smart booking and calendar management with reminders",
    tool: "Make",
    category: "SaaS Ops",
    price: 109,
    slug: "15",
  },
];

export const detailedProducts: Record<string, ProductDetail> = {
  "1": {
    id: 1,
    name: "AI Lead Enrichment System",
    description:
      "Automatically enrich leads with AI-powered research and scoring",
    tool: "n8n",
    category: "CRM",
    price: 149,
    slug: "1",
    headline:
      "Transform cold leads into qualified prospects with AI-powered intelligence",
    longDescription:
      "Transform raw leads into actionable prospects. Our AI Lead Enrichment System automatically researches companies, finds decision-makers, and scores leads based on your ideal customer profile—so your sales team only talks to qualified opportunities.",
    keyFeatures: [
      "Automated company research via public APIs and AI analysis",
      "Contact enrichment with job titles and social profiles",
      "Lead scoring based on configurable criteria",
      "Automatic CRM updates with enriched data",
      "Slack/email notifications for high-value leads",
    ],
    steps: [
      {
        number: 1,
        title: "Lead Capture",
        description:
          "New leads from forms, ads, or CRM triggers enter the workflow",
      },
      {
        number: 2,
        title: "Company Research",
        description:
          "AI gathers firmographic data, funding info, and tech stack details",
      },
      {
        number: 3,
        title: "Contact Enrichment",
        description:
          "Find decision-makers, validate emails, and pull social profiles",
      },
      {
        number: 4,
        title: "Lead Scoring",
        description:
          "Score based on company size, industry fit, and engagement signals",
      },
      {
        number: 5,
        title: "CRM Sync & Notification",
        description:
          "Update your CRM and notify sales reps about hot leads instantly",
      },
    ],
    included: [
      "Complete n8n workflow (JSON export)",
      "AI prompt templates for enrichment",
      "Lead scoring configuration guide",
      "CRM integration setup (Salesforce, HubSpot, Pipedrive)",
      "Error handling and retry logic",
      "30 days of implementation support",
    ],
    forWho: [
      "B2B sales teams who need better lead intelligence",
      "Marketing teams running high-volume campaigns",
      "Sales ops professionals managing CRM data quality",
      "Startups looking to punch above their weight with automation",
    ],
    notFor: [
      "B2C businesses with consumer-focused products",
      "Teams without a CRM system in place",
      "Organizations with strict data handling restrictions",
    ],
    technicalDetails: {
      platform: "n8n (self-hosted or cloud)",
      complexity: "Intermediate",
      setupTime: "2-4 hours",
      apis: ["OpenAI GPT-4", "Clearbit API", "HubSpot API", "Slack API"],
      triggers: [
        "Webhook (CRM form submission)",
        "Scheduled polling",
        "Manual trigger",
      ],
      assumptions: [
        "You have API access to your CRM",
        "You have an OpenAI or similar AI API key",
        "Basic understanding of n8n workflows",
      ],
    },
    faqs: [
      {
        question: "What CRMs does this integrate with?",
        answer:
          "Out of the box: Salesforce, HubSpot, and Pipedrive. We include setup guides for these three. The workflow can be adapted to any CRM with an API.",
      },
      {
        question: "How accurate is the lead scoring?",
        answer:
          "The scoring model is configurable based on your ICP. Typical accuracy is 75-85% when properly tuned with your historical data.",
      },
      {
        question: "What AI providers are supported?",
        answer:
          "The workflow is built for OpenAI GPT-4, but can be adapted for Anthropic Claude, Google Gemini, or any LLM API.",
      },
    ],
  },
  "2": {
    id: 2,
    name: "SaaS Onboarding Orchestrator",
    description:
      "Complete user onboarding workflow with email sequences and task tracking",
    tool: "Make",
    category: "SaaS Ops",
    price: 199,
    slug: "2",
    headline:
      "Guide new users from signup to activation with automated email sequences and task tracking",
    longDescription:
      "Guide new users to their first win with automated, personalized onboarding. Track progress, send contextual emails, and trigger in-app messages based on user behavior—all orchestrated seamlessly across your product and communication tools.",
    keyFeatures: [
      "Multi-step onboarding sequence with conditional branching",
      "Behavior-based email triggers and drip campaigns",
      "Progress tracking and milestone celebrations",
      "Integration with product analytics and email tools",
      "Automated task assignment for high-touch accounts",
    ],
    steps: [
      {
        number: 1,
        title: "User Signup Detection",
        description:
          "Workflow triggers when a new user signs up via webhook or database poll",
      },
      {
        number: 2,
        title: "Welcome & Setup",
        description:
          "Send welcome email and create initial tasks in your product",
      },
      {
        number: 3,
        title: "Behavior Tracking",
        description:
          "Monitor key actions like profile completion, first login, feature usage",
      },
      {
        number: 4,
        title: "Contextual Engagement",
        description:
          "Send relevant tips, tutorials, or offers based on user progress",
      },
      {
        number: 5,
        title: "Success Milestones",
        description:
          "Celebrate achievements and route power users to upsell flows",
      },
    ],
    included: [
      "Complete Make scenario collection",
      "Email sequence templates (customizable)",
      "Analytics integration setup (Mixpanel, Amplitude, Segment)",
      "CRM and support tool connectors",
      "A/B testing framework for messaging",
      "45 days of implementation support",
    ],
    forWho: [
      "SaaS companies with self-serve product onboarding",
      "Product teams looking to improve activation rates",
      "Customer success teams managing onboarding at scale",
      "Growth teams optimizing time-to-value",
    ],
    notFor: [
      "Products requiring extensive manual onboarding",
      "Teams without product analytics in place",
      "Very early-stage products still finding PMF",
    ],
    technicalDetails: {
      platform: "Make.com",
      complexity: "Intermediate to Advanced",
      setupTime: "3-5 hours",
      apis: [
        "Stripe API",
        "SendGrid/Mailgun",
        "Segment",
        "Intercom",
        "Google Sheets",
      ],
      triggers: [
        "Webhook (user signup)",
        "Scheduled checks (hourly)",
        "User activity events",
      ],
      assumptions: [
        "You have a product analytics tool with API access",
        "Your app can send webhooks for key events",
        "You use an ESP (Customer.io, Sendgrid, etc.)",
      ],
    },
    faqs: [
      {
        question: "Can I customize the email templates?",
        answer:
          "Absolutely. We provide base templates with proven copy, but you'll customize everything to match your brand and product.",
      },
      {
        question: "How does behavior tracking work?",
        answer:
          "The workflow listens for events from your analytics tool or receives webhooks from your app when users complete key actions.",
      },
      {
        question: "What if I don't have a product analytics tool?",
        answer:
          "The workflow can work with simple database queries or app webhooks, but analytics tools like Mixpanel make it much more powerful.",
      },
    ],
  },
  "3": {
    id: 3,
    name: "E-commerce Order Pipeline",
    description: "Process orders, manage inventory, and sync across platforms",
    tool: "n8n",
    category: "E-commerce",
    price: 179,
    slug: "3",
    headline:
      "Process orders, manage inventory, and sync across platforms automatically",
    longDescription:
      "Eliminate manual order processing and inventory headaches. This workflow handles everything from order capture to fulfillment tracking, syncing inventory across multiple sales channels and notifying customers at every step.",
    keyFeatures: [
      "Multi-channel order aggregation (Shopify, WooCommerce, custom stores)",
      "Real-time inventory sync across all platforms",
      "Automated fulfillment and shipping workflows",
      "Customer notification system (order, shipping, delivery)",
      "Payment reconciliation and fraud detection",
    ],
    steps: [
      {
        number: 1,
        title: "Order Capture",
        description: "Collect orders from all sales channels in real-time",
      },
      {
        number: 2,
        title: "Validation & Fraud Check",
        description:
          "Verify payment, check for fraud signals, validate address",
      },
      {
        number: 3,
        title: "Inventory Update",
        description:
          "Deduct stock and sync inventory levels across all platforms",
      },
      {
        number: 4,
        title: "Fulfillment Routing",
        description: "Send order to warehouse/3PL with optimal shipping method",
      },
      {
        number: 5,
        title: "Tracking & Notifications",
        description:
          "Update customer with shipping info and delivery estimates",
      },
    ],
    included: [
      "Complete n8n workflow with sub-workflows",
      "Inventory sync logic for multi-channel selling",
      "Customer notification templates (email & SMS)",
      "Fraud detection rules (configurable)",
      "Shipping provider integrations (ShipStation, EasyShip, etc.)",
      "60 days of implementation support",
    ],
    forWho: [
      "E-commerce brands selling on multiple platforms",
      "Online retailers with complex inventory needs",
      "Dropshippers coordinating multiple suppliers",
      "Growing stores drowning in manual order processing",
    ],
    notFor: [
      "Single-channel sellers with simple workflows",
      "Stores with fewer than 50 orders/month",
      "Businesses using all-in-one platforms like Shopify Plus",
    ],
    technicalDetails: {
      platform: "n8n (self-hosted recommended for order volume)",
      complexity: "Advanced",
      setupTime: "4-6 hours",
      apis: [
        "Shopify API",
        "WooCommerce API",
        "ShipStation API",
        "SendGrid",
        "Google Sheets",
      ],
      triggers: [
        "Webhook (new order)",
        "Inventory level changes",
        "Manual trigger",
      ],
      assumptions: [
        "You have API access to your store platforms",
        "You use a fulfillment service with API/webhook support",
        "Basic understanding of inventory management",
      ],
    },
    faqs: [
      {
        question: "Which e-commerce platforms are supported?",
        answer:
          "Shopify, WooCommerce, Magento, and BigCommerce out of the box. Custom stores can be integrated via API.",
      },
      {
        question: "How does inventory sync work with multiple warehouses?",
        answer:
          "The workflow can route orders based on inventory location, customer proximity, and shipping cost optimization.",
      },
      {
        question: "Can it handle international orders?",
        answer:
          "Yes, including currency conversion, customs documentation, and international shipping carriers.",
      },
    ],
  },
};

// Helper functions to filter products
export const getProductsByTool = (tool: "n8n" | "Make"): Product[] => {
  return allProducts.filter((product) => product.tool === tool);
};

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter((product) => product.category === category);
};

export const getFeaturedProducts = (limit: number = 6): Product[] => {
  return allProducts.slice(0, limit);
};

export const getProductDetail = (slug: string): ProductDetail | undefined => {
  return detailedProducts[slug];
};
