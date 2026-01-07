import { useEffect, useRef, useState } from "react";
import IMiningWallet from "../../../../interfaces/IMiningWallet";
import WebService, { IWebServiceFuncs } from "../../../../webService";
import IResponse from "../../../../webService/ApiUrls/apis/IResponse";
import IWithdrawalRequest from "../../../../interfaces/IWithdrawalRequest";
import { withdrawalRequest } from "../../../../webService/ApiUrls/apis";
import Item from "./item";
import { list } from "./list";
import ITransaction from "../../../../interfaces/ITransaction";

export default ({ address, walletId }: { address?: string; walletId: number }) => {
    const refWebService = useRef<IWebServiceFuncs>()
    const [_transactions, set_transactions] = useState<ITransaction[]>(list);


    const _loadWithdraws = async () => {
        const res = await refWebService.current?.callApi<IResponse<ITransaction[]>>(withdrawalRequest.getAllBy({ miningWalletAddress: address }))

        if (res?.success) {
            set_transactions(res.data!)
        }


    }
    // useEffect(() => {
    //     _loadWithdraws()
    // }, [])


    return <>
        <div className="transaction-history">
            <h2>Transaction History</h2>
            {_transactions.length === 0 ? (
                <p className="no-transactions">No transactions yet</p>
            ) : (
                <div className="transactions-list">
                    {_transactions.map((transaction) => (
                        <Item {...transaction} thisWalletId={walletId} />

                    ))}
                </div>
            )}
        </div>

        <div className="wallet-footer">
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label">Total Transactions:</span>
                    <span className="stat-value">{_transactions.length}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Currency:</span>
                    <span className="stat-value">{'USDT'}</span>
                </div>
            </div>
        </div>


        {/* {
            _withdrawalRequest!?.length > 0 ?
                <> {_withdrawalRequest?.map((item) => <Item {...item} thisWalletId={walletId} key={item.id} />)}</>
                :
                <strong className="border-solidb w-full text-center pt-10 ">
                    No Transactions Submitted under this Wallet
                </strong>
        } */}
        <WebService ref={refWebService} />
    </>
}