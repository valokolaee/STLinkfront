import { ITransactionsComponent } from ".";
import ITransaction from "../../../../../interfaces/ITransaction";
import formatCurrency from "../../../../../utils/formatCurrency";

export default (t: ITransactionItem) => {
    const { amount, createdAt, toWalletId, id, fromWalletId, fromDevicePotId, theIds } = t || {}
    const { potId, walletId } = theIds || {}

    const thisWalletId = potId || walletId

    const fromDevicePotName = t.fromDevicePot?.potAssignment!.device?.deviceName
    const fromUserWalletName = t.fromUserWallet?.nickname


  
    const isIncoming = !potId && thisWalletId !== fromWalletId;

    const getTransactionColor = () => isIncoming ? 'text-green-600' : 'text-red-600'

    if (fromDevicePotId! > 0 && fromWalletId! > 0) {
        return <>wrong data format</>
    }

    return <div className="flex  w-full  mt-2  mt-2 flex-col md:flex-row gap-3  border-solid border-0 border-b-2">

        <div className="flex-1 border-solidc">
            from
            {fromDevicePotName && ` pot: ${fromDevicePotName}`}
            {fromUserWalletName && ` wallet: ${fromUserWalletName}`}
        </div>

        <div className="border-solidc flex-1" >
            {new Date(createdAt!).toLocaleDateString()}
        </div>

        <div className="border-solidc flex-1" >
            {new Date(createdAt!).toLocaleTimeString()}
        </div>

        <div className={`  border-solidc w-1/3 ${getTransactionColor()}`}>
            {isIncoming ? '+' : '-'}
            {formatCurrency(amount!, '')}
        </div>
        <div className="flex-1">
            to:{t.toUserWallet?.nickname}
        </div>
    </div>



}
export interface ITransactionItem extends ITransaction {
    theIds?: ITransactionsComponent
}