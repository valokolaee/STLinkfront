import { CancelOutlined, DeleteOutlineTwoTone, EditNoteOutlined, } from "@mui/icons-material";
import { Card, Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import CConfirm from "../../../components/ui/CConfirm";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";
import WebService, { IWebServiceFuncs } from "../../../webService";
import { withdrawalRequest } from "../../../webService/ApiUrls/apis";
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes";
import Create, { ICreateWithdrawProps } from "./create";
import StatusTag from "./StatusTag";
import IResponse from "../../../webService/ApiUrls/apis/IResponse";

export default ({ onSucceed, wr }: ICreateWithdrawProps) => {
     const { id, amount, currency, miningWalletAddress, userWalletAddress,userWalletNickname, requestedAt, softDeleted } = wr || {};
     const refWebService = useRef<IWebServiceFuncs>()
     const [_editMode, _set_editMode] = useState<boolean>(false);


     const _delete = async () => {

          const __wr: Partial<IWithdrawalRequest> = { ...wr, status: 'cancelled', requestedAt: undefined }
 
          const res = await refWebService?.current?.callApi<IResponse<any>>(withdrawalRequest.update(__wr))

          if (res?.success) {
               onSucceed!({ ...wr, status: 'cancelled' }, 'update')
          }

     }

     const _toggleEditModeOn = () => {
          _set_editMode(true);
     }

     const _toggleEditModeOff = () => {
          _set_editMode(false);
     }

     useEffect(() => {
          _set_editMode(false)
     }, [wr])


     return (
          <Card
               title={
                    <Flex justify="space-between">
                         {`Amount: ${amount} $ ${currency}`}
                         <StatusTag status={wr?.status} />
                    </Flex>
               }
               variant="borderless" className="mb-3 bg-gray-400  "  >

               <Flex>
                    
                    <Flex vertical flex={1}>
                         <span>From: {miningWalletAddress}</span>
                         <span>To: {userWalletNickname}</span>
                         <span>Date: {requestedAt?.toLocaleString()}</span>
                     </Flex>


                    {wr?.status === 'pending' && <>
                         <Flex vertical>
                              <CConfirm confirm={_delete} title="Delete this request?">
                                   <DeleteOutlineTwoTone className="text-red-700" />
                              </CConfirm>


                              {!_editMode ? <EditNoteOutlined className="text-green-700" onClick={_toggleEditModeOn} />
                                   :
                                   <CancelOutlined className="text-red-900" onClick={_toggleEditModeOff} />}


                         </Flex>
                    </>}
               </Flex>
               {_editMode && <Create wr={wr} onSucceed={onSucceed} />}





               <WebService ref={refWebService} />

          </Card>)
}