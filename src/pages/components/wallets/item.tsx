import { Card, Flex } from "antd";
import IUserWallet from "../../../interfaces/IUserWallet";
import { useEffect, useRef, useState } from "react";
import { CancelOutlined, EditNoteOutlined } from "@mui/icons-material";
import Create, { ICreateWallet } from "./create";
import { card, cardAndSelected, shadowX } from "../../../css/classNames";
import { Link } from "react-router-dom";
import WebService, { IWebServiceFuncs } from "../../../webService";
import apis, { userWallet } from "../../../webService/ApiUrls/apis";
import { del } from "request";

export default ({ uw, onSucceed }: ICreateWallet) => {
    const refWebService = useRef<IWebServiceFuncs>()
    const { id, walletAddress, currency, nickname, pendingBalance, availableBalance, totalEarnings } = uw || {};
    const [_editMode, _set_editMode] = useState<boolean>(false);

    const _toggleEditModeOn = () => {
        _set_editMode(true);
    };

    const _toggleEditModeOff = () => {
        _set_editMode(false);
    };

    useEffect(() => {
        _set_editMode(false);
    }, [uw]);




    // const _del = () => {
    //     refWebService.current?.callApi(userWallet.delete(id!))
    // }

    // <Link to={`/wallet/${id}`} className="cursor-pointer w-full h-full">
    return (
        <Link to={''} className="cursor-pointer w-full h-full">

            <Card

                className={"m-2 shadow-lg duration-300 hover:shadow-xl hover:scale-[2] " +  card + 'shadowX'}

                title={
                    <Flex justify="space-between" align="center">
                        <div className="text-white font-semibold truncate"
                        >
                            {nickname}
                        </div>
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium  ">
                            {currency}
                        </div>
                    </Flex>
                }
                variant="borderless"
            // onClick={_del}
            >
                <Flex justify="space-between" align="center" className="  border-solidm  border-b border-gray-700">
                    <div className="w-full">
                        <span className="text-gray-400">Address: </span>
                        <br />
                        <strong className="  whitespace-nowrap overflow-hidden text-ellipsis truncate multi-line-truncate ">{walletAddress}</strong>
                        <br />
                    </div>

                    {/* {!_editMode ? (
                        <button
                            onClick={_toggleEditModeOn}
                            className="ml-2 p-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        >
                            <EditNoteOutlined className="text-white" />
                        </button>
                    ) : (
                        <button
                            onClick={_toggleEditModeOff}
                            className="ml-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        >
                            <CancelOutlined className="text-white" />
                        </button>
                    )} */}
                </Flex>

                {/* {_editMode && (
                    <div className="mb-4 p-4 bg-gray-900 border border-gray-700 rounded-lg">
                        <Create uw={uw} onSucceed={onSucceed} />
                    </div>
                )} */}

                <Flex vertical className=" ">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Earnings:</span>
                        <strong className="text-green-400 text-lg">{totalEarnings}</strong>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Available Balance:</span>
                        <strong className="text-white text-lg">{availableBalance}</strong>
                    </div>

                    {/* <div className="flex justify-between items-center">
                        <span className="text-gray-400">Pending Balance:</span>
                        <strong className="text-yellow-400 text-lg">{pendingBalance}</strong>
                    </div> */}
                </Flex>
            </Card>
            <WebService ref={refWebService} />
        </Link>
    );
};