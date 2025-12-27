import { Flex } from "antd";
import { ICreateWithdrawProps } from "../create";
import StatusTag from "./StatusTag";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";

export default ({ wr, className }: { wr: IWithdrawalRequest; className?: string }) => {
     const { id, amount, currency, miningWalletAddress, status, userWalletNickname, requestedAt, softDeleted } = wr || {};

     return (

          <Flex justify="space-between">
               {`Amount: ${amount} $ ${currency}`}
               <StatusTag status={wr?.status} />
          </Flex>

     )
}


