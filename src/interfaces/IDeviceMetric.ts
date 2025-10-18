export default interface IDeviceMetric   {
   id?: number;
   deviceId?: number;
   cpuUsage?: number;
   memoryUsage?: number;
   gpuUsage?: number | null;
   processingSpeed?: number;
   fanSpeedRpm?: number;
   temperature?: number;
   powerConsumption?: number;
   hashRate?: number;
   networkLatency?: number | null;
   recordedAt?: Date;
   softDeleted?: boolean;
}