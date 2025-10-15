 
export default interface IDeviceEarning   {
    id?: number;
    deviceId: number;
    miningSessionId?: number | null;
    amount: number;
    currency: string;
    earningDate?: Date;
    calculatedAt?: Date;
    isSettled : boolean;
    transactionHash?: string | null;
    exchangeRate?: number | null;
}