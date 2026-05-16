import { Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formatCurrency } from "../../../../components/OneWallet/Wallet";
import IMiningWallet from "../../../../interfaces/IMiningWallet";
import WebService, { IWebServiceFuncs } from "../../../../webService";
import { miningWallet } from "../../../../webService/ApiUrls/apis";
import IResponse from "../../../../webService/ApiUrls/apis/IResponse";
import { safeInt } from "../../../../utils/text.utils";
import OneWallet from "../../../../components/OneWallet";
import Wallet from "../../Wallets/Wallet";
import IMiningDevice from "../../../../interfaces/IMiningDevice";
import { cardAndSelected } from "../../../../css/classNames";

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()


    const location = useLocation();
    const receivedData = location.state;
    const { createdAt, deviceName, deviceModel, firmwareVersion, id, imei, } = receivedData || {}

    const className = ''
    return (
        <Flex className="absoluteh border-solidn w-full px-2 mt-2">

            <Flex flex={1}>
                Device Name: {deviceName}
            </Flex>
            <Flex flex={1}>
                IMEI: {imei}
            </Flex>
            <Flex flex={1}>
                Model: {deviceModel}
            </Flex>
            {/* <Flex flex={1}>
                Firmware:{firmwareVersion}
            </Flex> */}
            <Flex flex={1}>
                Created at: {new Date(createdAt).toLocaleDateString()}
            </Flex>
        </Flex>
        // <div className="bg-gray-900 rounded p-2 mx-2 mt-2 w-full">
        //     <div className="grid grid-cols-4 gap-x-2 gap-y-1 text-xs">
        //         <span className="text-gray-400 text-right"></span>
        //         <span className="text-white col-span-3">{createdAt}</span>

        //         <span className="text-gray-400 text-right"></span>
        //         <span className="text-white col-span-3">{deviceName}</span>

        //         <span className="text-gray-400 text-right"></span>
        //         <span className="text-white col-span-3">{deviceModel}</span>

        //         <span className="text-gray-400 text-right">:</span>
        //         <span className="text-white col-span-3">{firmwareVersion}</span>

        //         <span className="text-gray-400 text-right">:</span>
        //         <span className="text-white font-mono col-span-3 truncate">{imei}</span>
        //     </div>
        // </div>
    );
}