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
import CreateWithdraw from "./CreateWithdraw";

export default ({ id, }: IMiningDevice) => {

    const refWebService = useRef<IWebServiceFuncs>()
    const [_pot, set_pot] = useState<IMiningDevice['currentPot']>()


    const _loadDeviceInfo = async () => {

        const res = await refWebService?.current?.callApi<IReqRes<IMiningDevice>['getOneByID']['res']>(apis.miningDevices.getOneByID(id!))
        console.log('res pot', res);

        if (res?.success) {
            set_pot(res?.data!?.currentPot)
        }

    }
    useEffect(() => {
        _loadDeviceInfo()
    }, [])

    
    return (
        
            <Flex className=" w-full flex-col md:flex-row gap-3 ">
                <Flex flex={1}>
                    Available Balance: {_pot?.availableBalance}
                </Flex>
                <Flex flex={1}>
                    Total Balance: {_pot?.totalEarnings}
                </Flex>
            <WebService ref={refWebService} />
            </Flex>

    );
}