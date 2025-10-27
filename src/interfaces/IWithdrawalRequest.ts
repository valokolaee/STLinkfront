// src/models/withdrawal-request.model.ts

export default interface IWithdrawalRequest {
   id?: number;
   userId?: number;
   amount: number;
   currency: string;
   miningWalletAddress?: string;
   userWalletAddress?: string;
   transactionHash?: string | null;
   status?: 'pending' | 'processing' | 'completed' | 'rejected' | 'approved' | 'failed' | 'cancelled';
   networkFee?: number;
   serviceFee?: number;
   requestedAt?: Date;
   processedAt?: Date | null;
   softDeleted?: boolean;
   processedBy?: number | null;
   userWalletNickname?: string

}