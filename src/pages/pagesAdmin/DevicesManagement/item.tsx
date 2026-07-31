import { Card, Flex } from "antd";
import IMiningDevice from "../../../interfaces/IMiningDevice";
import { Link } from "react-router-dom";
import { card, cardAndSelected } from "../../../css/classNames";
import { useNavigate } from 'react-router-dom';
import { admin_device } from "../../../protectedRouts/config/adminRoutes/objects";
import { adminMainRoutes } from "../../../protectedRouts/config/adminRoutes";
import IUser from "../../../interfaces/IUser";

export default (device: IMiningDevice) => {
    const { id, createdAt, deviceModel, currentPot, deviceName, firmwareVersion, imei, status, totalRevenue, assignment, } = device;

    const owner: IUser = currentPot?.owner || {}
    const navigate = useNavigate();
    const handleNavigate = () => { navigate(`${adminMainRoutes}${admin_device.path.replace(':id', '')}`, { state: device, }); };
    console.log('device. .....', device);


    return <div className={cardAndSelected(false)}>


        <Card onClick={handleNavigate} title={<Flex justify="space-between" className="cursor-pointer">
            {deviceName}
            <div className={status === 'active' ? "bg-green-500 rounded-full text-white px-2" : ''}>
                {status}
            </div>
        </Flex>} variant="borderless" className="m-2"  >

            <p>userId: {owner?.username}</p>

            <p>IMei: {imei}</p>
            <p>Device Model: {deviceModel}</p>
            <p>Created At: {createdAt?.toString()}</p>

        </Card>
    </div>
}