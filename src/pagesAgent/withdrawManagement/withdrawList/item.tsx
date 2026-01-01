import { ApprovalOutlined, ApprovalRounded, CancelOutlined, CheckCircleSharp, DeleteOutlineTwoTone, EditNoteOutlined, PaidRounded, PaidSharp, WifiProtectedSetupSharp } from "@mui/icons-material";
import { Card, Flex } from "antd";
import React, { useEffect, useRef, useState } from "react";
import CConfirm from "../../../components/ui/CConfirm";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";
import WebService, { IWebServiceFuncs } from "../../../webService";
import { withdrawalRequest } from "../../../webService/ApiUrls/apis";
import IResponse from "../../../webService/ApiUrls/apis/IResponse";
import StatusTag from "./StatusTag";
import CButton from "../../../components/ui/CButton";
import { card, cardAndSelected } from "../../../css/classNames";
import TinyItem from "./tinyItem";
import ItemHeader from "./ItemHeader";
import { ICreateEdit, ICreateWithdrawProps } from "../../../pagesUser/withdraw/create";
import IWithdrawalRequestWithUser from "../../../interfaces/IWithdrawalRequest copy";

export default ({ onSucceed, wr }: ICreateWithdrawalRequestWithUserProps) => {
     const { id, amount, currency, miningWalletAddress, status, userWalletNickname, requestedAt, softDeleted, user } = wr || {};
     const { email, username } = user || {}

     console.log(wr?.userId);
     console.log(user);
     
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



     const _processing = () => {
          _manageStatus('processing')
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





     const _finalized = wr?.status !== 'cancelled' && wr?.status !== 'completed' && wr?.status !== 'rejected' && wr?.status !== 'failed'



     const className = "mb-3 bg-gray-400  " + cardAndSelected(true)



     return (

          <Card
               title={<ItemHeader wr={wr!} />}
               variant="borderless"
               className={"mb-3 bg-gray-400  " + card}
          >

               <Flex>

                    <Flex vertical flex={1}>
                         <span>Owner: {username}</span>
                         <span>From: {miningWalletAddress}</span>
                         <span>To: {userWalletNickname}</span>
                         <span>Date: {requestedAt?.toLocaleString()}</span>
                    </Flex>



                    {_finalized && <>
                         {_isManager ?
                              <>
                                   {wr?.status === 'approved' ?

                                        <Flex className="text-green-700 cursor-pointer" onClick={_paid}>
                                             Payment Done
                                             <CheckCircleSharp />
                                        </Flex>
                                        :
                                        <Flex vertical>
                                             {wr?.status === 'pending' ?
                                                  <button
                                                       onClick={_processing} className={`bg-green-500   ${className}`}>start processing</button>
                                                  :
                                                  <>
                                                       <button
                                                            onClick={wr?.status === 'rejected' ? undefined : _approve} className={`rounded-b-none  bg-green-500  text-white border-b-0 ${className}`}>approve</button>
                                                       <button
                                                            onClick={wr?.status === 'rejected' ? undefined : _reject} className={`rounded-t-none  bg-red-500 border-t-0 ${className}`}>reject</button>
                                                  </>
                                             }
                                        </Flex>

                                   }
                              </>
                              :
                              <>
                                   {/* {wr?.status === 'pending' && <>
                                        <Flex vertical>
                                             <CConfirm confirm={_delete} title="Delete this request?">
                                                  <DeleteOutlineTwoTone className="text-red-700" />
                                             </CConfirm>

                                             {!_editMode ? <EditNoteOutlined className="text-green-700" onClick={_toggleEditModeOn} />
                                                  :
                                                  <CancelOutlined className="text-red-900" onClick={_toggleEditModeOff} />}
                                        </Flex>

                                   </>
                                   } */}
                              </>}

                    </>}

               </Flex>


               <WebService ref={refWebService} />

          </Card>)
}


// const className = 'px-7 py-1 text-white cursor-pointer  hover:opacity-80 rounded-lg';



export interface ICreateWithdrawalRequestWithUserProps extends ICreateEdit {
     wr?: IWithdrawalRequestWithUser;
}