import { Product } from "@/types/product";

export const allProducts: Product[] = [
  {
    id: 1,
    name: "AI Lead Enrichment System",
    description:
      "Transform raw leads into actionable prospects with AI-powered research. Automatically enrich company data, find decision-makers, score leads based on your ICP, and sync everything to your CRM—so your sales team focuses on qualified opportunities.",
    tool: "n8n",
    category: "CRM",
    price: 149,
    slug: "ai-lead-enrichment-system",
    discounts: [
      {
        percentage: 20,
        reason: "Launch Week Special",
        startDate: new Date("2026-01-01"),
        expiresAt: new Date("2026-02-01"),
      },
      {
        percentage: 10,
        reason: "Holiday Sale 2025",
        startDate: new Date("2025-12-20"),
        expiresAt: new Date("2025-12-31"),
      },
    ],
    keyFeatures: [
      "Automated company research via public APIs and AI analysis",
      "Contact enrichment with job titles and social profiles",
      "Lead scoring based on configurable criteria",
      "Automatic CRM updates with enriched data",
      "Slack/email notifications for high-value leads",
    ],
    howItWorks: [
      {
        title: "Lead Capture",
        description:
          "New leads from forms, ads, or CRM triggers enter the workflow",
      },
      {
        title: "Company Research",
        description:
          "AI gathers firmographic data, funding info, and tech stack details",
      },
      {
        title: "Contact Enrichment",
        description:
          "Find decision-makers, validate emails, and pull social profiles",
      },
      {
        title: "Lead Scoring",
        description:
          "Score based on company size, industry fit, and engagement signals",
      },
      {
        title: "CRM Sync",
        description:
          "Update your CRM and notify sales reps about hot leads instantly",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate",
      setupTime: "2-4 hours",
      apis: ["OpenAI GPT-4", "Clearbit API", "HubSpot API", "Slack API"],
      requirements: [
        "You have API access to your CRM",
        "You have an OpenAI or similar AI API key",
        "Basic understanding of n8n workflows",
      ],
    },
    whatsIncluded: [
      "Complete n8n workflow (JSON export)",
      "AI prompt templates for lead enrichment",
      "Lead scoring configuration guide",
      "CRM integration setup (Salesforce, HubSpot, Pipedrive)",
      "Error handling and retry logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 2,
    name: "AI Lead Enrichment System",
    description:
      "Transform raw leads into actionable prospects with AI-powered research. Automatically enrich company data, find decision-makers, score leads based on your ICP, and sync everything to your CRM—so your sales team focuses on qualified opportunities.",
    tool: "Make",
    category: "CRM",
    price: 169,
    slug: "ai-lead-enrichment-system", // Same slug = related product
    discounts: [
      {
        percentage: 15,
        reason: "Launch Week Special",
        startDate: new Date("2026-01-01"),
        expiresAt: new Date("2026-02-01"),
      },
    ],
    keyFeatures: [
      "Automated company research via public APIs and AI analysis",
      "Contact enrichment with job titles and social profiles",
      "Lead scoring based on configurable criteria",
      "Automatic CRM updates with enriched data",
      "Slack/email notifications for high-value leads",
    ],
    howItWorks: [
      {
        title: "Lead Capture",
        description:
          "New leads from forms, ads, or CRM triggers enter the workflow",
      },
      {
        title: "Company Research",
        description:
          "AI gathers firmographic data, funding info, and tech stack details",
      },
      {
        title: "Contact Enrichment",
        description:
          "Find decision-makers, validate emails, and pull social profiles",
      },
      {
        title: "Lead Scoring",
        description:
          "Score based on company size, industry fit, and engagement signals",
      },
      {
        title: "CRM Sync",
        description:
          "Update your CRM and notify sales reps about hot leads instantly",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate",
      setupTime: "2-4 hours",
      apis: ["OpenAI GPT-4", "Clearbit API", "Salesforce API", "Make Webhooks"],
      requirements: [
        "You have API access to your CRM",
        "You have an OpenAI or similar AI API key",
        "Basic understanding of Make.com scenarios",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "AI prompt templates for lead enrichment",
      "Lead scoring configuration guide",
      "CRM integration setup (Salesforce, HubSpot, Pipedrive)",
      "Error handling and retry logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 3,
    name: "SaaS Onboarding Orchestrator",
    description:
      "Guide new users from signup to activation with automated, personalized onboarding workflows. Track progress, send behavior-based emails, and trigger in-app messages—all orchestrated seamlessly to boost activation and retention rates.",
    tool: "Make",
    category: "SaaS Ops",
    price: 199,
    slug: "saas-onboarding-orchestrator",
    discounts: [
      {
        percentage: 15,
        reason: "New Year Sale",
        startDate: new Date("2026-01-01"),
        expiresAt: new Date("2026-01-31"),
      },
    ],
    keyFeatures: [
      "Multi-step onboarding sequence with conditional branching",
      "Behavior-based email triggers and drip campaigns",
      "Progress tracking and milestone celebrations",
      "Integration with product analytics and email tools",
      "Automated task assignment for high-touch accounts",
    ],
    howItWorks: [
      {
        title: "User Signup Detection",
        description:
          "Workflow triggers when a new user signs up via webhook or database poll",
      },
      {
        title: "Welcome & Setup",
        description:
          "Send welcome email and create initial tasks in your product",
      },
      {
        title: "Behavior Tracking",
        description:
          "Monitor key actions like profile completion and feature usage",
      },
      {
        title: "Contextual Engagement",
        description: "Send relevant tips and tutorials based on user progress",
      },
      {
        title: "Milestone Celebration",
        description:
          "Celebrate achievements and route power users to upsell flows",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate to Advanced",
      setupTime: "3-5 hours",
      apis: [
        "Stripe API",
        "SendGrid/Mailgun",
        "Segment",
        "Intercom",
        "Mixpanel",
      ],
      requirements: [
        "You have a product analytics tool with API access",
        "Your app can send webhooks for key events",
        "You use an email service provider",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "Onboarding email sequence templates",
      "User journey configuration guide",
      "Product analytics integration setup",
      "Behavioral trigger and milestone logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 4,
    name: "E-commerce Order Pipeline",
    description:
      "Eliminate manual order processing with end-to-end automation. Capture orders from multiple channels, validate payments, sync inventory in real-time, route to fulfillment, and keep customers updated with tracking—all automatically.",
    tool: "n8n",
    category: "E-commerce",
    price: 179,
    slug: "ecommerce-order-pipeline",
    keyFeatures: [
      "Multi-channel order aggregation (Shopify, WooCommerce, custom stores)",
      "Real-time inventory sync across all platforms",
      "Automated fulfillment and shipping workflows",
      "Customer notification system (order, shipping, delivery)",
      "Payment reconciliation and fraud detection",
    ],
    howItWorks: [
      {
        title: "Order Capture",
        description: "Collect orders from all sales channels in real-time",
      },
      {
        title: "Validation & Fraud Check",
        description:
          "Verify payment, check for fraud signals, validate address",
      },
      {
        title: "Inventory Update",
        description:
          "Deduct stock and sync inventory levels across all platforms",
      },
      {
        title: "Fulfillment Routing",
        description: "Send order to warehouse with optimal shipping method",
      },
      {
        title: "Customer Notifications",
        description:
          "Update customer with shipping info and delivery estimates",
      },
    ],
    technicalDetails: {
      complexity: "Advanced",
      setupTime: "4-6 hours",
      apis: ["Shopify API", "WooCommerce API", "ShipStation API", "SendGrid"],
      requirements: [
        "You have API access to your store platforms",
        "You use a fulfillment service with API/webhook support",
        "Basic understanding of inventory management",
      ],
    },
    whatsIncluded: [
      "Complete n8n workflow (JSON export)",
      "Order processing templates for multiple channels",
      "Inventory management configuration guide",
      "Shipping integration setup (ShipStation, EasyShip)",
      "Fraud detection and payment validation logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 5,
    name: "E-commerce Order Pipeline",
    description:
      "Eliminate manual order processing with end-to-end automation. Capture orders from multiple channels, validate payments, sync inventory in real-time, route to fulfillment, and keep customers updated with tracking—all automatically.",
    tool: "Make",
    category: "E-commerce",
    price: 189,
    slug: "ecommerce-order-pipeline", // Same slug = related product
    keyFeatures: [
      "Multi-channel order aggregation (Shopify, WooCommerce, custom stores)",
      "Real-time inventory sync across all platforms",
      "Automated fulfillment and shipping workflows",
      "Customer notification system (order, shipping, delivery)",
      "Payment reconciliation and fraud detection",
    ],
    howItWorks: [
      {
        title: "Order Capture",
        description: "Collect orders from all sales channels in real-time",
      },
      {
        title: "Validation & Fraud Check",
        description:
          "Verify payment, check for fraud signals, validate address",
      },
      {
        title: "Inventory Update",
        description:
          "Deduct stock and sync inventory levels across all platforms",
      },
      {
        title: "Fulfillment Routing",
        description: "Send order to warehouse with optimal shipping method",
      },
      {
        title: "Customer Notifications",
        description:
          "Update customer with shipping info and delivery estimates",
      },
    ],
    technicalDetails: {
      complexity: "Advanced",
      setupTime: "4-6 hours",
      apis: ["Shopify API", "WooCommerce API", "EasyShip API", "Twilio SMS"],
      requirements: [
        "You have API access to your store platforms",
        "You use a fulfillment service with API/webhook support",
        "Basic understanding of inventory management",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "Multi-channel order processing templates",
      "Inventory sync configuration guide",
      "Shipping integration setup (EasyShip, custom carriers)",
      "Payment reconciliation and fraud detection logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 6,
    name: "CRM Data Sync Engine",
    description:
      "Keep your CRM perfectly synchronized with all connected tools using bi-directional sync. Handle conflicts intelligently, transform data seamlessly, and ensure every system stays updated in real-time—no more manual data entry or discrepancies.",
    tool: "n8n",
    category: "CRM",
    price: 129,
    slug: "crm-data-sync-engine",
    keyFeatures: [
      "Bi-directional sync between CRM and connected tools",
      "Conflict resolution with configurable merge strategies",
      "Real-time data transformation and mapping",
      "Automated error handling and retry logic",
      "Support for Salesforce, HubSpot, Pipedrive, and more",
    ],
    howItWorks: [
      {
        title: "Change Detection",
        description: "Monitor CRM and connected tools for data changes",
      },
      {
        title: "Data Transformation",
        description:
          "Map and transform data between different platform schemas",
      },
      {
        title: "Conflict Resolution",
        description: "Handle conflicts with configurable merge strategies",
      },
      {
        title: "Bi-directional Sync",
        description: "Keep all systems updated in real-time",
      },
      {
        title: "Error Handling",
        description: "Log issues and retry failed syncs automatically",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate",
      setupTime: "3-4 hours",
      apis: [
        "Salesforce API",
        "HubSpot API",
        "Pipedrive API",
        "Zapier Webhooks",
      ],
      requirements: [
        "You have API access to your CRM and connected tools",
        "Understanding of data mapping and transformation",
        "N8n instance is properly configured",
      ],
    },
    whatsIncluded: [
      "Complete n8n workflow (JSON export)",
      "Data mapping templates for major CRMs",
      "Bi-directional sync configuration guide",
      "CRM integration setup (Salesforce, HubSpot, Pipedrive)",
      "Conflict resolution and error handling logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 7,
    name: "Marketing Campaign Automator",
    description:
      "Orchestrate multi-channel marketing campaigns effortlessly across email, social media, and ads. Automate A/B testing, track performance in real-time, optimize based on results, and generate comprehensive insights—all from one powerful workflow.",
    tool: "Make",
    category: "Marketing",
    price: 139,
    slug: "marketing-campaign-automator",
    keyFeatures: [
      "Multi-channel campaign orchestration (email, social, ads)",
      "Automated A/B testing and optimization",
      "Real-time performance tracking and analytics",
      "Behavioral targeting and segmentation",
      "Comprehensive reporting and insights dashboard",
    ],
    howItWorks: [
      {
        title: "Campaign Setup",
        description:
          "Define target audience, channels, and messaging sequences",
      },
      {
        title: "Content Distribution",
        description: "Publish content across email, social, and ad platforms",
      },
      {
        title: "Performance Tracking",
        description: "Monitor opens, clicks, conversions across all channels",
      },
      {
        title: "A/B Testing",
        description:
          "Automatically test variants and optimize for best performance",
      },
      {
        title: "Reporting",
        description: "Generate comprehensive reports and insights",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate",
      setupTime: "2-3 hours",
      apis: [
        "Facebook Ads API",
        "Google Ads API",
        "Mailchimp API",
        "Hootsuite API",
      ],
      requirements: [
        "You have accounts on the advertising platforms you want to use",
        "API access to your email and social media tools",
        "Basic understanding of campaign management",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "Campaign templates for multiple channels",
      "A/B testing configuration guide",
      "Multi-channel integration setup (ads, email, social)",
      "Performance tracking and optimization logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 8,
    name: "Social Media Scheduler Pro",
    description:
      "Schedule and publish content across Twitter, LinkedIn, Instagram, and Facebook with AI-powered timing optimization. Monitor engagement, track performance, and manage your entire social media presence from a unified content calendar.",
    tool: "Make",
    category: "Marketing",
    price: 119,
    slug: "social-media-scheduler-pro",
    keyFeatures: [
      "Cross-platform scheduling (Twitter, LinkedIn, Instagram, Facebook)",
      "AI-powered optimal posting time suggestions",
      "Content calendar with drag-and-drop interface",
      "Engagement monitoring and response tracking",
      "Performance analytics and growth metrics",
    ],
    howItWorks: [
      {
        title: "Content Planning",
        description: "Create and organize content calendar across platforms",
      },
      {
        title: "Smart Scheduling",
        description: "AI suggests optimal posting times for maximum engagement",
      },
      {
        title: "Cross-Platform Publishing",
        description:
          "Automatically publish to Twitter, LinkedIn, Instagram, Facebook",
      },
      {
        title: "Engagement Monitoring",
        description: "Track likes, comments, shares, and respond promptly",
      },
      {
        title: "Analytics Dashboard",
        description: "View performance metrics and growth trends",
      },
    ],
    technicalDetails: {
      complexity: "Beginner to Intermediate",
      setupTime: "1-2 hours",
      apis: [
        "Twitter API",
        "LinkedIn API",
        "Instagram Graph API",
        "Facebook Graph API",
      ],
      requirements: [
        "You have business accounts on social platforms",
        "API access tokens for each platform",
        "Understanding of social media best practices",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "Content scheduling templates and calendar",
      "Platform-specific optimization guide",
      "Social media API integration setup",
      "Engagement tracking and analytics logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 9,
    name: "Multi-Channel Support Router",
    description:
      "Aggregate support tickets from email, chat, social media, and phone into one unified system. AI categorizes issues, intelligently routes to the right team, tracks SLAs, and ensures no customer request falls through the cracks.",
    tool: "n8n",
    category: "Support",
    price: 159,
    slug: "multi-channel-support-router",
    keyFeatures: [
      "Aggregate tickets from email, chat, social media, and phone",
      "AI-powered categorization and priority assignment",
      "Intelligent routing based on agent skills and workload",
      "SLA tracking and escalation workflows",
      "Customer satisfaction and resolution time monitoring",
    ],
    howItWorks: [
      {
        title: "Ticket Aggregation",
        description: "Collect support requests from email, chat, social media",
      },
      {
        title: "Smart Categorization",
        description: "AI classifies issues by type, urgency, and complexity",
      },
      {
        title: "Intelligent Routing",
        description:
          "Assign tickets to the right team based on skills and workload",
      },
      {
        title: "Priority Management",
        description: "Escalate urgent issues and track SLA compliance",
      },
      {
        title: "Response Tracking",
        description: "Monitor resolution time and customer satisfaction",
      },
    ],
    technicalDetails: {
      complexity: "Advanced",
      setupTime: "4-5 hours",
      apis: [
        "Zendesk API",
        "Intercom API",
        "Slack API",
        "Gmail API",
        "OpenAI API",
      ],
      requirements: [
        "You have a ticketing system with API access",
        "Team has defined skills and availability",
        "SLA policies are documented",
      ],
    },
    whatsIncluded: [
      "Complete n8n workflow (JSON export)",
      "AI categorization prompt templates",
      "Ticket routing and SLA configuration guide",
      "Support platform integration setup (Zendesk, Intercom)",
      "Priority escalation and intelligent routing logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 10,
    name: "Client Reporting System",
    description:
      "Generate and deliver beautiful branded reports automatically. Collect data from analytics, CRM, and ad platforms, calculate KPIs, create custom PDF reports or interactive dashboards, and schedule delivery—keeping clients informed effortlessly.",
    tool: "Make",
    category: "Analytics",
    price: 149,
    slug: "client-reporting-system",
    keyFeatures: [
      "Automated data collection from multiple sources",
      "Custom branded PDF reports and dashboards",
      "Scheduled report delivery via email",
      "Real-time client portal access",
      "KPI tracking and trend analysis",
    ],
    howItWorks: [
      {
        title: "Data Collection",
        description: "Gather metrics from analytics, CRM, and ad platforms",
      },
      {
        title: "Data Processing",
        description: "Calculate KPIs, trends, and performance insights",
      },
      {
        title: "Report Generation",
        description: "Create branded PDF reports or interactive dashboards",
      },
      {
        title: "Scheduled Delivery",
        description: "Automatically email reports to clients on schedule",
      },
      {
        title: "Client Portal",
        description: "Provide real-time access to live dashboards",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate",
      setupTime: "3-4 hours",
      apis: [
        "Google Analytics API",
        "Facebook Ads API",
        "HubSpot API",
        "Airtable API",
      ],
      requirements: [
        "You have access to client data sources",
        "Understanding of KPIs and metrics",
        "Email service for report delivery",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "Branded report templates (PDF and dashboard)",
      "KPI tracking configuration guide",
      "Analytics platform integration setup",
      "Automated scheduling and delivery logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 11,
    name: "Document Processing Pipeline",
    description:
      "Extract data from PDFs, images, and scans using OCR and AI. Automatically classify documents by type, transform data into structured formats, route to appropriate destinations, and integrate with downstream systems—eliminating manual data entry.",
    tool: "n8n",
    category: "Document Management",
    price: 169,
    slug: "document-processing-pipeline",
    keyFeatures: [
      "OCR and data extraction from PDFs, images, and scans",
      "AI-powered document classification and categorization",
      "Structured data output for downstream systems",
      "Intelligent routing to appropriate destinations",
      "Support for multiple document types and formats",
    ],
    howItWorks: [
      {
        title: "Document Intake",
        description: "Receive documents via email, upload, or API",
      },
      {
        title: "OCR & Extraction",
        description: "Extract text, data, and metadata from documents",
      },
      {
        title: "Classification",
        description: "AI categorizes documents by type and content",
      },
      {
        title: "Data Transformation",
        description: "Structure extracted data for downstream systems",
      },
      {
        title: "Smart Routing",
        description: "Send processed documents to appropriate destinations",
      },
    ],
    technicalDetails: {
      complexity: "Advanced",
      setupTime: "5-6 hours",
      apis: [
        "Google Cloud Vision API",
        "AWS Textract",
        "OpenAI API",
        "Google Drive API",
      ],
      requirements: [
        "You have OCR service API access",
        "Document storage solution in place",
        "Understanding of document workflows",
      ],
    },
    whatsIncluded: [
      "Complete n8n workflow (JSON export)",
      "Document classification templates",
      "OCR and data extraction configuration guide",
      "Storage and routing integration setup",
      "AI-powered categorization and validation logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 12,
    name: "Inventory Sync System",
    description:
      "Synchronize inventory in real-time across Shopify, Amazon, eBay, and more. Track multi-warehouse stock levels, prevent overselling, trigger low-stock alerts, automate reorder workflows, and maintain accurate inventory counts across every sales channel.",
    tool: "n8n",
    category: "E-commerce",
    price: 169,
    slug: "inventory-sync-system",
    keyFeatures: [
      "Real-time inventory sync across Shopify, Amazon, eBay, and more",
      "Multi-warehouse stock tracking and management",
      "Low stock alerts and reorder automation",
      "Instant updates on sales, returns, and adjustments",
      "Prevent overselling with accurate stock counts",
    ],
    howItWorks: [
      {
        title: "Inventory Monitoring",
        description: "Track stock levels across all warehouses and channels",
      },
      {
        title: "Change Detection",
        description: "Instantly detect sales, returns, or manual adjustments",
      },
      {
        title: "Cross-Platform Update",
        description: "Sync inventory to Shopify, Amazon, eBay simultaneously",
      },
      {
        title: "Low Stock Alerts",
        description: "Notify team when inventory falls below thresholds",
      },
      {
        title: "Reorder Automation",
        description: "Trigger purchase orders when stock runs low",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate to Advanced",
      setupTime: "4-5 hours",
      apis: [
        "Shopify API",
        "Amazon MWS",
        "eBay API",
        "Square API",
        "Slack API",
      ],
      requirements: [
        "You have seller accounts on multiple platforms",
        "API credentials for each sales channel",
        "Inventory management system in place",
      ],
    },
    whatsIncluded: [
      "Complete n8n workflow (JSON export)",
      "Multi-channel inventory templates",
      "Real-time sync configuration guide",
      "E-commerce platform integration setup (Shopify, Amazon, eBay)",
      "Low stock alerts and reorder automation logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 13,
    name: "Lead Scoring Pipeline",
    description:
      "Score and qualify leads intelligently based on behavior, demographics, and firmographics. Track website visits, email engagement, and content downloads to calculate scores, categorize as hot/warm/cold, and route qualified leads to sales automatically.",
    tool: "Make",
    category: "CRM",
    price: 139,
    slug: "lead-scoring-pipeline",
    keyFeatures: [
      "Behavioral tracking (website visits, email opens, downloads)",
      "Configurable scoring based on demographics and firmographics",
      "Lead qualification and categorization (hot, warm, cold)",
      "Automated routing to sales reps",
      "Integration with CRM and marketing automation tools",
    ],
    howItWorks: [
      {
        title: "Lead Ingestion",
        description: "Capture leads from forms, campaigns, and partnerships",
      },
      {
        title: "Behavioral Tracking",
        description:
          "Monitor website visits, email opens, and content downloads",
      },
      {
        title: "Score Calculation",
        description:
          "Assign points based on demographics, firmographics, and actions",
      },
      {
        title: "Qualification",
        description: "Categorize leads as hot, warm, or cold prospects",
      },
      {
        title: "Smart Routing",
        description: "Assign qualified leads to sales reps automatically",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate",
      setupTime: "2-3 hours",
      apis: [
        "HubSpot API",
        "Salesforce API",
        "Google Analytics API",
        "Clearbit API",
      ],
      requirements: [
        "You have a CRM with API access",
        "Website tracking is implemented",
        "Lead scoring criteria are defined",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "Lead scoring criteria templates",
      "Behavioral tracking configuration guide",
      "CRM integration setup (HubSpot, Salesforce)",
      "Qualification and routing automation logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 14,
    name: "Customer Feedback Aggregator",
    description:
      "Aggregate customer feedback from surveys, reviews, support tickets, and social media into one unified system. AI analyzes sentiment, extracts themes, categorizes by topic, routes critical issues to teams, and provides actionable trend insights.",
    tool: "n8n",
    category: "Support",
    price: 129,
    slug: "customer-feedback-aggregator",
    keyFeatures: [
      "Multi-source feedback collection (surveys, reviews, tickets, social)",
      "AI sentiment analysis and theme extraction",
      "Automatic categorization by product, feature, or issue",
      "Alert routing for critical issues and opportunities",
      "Trend analysis and insights dashboard",
    ],
    howItWorks: [
      {
        title: "Multi-Source Collection",
        description:
          "Gather feedback from surveys, reviews, support tickets, social",
      },
      {
        title: "Sentiment Analysis",
        description: "AI analyzes tone and extracts key themes from feedback",
      },
      {
        title: "Topic Categorization",
        description:
          "Automatically tag feedback by product, feature, or issue type",
      },
      {
        title: "Alert Routing",
        description:
          "Notify relevant teams of critical issues or opportunities",
      },
      {
        title: "Insights Dashboard",
        description:
          "View trends, common complaints, and improvement suggestions",
      },
    ],
    technicalDetails: {
      complexity: "Intermediate",
      setupTime: "3-4 hours",
      apis: [
        "Typeform API",
        "Google Reviews API",
        "Trustpilot API",
        "OpenAI API",
      ],
      requirements: [
        "You have feedback collection tools in place",
        "Access to review platforms",
        "Team is ready to act on feedback",
      ],
    },
    whatsIncluded: [
      "Complete n8n workflow (JSON export)",
      "AI sentiment analysis prompt templates",
      "Feedback categorization configuration guide",
      "Multi-source integration setup (surveys, reviews, social)",
      "Alert routing and trend analysis logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 15,
    name: "Payment Processing Hub",
    description:
      "Process payments seamlessly across Stripe, PayPal, Square, and more. Handle authorization, capture, and settlement automatically, reconcile with accounting systems, manage refunds and chargebacks, and screen for fraud—all from one unified hub.",
    tool: "n8n",
    category: "Finance",
    price: 189,
    slug: "payment-processing-hub",
    keyFeatures: [
      "Multi-gateway support (Stripe, PayPal, Square, etc.)",
      "Automated transaction processing and settlement",
      "Payment reconciliation with accounting systems",
      "Refund and chargeback management",
      "Fraud detection and prevention",
    ],
    howItWorks: [
      {
        title: "Payment Initiation",
        description: "Accept payments via Stripe, PayPal, and other gateways",
      },
      {
        title: "Transaction Processing",
        description: "Handle authorization, capture, and settlement",
      },
      {
        title: "Reconciliation",
        description: "Match payments with orders and update accounting systems",
      },
      {
        title: "Refund Management",
        description: "Process refunds and chargebacks automatically",
      },
      {
        title: "Fraud Prevention",
        description: "Screen transactions for suspicious activity",
      },
    ],
    technicalDetails: {
      complexity: "Advanced",
      setupTime: "5-7 hours",
      apis: ["Stripe API", "PayPal API", "Square API", "QuickBooks API"],
      requirements: [
        "You have merchant accounts with payment providers",
        "Accounting system with API access",
        "PCI compliance understanding",
      ],
    },
    whatsIncluded: [
      "Complete n8n workflow (JSON export)",
      "Multi-gateway payment templates",
      "Payment reconciliation configuration guide",
      "Gateway integration setup (Stripe, PayPal, Square)",
      "Fraud detection and refund management logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 16,
    name: "Content Distribution Hub",
    description:
      "Distribute content effortlessly to Medium, Dev.to, LinkedIn, and more with one click. Automatically optimize formatting for each platform, add SEO enhancements with canonical tags, track cross-platform performance, and schedule publications smartly.",
    tool: "Make",
    category: "Marketing",
    price: 129,
    slug: "content-distribution-hub",
    keyFeatures: [
      "One-click publishing to Medium, Dev.to, LinkedIn, and more",
      "Automatic format optimization for each platform",
      "SEO enhancement with canonical tags and metadata",
      "Cross-platform performance tracking",
      "Content calendar and scheduling",
    ],
    howItWorks: [
      {
        title: "Content Creation",
        description: "Create or import content from your CMS or blog",
      },
      {
        title: "Format Optimization",
        description:
          "Automatically adapt content for each platform's requirements",
      },
      {
        title: "Multi-Platform Publishing",
        description: "Distribute to Medium, Dev.to, LinkedIn, and more",
      },
      {
        title: "SEO Enhancement",
        description: "Add canonical tags and optimize for search engines",
      },
      {
        title: "Performance Tracking",
        description:
          "Monitor views, engagement, and traffic from each platform",
      },
    ],
    technicalDetails: {
      complexity: "Beginner to Intermediate",
      setupTime: "2-3 hours",
      apis: ["Medium API", "Dev.to API", "LinkedIn API", "WordPress API"],
      requirements: [
        "You have accounts on content platforms",
        "Content is ready for distribution",
        "Understanding of SEO best practices",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "Content formatting templates for each platform",
      "SEO optimization and canonical tags guide",
      "Multi-platform integration setup (Medium, Dev.to, LinkedIn)",
      "Performance tracking and scheduling logic",
      "30 days of implementation support",
    ],
  },
  {
    id: 17,
    name: "Appointment Scheduling System",
    description:
      "Simplify appointment booking with real-time availability based on calendar sync. Allow clients to book effortlessly, send automated email and SMS reminders, handle time zones intelligently, and automate follow-ups with feedback collection.",
    tool: "Make",
    category: "SaaS Ops",
    price: 109,
    slug: "appointment-scheduling-system",
    keyFeatures: [
      "Real-time availability based on calendar sync",
      "Automated email and SMS reminders",
      "Calendar integration (Google, Outlook, iCal)",
      "Time zone detection and conversion",
      "Follow-up automation and feedback collection",
    ],
    howItWorks: [
      {
        title: "Availability Management",
        description: "Sync calendars and define available time slots",
      },
      {
        title: "Smart Booking",
        description:
          "Allow clients to book appointments based on real-time availability",
      },
      {
        title: "Automated Reminders",
        description: "Send email and SMS reminders before appointments",
      },
      {
        title: "Calendar Sync",
        description: "Update Google Calendar, Outlook, and team calendars",
      },
      {
        title: "Follow-up Automation",
        description:
          "Send thank-you messages and request feedback after meetings",
      },
    ],
    technicalDetails: {
      complexity: "Beginner to Intermediate",
      setupTime: "1-2 hours",
      apis: [
        "Google Calendar API",
        "Outlook Calendar API",
        "Twilio SMS API",
        "SendGrid API",
      ],
      requirements: [
        "You have calendar access via API",
        "Email and SMS service accounts",
        "Booking page or form is set up",
      ],
    },
    whatsIncluded: [
      "Complete Make.com scenario (blueprint)",
      "Booking page templates and reminder sequences",
      "Calendar sync configuration guide",
      "Multi-calendar integration setup (Google, Outlook)",
      "Automated reminder and follow-up logic",
      "30 days of implementation support",
    ],
  },
];

// export const detailedProducts: ProductDetail[] = [
//   {
//     id: 1,
//     name: "AI Lead Enrichment System",
//     description: "Automatically enrich leads with AI-powered research and scoring",
//     tool: "n8n",
//     category: "CRM",
//     price: 149,
//     slug: "1",
//     headline: "Transform cold leads into qualified prospects with AI-powered intelligence",
//     longDescription: "Transform raw leads into actionable prospects. Our AI Lead Enrichment System automatically researches companies, finds decision-makers, and scores leads based on your ideal customer profile—so your sales team only talks to qualified opportunities.",
//     keyFeatures: [
//       "Automated company research via public APIs and AI analysis",
//       "Contact enrichment with job titles and social profiles",
//       "Lead scoring based on configurable criteria",
//       "Automatic CRM updates with enriched data",
//       "Slack/email notifications for high-value leads",
//     ],
//     steps: [
//       {
//         number: 1,
//         title: "Lead Capture",
//         description: "New leads from forms, ads, or CRM triggers enter the workflow",
//       },
//       {
//         number: 2,
//         title: "Company Research",
//         description: "AI gathers firmographic data, funding info, and tech stack details",
//       },
//       {
//         number: 3,
//         title: "Contact Enrichment",
//         description: "Find decision-makers, validate emails, and pull social profiles",
//       },
//       {
//         number: 4,
//         title: "Lead Scoring",
//         description: "Score based on company size, industry fit, and engagement signals",
//       },
//       {
//         number: 5,
//         title: "CRM Sync & Notification",
//         description: "Update your CRM and notify sales reps about hot leads instantly",
//       },
//     ],
//     included: [
//       "Complete n8n workflow (JSON export)",
//       "AI prompt templates for enrichment",
//       "Lead scoring configuration guide",
//       "CRM integration setup (Salesforce, HubSpot, Pipedrive)",
//       "Error handling and retry logic",
//       "30 days of implementation support",
//     ],
//     forWho: [
//       "B2B sales teams who need better lead intelligence",
//       "Marketing teams running high-volume campaigns",
//       "Sales ops professionals managing CRM data quality",
//       "Startups looking to punch above their weight with automation",
//     ],
//     notFor: [
//       "B2C businesses with consumer-focused products",
//       "Teams without a CRM system in place",
//       "Organizations with strict data handling restrictions",
//     ],
//     technicalDetails: {
//       platform: "n8n (self-hosted or cloud)",
//       complexity: "Intermediate",
//       setupTime: "2-4 hours",
//       apis: ["OpenAI GPT-4", "Clearbit API", "HubSpot API", "Slack API"],
//       triggers: [
//         "Webhook (CRM form submission)",
//         "Scheduled polling",
//         "Manual trigger",
//       ],
//       assumptions: [
//         "You have API access to your CRM",
//         "You have an OpenAI or similar AI API key",
//         "Basic understanding of n8n workflows",
//       ],
//     },
//     faqs: [
//       {
//         question: "What CRMs does this integrate with?",
//         answer: "Out of the box: Salesforce, HubSpot, and Pipedrive. We include setup guides for these three. The workflow can be adapted to any CRM with an API.",
//       },
//       {
//         question: "How accurate is the lead scoring?",
//         answer: "The scoring model is configurable based on your ICP. Typical accuracy is 75-85% when properly tuned with your historical data.",
//       },
//       {
//         question: "What AI providers are supported?",
//         answer: "The workflow is built for OpenAI GPT-4, but can be adapted for Anthropic Claude, Google Gemini, or any LLM API.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "SaaS Onboarding Orchestrator",
//     description: "Complete user onboarding workflow with email sequences and task tracking",
//     tool: "Make",
//     category: "SaaS Ops",
//     price: 199,
//     slug: "2",
//     headline: "Guide new users from signup to activation with automated email sequences and task tracking",
//     longDescription: "Guide new users to their first win with automated, personalized onboarding. Track progress, send contextual emails, and trigger in-app messages based on user behavior—all orchestrated seamlessly across your product and communication tools.",
//     keyFeatures: [
//       "Multi-step onboarding sequence with conditional branching",
//       "Behavior-based email triggers and drip campaigns",
//       "Progress tracking and milestone celebrations",
//       "Integration with product analytics and email tools",
//       "Automated task assignment for high-touch accounts",
//     ],
//     steps: [
//       {
//         number: 1,
//         title: "User Signup Detection",
//         description: "Workflow triggers when a new user signs up via webhook or database poll",
//       },
//       {
//         number: 2,
//         title: "Welcome & Setup",
//         description: "Send welcome email and create initial tasks in your product",
//       },
//       {
//         number: 3,
//         title: "Behavior Tracking",
//         description: "Monitor key actions like profile completion, first login, feature usage",
//       },
//       {
//         number: 4,
//         title: "Contextual Engagement",
//         description: "Send relevant tips, tutorials, or offers based on user progress",
//       },
//       {
//         number: 5,
//         title: "Success Milestones",
//         description: "Celebrate achievements and route power users to upsell flows",
//       },
//     ],
//     included: [
//       "Complete Make scenario collection",
//       "Email sequence templates (customizable)",
//       "Analytics integration setup (Mixpanel, Amplitude, Segment)",
//       "CRM and support tool connectors",
//       "A/B testing framework for messaging",
//       "45 days of implementation support",
//     ],
//     forWho: [
//       "SaaS companies with self-serve product onboarding",
//       "Product teams looking to improve activation rates",
//       "Customer success teams managing onboarding at scale",
//       "Growth teams optimizing time-to-value",
//     ],
//     notFor: [
//       "Products requiring extensive manual onboarding",
//       "Teams without product analytics in place",
//       "Very early-stage products still finding PMF",
//     ],
//     technicalDetails: {
//       platform: "Make.com",
//       complexity: "Intermediate to Advanced",
//       setupTime: "3-5 hours",
//       apis: [
//         "Stripe API",
//         "SendGrid/Mailgun",
//         "Segment",
//         "Intercom",
//         "Google Sheets",
//       ],
//       triggers: [
//         "Webhook (user signup)",
//         "Scheduled checks (hourly)",
//         "User activity events",
//       ],
//       assumptions: [
//         "You have a product analytics tool with API access",
//         "Your app can send webhooks for key events",
//         "You use an ESP (Customer.io, Sendgrid, etc.)",
//       ],
//     },
//     faqs: [
//       {
//         question: "Can I customize the email templates?",
//         answer: "Absolutely. We provide base templates with proven copy, but you'll customize everything to match your brand and product.",
//       },
//       {
//         question: "How does behavior tracking work?",
//         answer: "The workflow listens for events from your analytics tool or receives webhooks from your app when users complete key actions.",
//       },
//       {
//         question: "What if I don't have a product analytics tool?",
//         answer: "The workflow can work with simple database queries or app webhooks, but analytics tools like Mixpanel make it much more powerful.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "E-commerce Order Pipeline",
//     description: "Process orders, manage inventory, and sync across platforms",
//     tool: "n8n",
//     category: "E-commerce",
//     price: 179,
//     slug: "3",
//     headline: "Process orders, manage inventory, and sync across platforms automatically",
//     longDescription: "Eliminate manual order processing and inventory headaches. This workflow handles everything from order capture to fulfillment tracking, syncing inventory across multiple sales channels and notifying customers at every step.",
//     keyFeatures: [
//       "Multi-channel order aggregation (Shopify, WooCommerce, custom stores)",
//       "Real-time inventory sync across all platforms",
//       "Automated fulfillment and shipping workflows",
//       "Customer notification system (order, shipping, delivery)",
//       "Payment reconciliation and fraud detection",
//     ],
//     steps: [
//       {
//         number: 1,
//         title: "Order Capture",
//         description: "Collect orders from all sales channels in real-time",
//       },
//       {
//         number: 2,
//         title: "Validation & Fraud Check",
//         description: "Verify payment, check for fraud signals, validate address",
//       },
//       {
//         number: 3,
//         title: "Inventory Update",
//         description: "Deduct stock and sync inventory levels across all platforms",
//       },
//       {
//         number: 4,
//         title: "Fulfillment Routing",
//         description: "Send order to warehouse/3PL with optimal shipping method",
//       },
//       {
//         number: 5,
//         title: "Tracking & Notifications",
//         description: "Update customer with shipping info and delivery estimates",
//       },
//     ],
//     included: [
//       "Complete n8n workflow with sub-workflows",
//       "Inventory sync logic for multi-channel selling",
//       "Customer notification templates (email & SMS)",
//       "Fraud detection rules (configurable)",
//       "Shipping provider integrations (ShipStation, EasyShip, etc.)",
//       "60 days of implementation support",
//     ],
//     forWho: [
//       "E-commerce brands selling on multiple platforms",
//       "Online retailers with complex inventory needs",
//       "Dropshippers coordinating multiple suppliers",
//       "Growing stores drowning in manual order processing",
//     ],
//     notFor: [
//       "Single-channel sellers with simple workflows",
//       "Stores with fewer than 50 orders/month",
//       "Businesses using all-in-one platforms like Shopify Plus",
//     ],
//     technicalDetails: {
//       platform: "n8n (self-hosted recommended for order volume)",
//       complexity: "Advanced",
//       setupTime: "4-6 hours",
//       apis: [
//         "Shopify API",
//         "WooCommerce API",
//         "ShipStation API",
//         "SendGrid",
//         "Google Sheets",
//       ],
//       triggers: [
//         "Webhook (new order)",
//         "Inventory level changes",
//         "Manual trigger",
//       ],
//       assumptions: [
//         "You have API access to your store platforms",
//         "You use a fulfillment service with API/webhook support",
//         "Basic understanding of inventory management",
//       ],
//     },
//     faqs: [
//       {
//         question: "Which e-commerce platforms are supported?",
//         answer: "Shopify, WooCommerce, Magento, and BigCommerce out of the box. Custom stores can be integrated via API.",
//       },
//       {
//         question: "How does inventory sync work with multiple warehouses?",
//         answer: "The workflow can route orders based on inventory location, customer proximity, and shipping cost optimization.",
//       },
//       {
//         question: "Can it handle international orders?",
//         answer: "Yes, including currency conversion, customs documentation, and international shipping carriers.",
//       },
//     ],
//     howItWorks: []
//   },
// ];

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

// export const getProductDetail = (slug: string): ProductDetail | undefined => {
//   return detailedProducts.find((product) => product.slug === slug);
// };
