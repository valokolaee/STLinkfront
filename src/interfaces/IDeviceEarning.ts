
export default interface IDeviceEarning {
    id?: number;
    deviceId: number;
   walletId?: number;
    miningSessionId?: number | null;
    amount: number;
    currency: string;
    earningDate?: Date;
    calculatedAt?: Date;
    userId: number;
    isSettled: boolean;
    transactionHash?: string | null;
    exchangeRate?: number | null;
}