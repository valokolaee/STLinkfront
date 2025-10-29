import IDeviceAlert from "./IDeviceAlert";
import IDeviceEarning from "./IDeviceEarning";
import IDeviceMetric from "./IDeviceMetric";
import IMiningWallet from "./IMiningWallet";
import IUserWallet from "./IUserWallet";

export default interface IMonitor {
  deviceId?: number;
  alert?: IDeviceAlert;
  wallet?: IMiningWallet;
  metric?: IDeviceMetric;


 

}