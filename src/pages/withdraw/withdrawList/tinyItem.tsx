import { Flex } from "antd";
import { ICreateWithdrawProps } from "../create";
import StatusTag from "./StatusTag";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";

export default ({ wr }: { wr: IWithdrawalRequest; }) => {
     const { id, amount, currency, miningWalletAddress, status, userWalletNickname, requestedAt, softDeleted } = wr || {};

     return (

          <Flex justify="space-between" className="p-2">
              hhh
               <Flex flex={1.5}>
                    {` ${amount} $ ${currency}`}
               </Flex>

               <Flex flex={1} justify="left">
                    {requestedAt && <span> {new Date(requestedAt!)?.toLocaleDateString()}</span>}
               </Flex>

               <Flex flex={1} justify="flex-end">
                    <StatusTag status={wr?.status} />
               </Flex>
         
          </Flex>

     )
}


