export default interface IMiningDevice   {
    id?: number;
    userId?: number;
    deviceName?: string;
    imei?: string;
    deviceModel?: string;
    serialNumber?: string | null;
    startDate?: Date;
    totalUptimeSeconds?: number;
    totalRevenue?: number;
    status?: 'active' | 'inactive' | 'maintenance' | 'offline' | 'error';
    ipAddress?: string | null;
    firmwareVersion?: string | null;
    location?: string | null;
    createdAt?: Date;
    updatedAt?: Date | null;
    softDeleted?:boolean;
}