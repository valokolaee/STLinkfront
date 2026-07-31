import { Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import WebService, { IWebServiceFuncs } from "../../../../webService";
import { miningWallet, userWallet } from "../../../../webService/ApiUrls/apis";
import IResponse from "../../../../webService/ApiUrls/apis/IResponse";
import Actions from "./actions";
import Transactions, { ITransactionsComponentFuncs } from "./transactions";
import formatCurrency from "../../../../utils/formatCurrency";
import IUserWallet from "../../../../interfaces/IUserWallet";
import { cardAndSelected } from "../../../../css/classNames";
import CreateWithdraw from "../../Devices/Device/CreateWithdraw";

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const refTransactions = useRef<ITransactionsComponentFuncs>(null)
    const _reload = () => { refTransactions.current?.reload!() }
    const location = useLocation();
    const receivedData = location.state?.wallet;

    const wallet: IWalletNavigatedData = receivedData || {}

    const [_miningWallet, set_miningWallet] = useState<IUserWallet | IUserWallet | undefined>();
    const { availableBalance, totalEarnings, currency, pendingBalance, withdrawnAmount, id, nickname } = _miningWallet || {}

    const _loadTheWallet = async () => {

        if (!!wallet) {


            var res: IResponse<IUserWallet | IUserWallet> | undefined = {}

            if (wallet?.type === 'miningWallet') {
                res = await refWebService.current?.callApi<IResponse<IUserWallet>>(miningWallet?.getOneByID!(wallet?.id))
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
                        <Flex flex={1} className="border-solidd w-fullc justify-center items-center " >

                            <Flex vertical>

                                <div className={`${cardAndSelected(true)} p-3 mb-2 justify-center  max-w-11/12`}>
                                    Nickname: {nickname}
                                    <div className="balance-label">Available Balance</div>
                                    <div className="balance-amount">{formatCurrency(availableBalance! || 0, '')}    USDT</div>
                                </div>

                                <div className="balance-subtitle">Total Balance:{formatCurrency(totalEarnings || 0, '')}</div>
                            </Flex>

                        </Flex>

                        <CreateWithdraw wallet={receivedData} onSucceed={_reload} />

                    </Flex>
                </div>
            </Flex>

            <Flex flex={10} className="overflow-scroll" vertical>
                <Transactions walletId={wallet?.id} ref={refTransactions} />
            </Flex>

        </Flex>

        <WebService ref={refWebService} />


    </>
}



export interface IWalletNavigatedData {
    id: number;
    type: 'miningWallet' | 'wallet'
}