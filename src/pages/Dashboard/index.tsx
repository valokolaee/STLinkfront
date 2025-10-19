import { Flex } from "antd"

import Box from "../monitoring/components/Skeleton/Box"
import useIsMobile from "../../hooks/useIsMobile"
import Mobile from "./mobile"
import Devices from "./devices"
import Wallet from "./wallet"
import Withdraw from "./withdraw"

export default () => {
    const _isMobile = useIsMobile(900);

    if (_isMobile) {
        return <Mobile />
    } else {

        return <Flex>

            <Box card>
                <Devices />
            </Box>

            <Box card>
                <Wallet />
            </Box>

            <Box card>
                <Withdraw />
            </Box>

        </Flex>
    }




}


// TODO add manage wallet 
// TODO add device model and type (organizational users only)
// TODO pick device (from a list of devices)
// TODO withdrawal-request.model
