import { ApprovalOutlined, ApprovalRounded, CancelOutlined, CheckCircleSharp, DeleteOutlineTwoTone, EditNoteOutlined, PaidRounded, PaidSharp } from "@mui/icons-material";
import { Card, Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import CConfirm from "../../../components/ui/CConfirm";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";
import WebService, { IWebServiceFuncs } from "../../../webService";
import { withdrawalRequest } from "../../../webService/ApiUrls/apis";
import IResponse from "../../../webService/ApiUrls/apis/IResponse";
import Create, { ICreateWithdrawProps } from "./create";
import StatusTag from "./StatusTag";
import CButton from "../../../components/ui/CButton";

export default ({ onSucceed, wr }: ICreateWithdrawProps) => {
     const { id, amount, currency, miningWalletAddress, status, userWalletNickname, requestedAt, softDeleted } = wr || {};
     const refWebService = useRef<IWebServiceFuncs>()
     const [_editMode, _set_editMode] = useState<boolean>(false);
     const [_isManager, _set__isManager] = useState<boolean>(true); // TODO: implement role check


     const _manageStatus = async (status: IWithdrawalRequest['status']) => {

          const __wr: Partial<IWithdrawalRequest> = { ...wr, status, requestedAt: undefined }

          const res = await refWebService?.current?.callApi<IResponse<any>>(withdrawalRequest.update(__wr))

          if (res?.success) {
               onSucceed!({ ...wr, status }, 'update')
          }

     }



     const _delete = () => {
          _manageStatus('cancelled')
     }

     const _reject = () => {
          _manageStatus('rejected')
     }

     const _approve = () => {
          _manageStatus('approved')
     }

     const _paid = () => {
          _manageStatus('completed')
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

     const y = wr?.status !== 'cancelled' && wr?.status !== 'completed'

     return (
          <Card
               title={
                    <Flex justify="space-between">
                         {`Amount: ${amount} $ ${currency}`}
                         <StatusTag status={wr?.status} />
                    </Flex>
               }
               variant="borderless"
               className="mb-3 bg-gray-400  "  >

               <Flex>

                    <Flex vertical flex={1}>
                         <span>From: {miningWalletAddress}</span>
                         <span>To: {userWalletNickname}</span>
                         <span>Date: {requestedAt?.toLocaleString()}</span>
                    </Flex>



                    {(wr!.status !== 'completed' && wr?.status !== 'cancelled') && <>
                         {_isManager ?
                              <>
                                   {wr?.status === 'approved' ?

                                        <Flex className="text-green-700" onClick={_paid}>
                                             Payment Done
                                             <CheckCircleSharp />
                                        </Flex>
                                        :
                                        <Flex vertical>
                                             <button
                                                  // disabled={wr?.status === 'rejected'}
                                                  onClick={_approve} className={`rounded-b-none  bg-green-500  text-white border-b-0 ${className}`}>approve</button>
                                             <button
                                                  // disabled={wr?.status === 'rejected'}
                                                  onClick={_reject} className={`rounded-t-none  bg-red-500 border-t-0 ${className}`}>reject</button>
                                        </Flex>

                                   }
                              </>
                              :
                              <>
                                   {wr?.status === 'pending' && <>
                                        <Flex vertical>
                                             <CConfirm confirm={_delete} title="Delete this request?">
                                                  <DeleteOutlineTwoTone className="text-red-700" />
                                             </CConfirm>

                                             {!_editMode ? <EditNoteOutlined className="text-green-700" onClick={_toggleEditModeOn} />
                                                  :
                                                  <CancelOutlined className="text-red-900" onClick={_toggleEditModeOff} />}
                                        </Flex>

                                   </>
                                   }
                              </>}

                    </>}

               </Flex>

               {_editMode && <Create wr={wr} onSucceed={onSucceed} />}

               <WebService ref={refWebService} />

          </Card>)
}


const className = 'px-7 py-1 text-white cursor-pointer  hover:opacity-80 rounded-lg';