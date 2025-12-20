import { Card, Flex } from "antd";
import IMiningDevice from "../../../interfaces/IMiningDevice";

export default ({ createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue }: IMiningDevice) =>
 <Flex justify="space-between" className=" p-2">
        {deviceName}
        <div className={status === 'active' ? "bg-green-500 rounded-full text-white px-2" : ''}>
            {status}
        </div>
    </Flex>
    