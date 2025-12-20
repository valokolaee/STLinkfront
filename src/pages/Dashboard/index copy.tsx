import { RightCircleTwoTone } from "@ant-design/icons"
import { Flex } from "antd"
import { card, shadowX } from "../../css/classNames"
import useIsMobile from "../../hooks/useIsMobile"
import DevicesList from "../components/devices/DevicesList"
import Withdraw from "../withdraw"
import { Link } from "react-router-dom"
import NavTo from "./NavTo"
import Wallet from "../Wallets/Wallet"
import Wallets from "../components/wallets"

export default () => {

    const _isMobile = useIsMobile()
    const className: string = ``

        //     max-w-sm rounded-lg shadow-xl   overflow-hidden
        //     m-2
        // `
        + ` border-solid overflow-scroll p-4 `
        + card+shadowX;

    return (
        <Flex className=" w-full h-full overflow-scroll " vertical={_isMobile}>

            <Flex flex={_isMobile ? undefined : 1} vertical>

                <Flex flex={_isMobile ? undefined : 3} className={className} vertical>
                    Recent Withdraw
                    <Withdraw flashMode />
                    <NavTo to="/withdraw" />
                </Flex>

                <Flex flex={_isMobile ? undefined : 2} className={className} vertical>
                    Devices
                    <DevicesList flashMode />
                    <NavTo to="/devices" />
                </Flex>

            </Flex>

            <Flex flex={_isMobile ? undefined : 1} vertical>

                <Flex flex={_isMobile ? undefined : 2} className={className}>
                    News and Updates
                </Flex>
                <Flex flex={_isMobile ? undefined : 3} className={className} vertical>
                    Wallets
                    <Wallets flashMode />
                    <NavTo to="/Wallets" />

                </Flex>
            </Flex>

        </Flex>
    )
    // const _isMobile = useIsMobile(900);

    // if (_isMobile) {
    //     return <Mobile />
    // } else {

    //     return <Flex>

    //         <Box card>
    //             <Devices />
    //         </Box>

    //         <Box card>
    //             <Wallet />
    //         </Box>



    //     </Flex>
    // }




}


// TODO add manage wallet 
// TODO add device model and type (organizational users only)
// TODO pick device (from a list of devices)
// TODO withdrawal-request.model
