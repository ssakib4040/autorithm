export interface Session {
  id: number;
  token: string;
  userId: string; // MongoDB ObjectId as string
  expiresAt: Date;
  createdAt: Date;
  lastActiveAt: Date;
  ipAddress?: string;
  userAgent?: string;
}
