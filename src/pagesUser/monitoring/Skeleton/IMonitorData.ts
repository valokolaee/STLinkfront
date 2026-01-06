import IDeviceAlert from "../../../interfaces/IDeviceAlert";
import IDeviceEarning from "../../../interfaces/IDeviceEarning";
import IDeviceMetric from "../../../interfaces/IDeviceMetric";
import IMiningSession from "../../../interfaces/IMiningSession";
import IMiningWallet from "../../../interfaces/IMiningWallet";


export interface IMonitorData {
  alerts?: IDeviceAlert[];
  metrics?: IDeviceMetric[];
  wallet?: IMiningWallet;
  session?: IMiningSession;
  lastEarnings?: IDeviceEarning[]

}

