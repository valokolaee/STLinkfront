export default interface ITransaction {
   id?: number;
   amount: number;
   fromWalletId: number;
   toWalletId: number;
   withdrawRequestId: number;
   creatorId: number;
   confirmorId?: number;
   createdAt: Date;
   confirmedAt?: Date;
   desc?: string;
   type: 'deposit' | 'withdrawal' | 'transfer'
}