import IDevicePotAssignment from "./IDevicePotAssignment";
import IUser from "./IUser";

export default interface IDeviceEarningPot {
   id?: number;
   userId?: number;
  //  deviceId?: number;

   totalEarnings?: string;
   withdrawnAmount?: string;
   availableBalance?: string;
   pendingBalance?: string;
   currency?: string;


   softDeleted?: boolean;
   lastUpdated?: Date;
   recType?: string;

   owner?: IUser;

   potAssignment?: IDevicePotAssignment;

}