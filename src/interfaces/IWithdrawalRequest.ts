// src/models/withdrawal-request.model.ts

export default interface IWithdrawalRequest {
   id?: number;
   userId?: number;
   amount: number;
   currency: string;
   walletAddress: string;
   transactionHash?: string | null;
   status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
   networkFee?: number;
   serviceFee?: number;
   requestedAt?: Date;
   processedAt?: Date | null;
   softDeleted?: boolean;
   processedBy?: number | null;
}