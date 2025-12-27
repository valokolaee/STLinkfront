import { Card, Flex } from "antd";
import { cardAndSelected } from "../../../../../../css/classNames";
import IMiningDevice from "../../../../../../interfaces/IMiningDevice";
import { ISelect } from "../../../../../../interfaces/ISelect";
import StatusTag from "./StatusTag";

export default ({ info, onSelect, isSelected }: ISelect<IMiningDevice>) => {
    const { createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue, updatedAt } = info || {}

    const _onSelect = () => {
        onSelect!(info)
    }
    return <Card
        onClick={_onSelect}
        className={cardAndSelected(isSelected!)}
    >
        <Flex justify="space-between">

            <span className={` `}>Device Name: {deviceName}</span>
            {status && <StatusTag status={status} />}
        </Flex>
        <span>IMei: {imei}</span>
        <div></div>
        <span>Device Model: {deviceModel}</span>
        <div></div>
        <span>Device Model: {new Date(updatedAt!).toLocaleDateString()}</span>

    </Card>
}