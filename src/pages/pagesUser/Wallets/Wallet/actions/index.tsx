import { Flex } from "antd";
import CButton from "../../../../../components/ui/CButton";
import IMiningWallet from "../../../../../interfaces/IMiningWallet";
import Transfer from "./transfer";
import Withdraw from "./Withdraw";

export default ({ }: IMiningWallet) =>
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