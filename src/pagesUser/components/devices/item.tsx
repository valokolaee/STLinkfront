import { Card, Flex } from "antd";
import IMiningDevice from "../../../interfaces/IMiningDevice";

export default ({ createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue }: IMiningDevice) => <Card  title={<Flex justify="space-between">
    {deviceName}
    <div className={status==='active'? "bg-green-500 rounded-full text-white px-2":''}>

    {status}
    </div>
</Flex>} variant="borderless" className="m-2"  >

    <p>IMei: {imei}</p>
    <p>Device Model: {deviceModel}</p>
    <p>Created At: {createdAt?.toString()}</p>

</Card>