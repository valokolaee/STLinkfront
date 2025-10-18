export default interface IRolePermission   {
    id?: number;
    roleId?: number;
    permissionId?: number;
    softDeleted?: boolean;
    createdAt?: Date;
}