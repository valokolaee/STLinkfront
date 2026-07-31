import { Flex } from "antd";
import CButton from "../../../../../components/ui/CButton";
import IDeviceEarningPot from "../../../../../interfaces/IDeviceEarningPot"
import Transfer from "./transfer";
import Withdraw from "./Withdraw";
import IUserWallet from "../../../../../interfaces/IUserWallet";

export default ({ }: IDeviceEarningPot | IUserWallet) =>
    <Flex vertical  >


        <Transfer />

        <Flex>
            <CButton title={'Deposit'} className="w-full" />
            <Withdraw />

        </Flex>

        <Flex>
            <CButton title={'Swap'} className="w-full" />
            <CButton title={'Sell'} className="w-full" />
            <CButton title={'Buy'} className="w-full" />
        </Flex>
    </Flex>