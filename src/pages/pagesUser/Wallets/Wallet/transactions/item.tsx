import formatCurrency from "../../../../../utils/formatCurrency";
import ITransaction from "../../../../../interfaces/ITransaction";

export default ({ amount, createdAt, creatorId, fromWalletId, toWalletId, withdrawRequestId, confirmedAt, confirmorId, desc, type, id, thisWalletId }: ITransactionItem) =>
    <div key={id} className="transaction-item">
        <div className="transaction-info">
            <div className="transaction-description">
                {desc}
            </div>
            <div className="transaction-date">{new Date(createdAt).toLocaleDateString()}</div>
        </div>
        <div className={`transaction-amount ${getTransactionColor(thisWalletId === toWalletId)}`}>
            {type === 'deposit' ? '+' : '-'}
            {formatCurrency(amount, '')}
        </div>
    </div>



const getTransactionColor = (type: boolean) => {
    return type ? 'text-green-600' : 'text-red-600';
};



export interface ITransactionItem extends ITransaction {
    thisWalletId: number;
}