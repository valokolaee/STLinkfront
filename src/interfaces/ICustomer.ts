export default interface ICustomer {

  id: number;
  userId: number;
  defaultWalletId: number;
  totalIncome: number;
  totalAvailableBalance: number;
  ranking: 'None' | 'Bronze' | 'Silver' | 'Gold' | 'VIP';
  createdAt: Date;
  softDeleted: boolean;
  visibility: boolean;

}