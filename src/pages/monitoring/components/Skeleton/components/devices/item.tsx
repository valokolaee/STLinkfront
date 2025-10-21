import { Card, Flex } from "antd";
import IMiningDevice from "../../../../../../interfaces/IMiningDevice";
import StatusTag from "./StatusTag";
import { ISelect } from "../../../../../../interfaces/ISelect";

export default ({ info, onSelect }: ISelect<IMiningDevice>) => {
    const { createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue, } = info || {}

    const _onSelect = () => {
        onSelect!(info)
    }
    return <Card
        onClick={_onSelect}
        className='  bg-gray-200 p-2 m-2'
    >
        <Flex justify="space-between">
            <p>Device Name: {deviceName}</p>
            {status && <StatusTag status={status} />}
        </Flex>
        <span>IMei: {imei}</span>
        <span>Device Model: {deviceModel}</span>

    </Card>
}