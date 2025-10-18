export default interface IUserSession  {
    id?: number;
    userId?: number;
    token?: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    expiresAt?: Date;
    isActive?: boolean;
    softDeleted?: boolean;
    createdAt?: Date;
}