import { RightCircleTwoTone } from "@ant-design/icons"
import { Flex } from "antd"
import { card, shadowX } from "../../../css/classNames"
import useIsMobile from "../../../hooks/useIsMobile"
import DevicesList from "../../components/devices/DevicesList"
import Withdraw from "../../withdraw"
import { Link } from "react-router-dom"
import NavTo from "./NavTo"
import Wallet from "../../Wallets/Wallet"
import Wallets from "../../components/wallets"
import DashWithdraw from "./DashWithdraw"
import DashDevices from "./DashDevices"
import DashNewsUpdates from "./DashNewsUpdates"
import DashWallets from "./DashWallets"

export default () => {

    return (
        <Flex className=" w-full h-full overflow-scroll "  >

            <Flex flex={  1} vertical>
                <DashWithdraw />
                <DashDevices />
            </Flex>

            <Flex flex={  1} vertical>
                <DashNewsUpdates />
                <DashWallets />
            </Flex>

        </Flex>
    )
}