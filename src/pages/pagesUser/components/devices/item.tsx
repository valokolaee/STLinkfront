import { Card, Flex } from "antd";
import IMiningDevice from "../../../../interfaces/IMiningDevice";
import { Link } from "react-router-dom";
import { card } from "../../../../css/classNames";
import { useNavigate } from 'react-router-dom';

export default (device: IMiningDevice) => {
    const { id, createdAt, deviceModel, deviceName, firmwareVersion, imei, status, totalRevenue } = device;

    const navigate = useNavigate();
    const handleNavigate = () => { navigate('/Device', { state: device, }); };

    // <Link to={`/Device/${id}/${imei}`} className={card + "cursor-pointer w-full  "}>
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
    // </Link>
}