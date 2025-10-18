export default interface IMiningSession   {
    id?: number;
    deviceId?: number;
    sessionStart?: Date;
    sessionEnd?: Date | null;
    durationSeconds?: number;
    earnings?: number;
    status?: 'running' | 'completed' | 'interrupted' | 'failed';
    avgHashRate?: number | null;
    energyConsumed?: number | null;
    softDeleted?: boolean;
    createdAt?: Date;
}