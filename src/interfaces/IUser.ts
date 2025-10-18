
export default interface IUser {
    id?: number;
    username?: string;
    pass?: string;
    email?: string;
    passwordHash?: string;
    roleId?: number;
    clientType?: 'individual' | 'financial_entities' | 'business';
    referralCode?: string | null;
    referrer?: number | null;
    rankId?: number | null;
    logoUrl?: string | null;
    profileImage?: string | null;
    csvUrl?: string | null;
    createdAt?: Date;
    token?: string;
}