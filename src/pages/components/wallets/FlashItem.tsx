import { Flex } from "antd";
import { ICreateWallet } from "./create";

export default ({ uw, onSucceed }: ICreateWallet) => {
    const { id, walletAddress, currency, nickname, pendingBalance, availableBalance, totalEarnings } = uw || {};



    return (
        <Flex justify="space-between" align="center" className="border-solidw w-full mb-2 ">
            <Flex flex={2} className="text-white font-semibold truncate">
                {nickname}
            </Flex>
            <Flex flex={3} className="items-center border-solidd text-center">
                 {availableBalance} 
            </Flex>

            <Flex className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium  ">
                {currency}
            </Flex>
        </Flex>
    );
};