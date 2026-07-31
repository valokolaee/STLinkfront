import { Flex } from "antd";
import { useLocation } from "react-router-dom";
import IMiningDevice from "../../../../interfaces/IMiningDevice";
 
export default () => {
    const location = useLocation();
    const receivedData: IMiningDevice = location?.state?.deviceInfo;
    console.log('receivedData', receivedData);

    const { createdAt, deviceName, deviceModel, firmwareVersion, id, imei, assignment } = receivedData || {}
// cons
    return (
        <Flex className="  w-full  mt-2  mt-2 flex-col md:flex-row gap-3 ">

            <Flex flex={1.5}>
                Device Name: {deviceName}
            </Flex>

            <Flex flex={3}>
                IMEI: {imei}
            </Flex>

            <Flex flex={1}>
                Model: {deviceModel}
            </Flex>

            <Flex flex={1}>
                Created at: {new Date(createdAt!).toLocaleDateString()}
            </Flex>

        </Flex>


    );
}