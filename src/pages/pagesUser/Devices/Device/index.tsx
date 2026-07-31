import { useLocation } from "react-router-dom";
import SvgWrapper from "../../../../components/ui/SvgWrapper";
import IMiningDevice from "../../../../interfaces/IMiningDevice";
import Transactions, { ITransactionsComponentFuncs } from "../../Wallets/Wallet/transactions";
import DeviceInfo from "./DeviceInfo";
import DevicePot from "./DevicePot";
import { useRef } from "react";
import { InputFocusOptions } from "antd/es/input/Input";
import { Flex } from "antd";
import CreateWithdraw from "./CreateWithdraw";
import WebService from "../../../../webService";


export default () => {
    const refTransactions = useRef<ITransactionsComponentFuncs>(null)

    const location = useLocation();
    const receivedData: IMiningDevice = location?.state?.deviceInfo;
    // console.log('receivedData', receivedData);

    const { createdAt, deviceName, deviceModel, firmwareVersion, id, imei, assignment } = receivedData || {}


    const _reload = () => { refTransactions.current?.reload!() }

    return <div className="px-2">

        <div className="lg:sticky lg:top-4 bg-black px-5">


            <DeviceInfo {...receivedData} />

            <Flex className="  w-full  mt-2 border-solidc" >



                <DevicePot {...receivedData} />
                <CreateWithdraw pot={{ id }} onSucceed={_reload} />

            </Flex>

        </div>

        <Transactions potId={id} ref={refTransactions} />

    </div>



}