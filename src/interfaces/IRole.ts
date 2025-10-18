export default interface IRole {
    id?: number;
    name?: string;
    description?: string | null;
    level?: number;
    isSystem?: boolean;
    softDeleted?: boolean;
    createdAt?: Date;
}