import { Card } from "antd";
import IMiningDevice from "../../../interfaces/IMiningDevice";

export default ({ createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue }: IMiningDevice) => <Card title={deviceName} variant="borderless" className="m-2"  >
 
    <p>IMei: {imei}</p>
    <p>Device Model: {deviceModel}</p>
    <p>Created At: {createdAt?.toString()}</p>

</Card>