import { Card, Flex } from "antd";
import IMiningDevice from "../../../../interfaces/IMiningDevice";
import { Link } from "react-router-dom";
import { card } from "../../../../css/classNames";
import { useNavigate } from 'react-router-dom';
import { customerMainRoutes } from "../../../../protectedRouts/config/customerRoutes";
import { customer_device } from "../../../../protectedRouts/config/customerRoutes/objects";
import { IWalletNavigatedData } from "../../Wallets/Wallet";

export default (deviceInfo: IMiningDevice) => {
    const { id, createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue, userId } = deviceInfo;

    const navigate = useNavigate();
    
    const handleNavigate = () => { navigate(`${customerMainRoutes}${customer_device.path}`, { state: { deviceInfo, } }); };

    return <Card onClick={handleNavigate} title={<Flex justify="space-between" className="cursor-pointer">
        {deviceName}
        <div className={status === 'active' ? "bg-green-500 rounded-full text-white px-2" : ''}>
            {status}
        </div>
    </Flex>} variant="borderless" className="m-2"  >

        <p>IMei: {imei}</p>
        <p>Device Model: {deviceModel}</p>
        <p>Created At: {createdAt?.toString()}</p>

    </Card>
}