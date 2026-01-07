import { Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../../../components/OneWallet/Wallet";
import IMiningWallet from "../../../interfaces/IMiningWallet";
import WebService, { IWebServiceFuncs } from "../../../webService";
import { miningWallet } from "../../../webService/ApiUrls/apis";
import IResponse from "../../../webService/ApiUrls/apis/IResponse";
import Transactions from "./transactions";
import { safeInt } from "../../../utils/text.utils";
import OneWallet from "../../../components/OneWallet";

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const { id, imei } = useParams();
    const [_miningWallet, set_miningWallet] = useState<IMiningWallet | undefined>();
    const { availableBalance, totalEarnings, currency, walletAddress, pendingBalance, withdrawnAmount } = _miningWallet || {}

    const _loadTheWallet = async () => {

        if (!!imei) {
            const res = await refWebService.current?.callApi<IResponse<IMiningWallet>>(miningWallet.getOneByObject!({ walletAddress: imei, }))
            if (res?.success) {
                set_miningWallet(res.data)
            } else {

            }
        } else {

        }
    }

    useEffect(() => {
        _loadTheWallet();
    }, [])

    return <>


        <Flex vertical className="w-full h-full border-solid0">
            <Flex flex={1}>

                <div className=" flex flex-col p-2 m-2 rounded-xl bg-gray-900 overflow-hidden justify-center items-center w-full   ">
                    <div className="balance-label">Available Balance</div>
                    <div className="balance-amount">{formatCurrency(availableBalance! || 0, '')}    USDT</div>
                    <div className="balance-subtitle">Total Balance:{formatCurrency(totalEarnings || 0, '')}</div>
                </div>
            </Flex>
            <Flex flex={10} className="overflow-scroll" vertical>
                {/* <OneWallet/> */}
                <Transactions address={imei!}  walletId={3}/>
            </Flex>
        </Flex>

        <WebService ref={refWebService} />


    </>
}