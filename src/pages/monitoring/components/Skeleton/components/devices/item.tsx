import { Card, Flex } from "antd";
import IMiningDevice from "../../../../../../interfaces/IMiningDevice";
import StatusTag from "./StatusTag";
import { ISelect } from "../../../../../../interfaces/ISelect";
import { PinOutlined, PointOfSaleOutlined } from "@mui/icons-material";
import { RightCircleFilled } from "@ant-design/icons";

export default ({ info, onSelect, isSelected }: ISelect<IMiningDevice>) => {
    const { createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue, } = info || {}

    const _onSelect = () => {
        onSelect!(info)
    }
    return <Card
        onClick={_onSelect}
        // is={isSelected}
        // aria-disabled
        // className="m-2 w-full max-w-md rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-black text-white shadow-lg hover:shadow-xl hover:border-cyan-500 transition-all duration-300 cursor-pointer"
        className={`m-2 ${isSelected ? "border-solid border-4 border-blue-500" : ""} `}
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