import { useParams } from "react-router-dom";
import OneWallet from "../../components/OneWallet";
import { formatCurrency } from "../../components/OneWallet/Wallet";

export default () => {
    const { id } = useParams(); // { id: '123' }

    return <>
        <div>Available balance in wallet</div>
        <div>total(tiny)</div>
        <div>currencies</div>
        <div>Address</div>
        <div>nick name</div>
        <div>relevant device</div>
        <div>add a withdraw</div>
        <div>withdraws  on this wallet</div>
        <div>transactions</div>

        {/* <div className="balance-card">
            <div className="balance-label">Current Balance</div>
            <div className="balance-amount">{formatCurrency(7393894, '')}</div>
            <div className="balance-subtitle">Available funds</div>
        </div> */}



    </>
    // <OneWallet />
}