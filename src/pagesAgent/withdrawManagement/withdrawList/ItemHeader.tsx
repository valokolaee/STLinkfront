import { Flex } from "antd";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";
import StatusTag from "./StatusTag";
import IWithdrawalRequestWithUser from "../../../interfaces/IWithdrawalRequestWithUser";

export default ({ wr, className }: { wr: IWithdrawalRequestWithUser; className?: string }) => {
     const { id, amount, currency, miningWalletAddress, status, userWalletNickname, requestedAt, softDeleted } = wr || {};

     return (

          <Flex justify="space-between">
               {`Amount: ${amount} $ ${currency}`}
               <StatusTag status={wr?.status} />
          </Flex>

     )
}


