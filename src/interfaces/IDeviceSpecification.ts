export default interface  IDeviceSpecification  {
    id?: number;
    deviceId?: number;
    processorType?: string | null;
    processorSpeed?: number | null;
    memorySize?: number | null;
    memoryType?: string | null;
    storageSize?: number | null;
    powerConsumption?: number | null;
    fanCount?: number | null;
    hashRate?: number | null;
    algorithm?: string | null;
    softDeleted?: boolean;
    createdAt?: Date;
}