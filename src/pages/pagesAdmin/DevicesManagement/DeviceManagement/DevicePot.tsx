import { Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import WithdrawIcon from "../../../../assets/icons/withdrawIcon";
import CBottomDrawer from "../../../../components/ui/CBottomDrawer";
import { IModalActions } from "../../../../components/ui/CModal/IModal";
import SvgWrapper from "../../../../components/ui/SvgWrapper";
import IMiningDevice from "../../../../interfaces/IMiningDevice";
import WebService, { IWebServiceFuncs } from "../../../../webService";
import apis from "../../../../webService/ApiUrls/apis";
import IReqRes from "../../../../webService/ApiUrls/apis/IReqRes";
import DevicePotWithdraw from "./DevicePotWithdraw";
import Decimal from 'decimal.js';

export default () => {
    const location = useLocation();
    const receivedData: IMiningDevice = location.state?.deviceInfo;
    const refWebService = useRef<IWebServiceFuncs>()
    const [_pot, set_pot] = useState<IMiningDevice['currentPot']>({})

    const { createdAt, deviceName, deviceModel, firmwareVersion, id, imei, currentPot } = receivedData || {}

    const _loadDeviceInfo = async () => {

        const res = await refWebService?.current?.callApi<IReqRes<IMiningDevice>['getOneByID']['res']>(apis.miningDevices.getOneByID(1))
        console.log('res pot', res);

        if (res?.success) {
            set_pot(res?.data!?.currentPot)
        }

        // console.log('m yes', res);
    }
    useEffect(() => {
        _loadDeviceInfo()
    }, [])

    return (
        <Flex className="  w-full  mt-2 border-solidc" >

            <Flex className=" w-full flex-col md:flex-row gap-3 ">
                <Flex flex={1}>
                    Available Balance: {_pot?.availableBalance}
                </Flex>
                <Flex flex={1}>
                    Total Balance: {_pot?.totalEarnings}
                </Flex>
            </Flex>


            {/* <CBottomDrawer
                btn={
                    <SvgWrapper className=" w-14 "  >
                        <WithdrawIcon />
                    </SvgWrapper>}
            >
                <DevicePotWithdraw pot={currentPot!} />
            </CBottomDrawer>
 */}

            <WebService ref={refWebService} />
        </Flex>


    );
}