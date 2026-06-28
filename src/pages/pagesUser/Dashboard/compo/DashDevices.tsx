import { Flex } from "antd"
import useIsMobile from "../../../../hooks/useIsMobile"
import DevicesList from "../../components/devices/DevicesList"
import className from "./Dash_className"
import NavTo from "./NavTo"
import { customerMainRoutes } from "../../../../protectedRouts/config/customerRoutes"
import { customer_devices } from "../../../../protectedRouts/config/customerRoutes/objects"

export default () => {

    const _isMobile = useIsMobile()


    return (


        <Flex flex={_isMobile ? undefined : 2} className={className} vertical>
            Devices
            <DevicesList flashMode />
            <NavTo to={`${customerMainRoutes}${customer_devices.path}`}/>
        </Flex>

    )


}


