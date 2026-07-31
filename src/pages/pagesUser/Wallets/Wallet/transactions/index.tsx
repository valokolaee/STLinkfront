import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import WebService, { IWebServiceFuncs } from "../../../../../webService";
import IResponse from "../../../../../webService/ApiUrls/apis/IResponse";
import IWithdrawalRequest from "../../../../../interfaces/IWithdrawalRequest";
import apis, { withdrawalRequest } from "../../../../../webService/ApiUrls/apis";
import Item, { ITransactionItem } from "./item";
import { list } from "./list";
import ITransaction from "../../../../../interfaces/ITransaction";

export default forwardRef(({ potId, walletId }: ITransactionsComponent, ref) => {
    useImperativeHandle(ref, () => { return { reload }; });


    const refWebService = useRef<IWebServiceFuncs>()
    const [_transactions, set_transactions] = useState<ITransaction[]>([]);

    const reload = () => {
        _loadTransactions()
    }

    const _loadTransactions = async () => {

        const res = await refWebService.current?.callApi<IResponse<ITransaction[]>>(apis?.transactions?.getAllBy({ fromDevicePotId: potId, fromWalletId: walletId, toWalletId: walletId }))

        if (res?.success) { set_transactions(res?.data!) }

    }


    useEffect(() => { _loadTransactions() }, [])


    return <>
        <div className="transaction-history border-solidc">
            <h2>Transaction History</h2>
            {(_transactions?.length === 0 || !Array.isArray(_transactions!)) ? (
                <p className="no-transactions">No transactions yet</p>
            ) : (
                <div className="transactions-list">
                    {_transactions?.map((transaction) => (<Item {...transaction} theIds={{ potId, walletId }} key={transaction.id} />))}
                </div>
            )}
        </div>

        <div className="wallet-footer">
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label">Total Transactions:</span>
                    <span className="stat-value">{_transactions?.length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Currency:</span>
                    <span className="stat-value">{'USDT'}</span>
                </div>
            </div>
        </div>


        <WebService ref={refWebService} />
    </>
}
)

export interface ITransactionsComponent {
    potId?: number;
    walletId?: number;
}
export interface ITransactionsComponentFuncs {
    reload?: () => void;

}