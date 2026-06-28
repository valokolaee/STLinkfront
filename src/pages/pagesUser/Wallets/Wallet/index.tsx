import { Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import IMiningWallet from "../../../../interfaces/IMiningWallet";
import WebService, { IWebServiceFuncs } from "../../../../webService";
import { miningWallet, userWallet } from "../../../../webService/ApiUrls/apis";
import IResponse from "../../../../webService/ApiUrls/apis/IResponse";
import Actions from "./actions";
import Transactions from "./transactions";
import formatCurrency from "../../../../utils/formatCurrency";
import IUserWallet from "../../../../interfaces/IUserWallet";

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const location = useLocation();
    const receivedData = location.state;

    const wallet: IWalletNavigatedData = receivedData?.wallet || {}

    const [_miningWallet, set_miningWallet] = useState<IMiningWallet | IUserWallet | undefined>();
    const { availableBalance, totalEarnings, currency, walletAddress, pendingBalance, withdrawnAmount } = _miningWallet || {}

    const _loadTheWallet = async () => {

        if (!!wallet) {


            var res: IResponse<IMiningWallet | IUserWallet> | undefined = {}

            if (wallet?.type === 'miningWallet') {
                res = await refWebService.current?.callApi<IResponse<IMiningWallet>>(miningWallet?.getOneByID!(wallet?.id))
            } else {
                res = await refWebService.current?.callApi<IResponse<IUserWallet>>(userWallet?.getOneByID!(wallet?.id))
            }

            if (res?.success) {
                set_miningWallet(res?.data)
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

                <div className=" flex flex-col p-2 m-2 rounded-xl bg-gray-900 overflow-hidden  w-full   ">
                    <Flex justify="space-between" className="w-full">
                        <Flex vertical flex={1} className="border-solidd w-fullc justify-center items-center " >

                            <div className="balance-label">Available Balance</div>
                            <div className="balance-amount">{formatCurrency(availableBalance! || 0, '')}    USDT</div>
                            <div className="balance-subtitle">Total Balance:{formatCurrency(totalEarnings || 0, '')}</div>
                        </Flex>
                        <Actions {..._miningWallet!} />
                    </Flex>
                </div>
            </Flex>
            <Flex flex={10} className="overflow-scroll" vertical>
                {/* <OneWallet/> */}
                *hard coded*
                <Transactions walletId={3} />
            </Flex>
        </Flex>

        <WebService ref={refWebService} />


    </>
}



export interface IWalletNavigatedData {
    id: number;
    type: 'miningWallet' | 'wallet'
}