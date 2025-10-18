export default interface IDeviceAlert  {
    id?: number;
    deviceId?: number;
    alertType?: 'high_temperature' | 'low_hash_rate' | 'offline' | 'high_power' | 'fan_failure' | 'maintenance_required' | 'error';
    alertMessage?: string;
    severity?: 'low' | 'medium' | 'high' | 'critical';
    isResolved?: boolean;
    resolvedAt?: Date | null;
    resolvedBy?: number | null;
    softDeleted?: boolean;
    createdAt?: Date;

}