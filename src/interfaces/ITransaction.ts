import IDeviceEarningPot from "./IDeviceEarningPot";
import IUserWallet from "./IUserWallet";

export default interface ITransaction {
   id?: number;

   fromWalletId?: number;
   fromWalletType?: string; //tells what table should we join

   fromDevicePotId?: number;
   fromDevicePotType?: string;

   toWalletId?: number;
   toWalletType?: string;

   withdrawId?: number;

   amount?: number;
   currency?: string;
   recType?: string;

   approverAgentId?: number | null;

   createdAt?: Date;
   softDeleted?: boolean;

   fromDevicePot?: IDeviceEarningPot;
   fromUserWallet?: IUserWallet;
   toUserWallet?: IUserWallet;


}