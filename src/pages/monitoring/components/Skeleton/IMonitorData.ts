import IDeviceAlert from "../../../../interfaces/IDeviceAlert";
import IDeviceMetric from "../../../../interfaces/IDeviceMetric";
import IMiningSession from "../../../../interfaces/IMiningSession";
import IMiningWallet from "../../../../interfaces/IMiningWallet";


export interface IMonitorData {
  alert?: IDeviceAlert;
  metric?: IDeviceMetric;
  wallet?: IMiningWallet;
  session?: IMiningSession;
}

