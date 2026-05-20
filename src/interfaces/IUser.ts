import { UserRole } from "../protectedRouts/types/auth";

export default interface IUser {
    id?: number;
    username?: string;
    pass?: string;
    email?: string;
    passwordHash?: string;
    roleId?: number;
    role?:  UserRole;
    clientType?: 'individual' | 'financial_entities' | 'business';
    referralCode?: string | null;
    referrer?: number | null;
    rankId?: number | null;
    logoUrl?: string | null;
    profileImageUrl?: string | null;
    csvUrl?: string | null;
    createdAt?: Date;
    token?: string;
    
}


const u =
{
    "data": {
        "id": 1,
        "username": "admin",
        "email": "abc@d.com",
        "phone": null,
        "firstName": null,
        "lastName": null,
        "profileImageUrl": null,
        "logoUrl": null,
        "isActive": 1,
        "emailVerified": 0,
        "phoneVerified": 0,
        "lastLogin": null,
        "createdAt": "2026-02-20T12:24:16.000Z",
        "softDeleted": 0,
        "updatedAt": null,
        "agent": {
            "id": 1,
            "userId": 1,
            "roleId": 2,
            "createdAt": "2026-02-20T12:24:16.000Z",
            "softDeleted": false,
            "user_id": 1,
            "role_id": 2,
            "role": {
                "id": 2,
                "name": "admin",
                "description": null,
                "level": 0,
                "isSystem": 0,
                "softDeleted": 0,
                "createdAt": "2026-02-20T12:24:15.000Z"
            }
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzcyMDExNjcxLCJleHAiOjE3NzIwOTgwNzF9.pMlG8C3A5eiZ_2UXNiaT1trUb01K86gAALVnL2jRgwU"
    }
}