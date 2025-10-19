export default interface IMiningWallet   {
   id?: number;
   userId?: number;
   totalEarnings?: number;
   withdrawnAmount?: number;
   availableBalance?: number;
   pendingBalance?: number;
   currency?: string;
   walletAddress: string | null;
   softDeleted?: boolean;
   lastUpdated?: Date;
}