import IDeviceEarningPot from "./IDeviceEarningPot";
import IMiningDevice from "./IMiningDevice";

export default interface IDevicePotAssignment {

  id?: number;
  potId?: number;
  deviceId?: number;
  description?: string | null;
  recType?: string;
  softDeleted?: boolean;
  assignedAt?: Date;
  unassignedAt?: Date;
  pot?: IDeviceEarningPot
  device?: IMiningDevice

}