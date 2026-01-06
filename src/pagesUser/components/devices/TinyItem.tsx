import { Card, Flex } from "antd";
import IMiningDevice from "../../../interfaces/IMiningDevice";
import StatusTag from "../../monitoring/Skeleton/components/devices/StatusTag";

export default ({ createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue }: IMiningDevice) =>
    <Flex justify="space-between" className=" p-2">
        {deviceName}
        {status && <StatusTag status={status} />}
    </Flex>
