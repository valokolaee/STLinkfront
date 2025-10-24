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
     const { id, amount, currency, walletAddress, requestedAt, softDeleted } = wr || {};
     const refWebService = useRef<IWebServiceFuncs>()
     const [_editMode, _set_editMode] = useState<boolean>(false);


     const _delete = async () => {

          const __wr: Partial<IWithdrawalRequest> = { id: wr?.id!, status: 'cancelled' }

          const res = await refWebService?.current?.callApi<IResponse<any>>(withdrawalRequest.update(__wr))

          if (res?.success) {
               onSucceed!({ ...wr, ...__wr }, 'update')
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
               } variant="borderless" className="mb-3 bg-gray-500  "  >

               <Flex>
                    <Flex vertical flex={1}>

                         <span>From: {walletAddress}</span>

                         <span>Date: {requestedAt?.toLocaleString()}</span>
                         {/* <span>deleted: {softDeleted}</span> */}
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