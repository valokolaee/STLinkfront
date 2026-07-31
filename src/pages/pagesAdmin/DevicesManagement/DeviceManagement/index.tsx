import { Flex } from "antd";
import IMiningDevice from "../../../../interfaces/IMiningDevice";
import Wallet from "../../../pagesUser/Wallets/Wallet";
import DeviceInfo from "./DeviceInfo";
import Transactions from "../../../pagesUser/Wallets/Wallet/transactions";
import { cardAndSelected } from "../../../../css/classNames";
import formatCurrency from "../../../../utils/formatCurrency";
import Actions from "../../../pagesUser/Wallets/Wallet/actions";
import DevicePot from "./DevicePot";


export default ({ }: IMiningDevice) =>

    <div className="px-2">

        <div className="lg:sticky lg:top-4 bg-black px-5">

            <DeviceInfo />

            <DevicePot />

        </div>

        <Transactions fromDevicePotId={3} />

    </div>



