import { Card, Flex } from "antd";
import IUserWallet from "../../../interfaces/IUserWallet";

export default ({ walletAddress, currency, nickname, withdrawnAmount, }: IUserWallet) => <Card
    title={<Flex justify="space-between">
        {walletAddress}
        <div className={"bg-indigo-500 rounded-full text-white px-2"}>
            {currency}
        </div>
    </Flex>} variant="borderless" className="m-2"  >

    <span>Nickname: <strong> {nickname}</strong></span>
    <div />
    <span>Withdrawn Amount: <strong> {withdrawnAmount}</strong></span>

</Card>