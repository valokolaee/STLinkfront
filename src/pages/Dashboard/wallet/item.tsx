import { Card, Flex } from "antd";
import IMiningDevice from "../../../interfaces/IMiningDevice";
import IMiningWallet from "../../../interfaces/IMiningWallet";
//  TODO add icon to currency

export default ({ walletAddress, currency ,availableBalance, pendingBalance,totalEarnings,withdrawnAmount}: IMiningWallet) => <Card title={<Flex justify="space-between">
    {walletAddress}
    <div className={ "bg-indigo-500 rounded-full text-white px-2"}>
    {currency}
    </div>
</Flex>} variant="borderless" className="m-2"  >

    <p>Available Balance: {availableBalance}</p>
    <p>Pending Balance: {pendingBalance}</p>
    <p>Total Earnings: {totalEarnings}</p>
    <p>Withdrawn Amount: {withdrawnAmount}</p>
     
</Card>