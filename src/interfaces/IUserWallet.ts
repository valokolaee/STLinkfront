 

export default interface IUserWallet {
  id?: number;
  userId?: number;
  totalEarnings?: number;
  withdrawnAmount?: number;
  availableBalance?: number;
  pendingBalance?: number;
  currency?: string;
  walletAddress?: string;
  nickname?: string;
  softDeleted?: boolean;
  lastUpdated?: Date;
}