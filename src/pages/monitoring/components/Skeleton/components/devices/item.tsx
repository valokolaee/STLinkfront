import { Card, Flex } from "antd";
import IMiningDevice from "../../../../../../interfaces/IMiningDevice";
import StatusTag from "./StatusTag";
import { ISelect } from "../../../../../../interfaces/ISelect";
import { PinOutlined, PointOfSaleOutlined } from "@mui/icons-material";
import { RightCircleFilled } from "@ant-design/icons";
import { cardAndSelected } from "../../../../../../css/classNames";
 
export default ({ info, onSelect, isSelected }: ISelect<IMiningDevice>) => {
    const { createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue, } = info || {}

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

    </Card>
}