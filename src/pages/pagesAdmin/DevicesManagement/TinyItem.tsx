import { Card, Flex } from "antd";
import IMiningDevice from "../../../interfaces/IMiningDevice";
import StatusTag from "../../pagesUser/monitoring/Skeleton/components/devices/StatusTag";

export default ({ createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue, id }: IMiningDevice) =>
    <Flex justify="space-between" className=" p-2">
        {deviceName}
        <p>id: {id}</p>

        {status && <StatusTag status={status} />}
    </Flex>
