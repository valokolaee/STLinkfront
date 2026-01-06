import { RightCircleTwoTone } from "@ant-design/icons"
import { Flex } from "antd"
import { card, shadowX } from "../../../css/classNames"
import useIsMobile from "../../../hooks/useIsMobile"
import DevicesList from "../../components/devices/DevicesList"
import Withdraw from "../../withdraw"
import { Link } from "react-router-dom"
import NavTo from "./NavTo"
import Wallet from "../../Wallets/Wallet/transactions"
import Wallets from "../../components/wallets"
import DashNewsUpdates from "./DashNewsUpdates"
import DashWithdraw from "./DashWithdraw"
import DashWallets from "./DashWallets"
import DashDevices from "./DashDevices"

export default () => {


    return (
        <Flex vertical >

            <DashNewsUpdates />
            <DashWithdraw />

            <DashWallets />
            <DashDevices />

        </Flex>
    )
}


// 