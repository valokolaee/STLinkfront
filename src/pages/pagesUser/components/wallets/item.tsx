import { Card, Flex } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { card } from "../../../../css/classNames";
import { customerMainRoutes } from "../../../../protectedRouts/config/customerRoutes";
import { customer_wallet } from "../../../../protectedRouts/config/customerRoutes/objects";
import { ICreateWallet } from "./create";
import { IWalletNavigatedData } from "../../Wallets/Wallet";

export default ({ uw, onSucceed }: ICreateWallet) => {

    const { id, walletAddress, currency, nickname, pendingBalance, availableBalance, totalEarnings } = uw || {};
    const [_editMode, _set_editMode] = useState<boolean>(false);


    useEffect(() => { _set_editMode(false) }, [uw]);


    const navigate = useNavigate();
    const handleNavigate = () => { navigate(`${customerMainRoutes}${customer_wallet.path}`, { state: { wallet: { id, type: 'wallet' } as IWalletNavigatedData, } }); };



    return (
        <Card
            onClick={handleNavigate}
            className={"m-2 shadow-lg duration-300 hover:shadow-xl hover:scale-[2] " + card + 'shadowX'}

            title={
                <Flex justify="space-between" align="center">
                    <div className=" text-white font-semibold truncate ">
                        {nickname}
                    </div>
                    <div className=" bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium  ">
                        {currency === 'BTC' ? 'USDT' : currency}
                    </div>
                </Flex>
            }
            variant="borderless"
        >

            <Flex justify="space-between" align="center" className="  border-solidm  border-b border-gray-700">
                <div className="w-full">
                    <span className="text-gray-400">Address: </span>
                    <br />
                    <strong className="  whitespace-nowrap overflow-hidden text-ellipsis truncate multi-line-truncate ">{walletAddress}</strong>
                    <br />
                </div>
            </Flex>

            <Flex vertical className=" ">

                <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Earnings:</span>
                    <strong className="text-green-400 text-lg">{totalEarnings}</strong>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-400">Available Balance:</span>
                    <strong className="text-white text-lg">{availableBalance}</strong>
                </div>

            </Flex>
        </Card>


    );
};