import { Card, Flex } from "antd";
import IMiningDevice from "../../../interfaces/IMiningDevice";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";

export default ({ amount, currency, walletAddress, requestedAt, }: IWithdrawalRequest) => <Card title={`Amount: ${amount} $ ${currency}`} variant="borderless" className="m-2"  >
  
     <p>From: {walletAddress}</p>
     <p>Date: {requestedAt?.toString()}</p>

</Card>