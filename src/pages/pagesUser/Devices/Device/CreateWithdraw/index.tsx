import { Flex } from "antd";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import WithdrawIcon from "../../../../../assets/icons/withdrawIcon";
import CBottomDrawer, { IBottomDrawerFuncs } from "../../../../../components/ui/CBottomDrawer";
import { IModalActions } from "../../../../../components/ui/CModal/IModal";
import SvgWrapper from "../../../../../components/ui/SvgWrapper";
import IMiningDevice from "../../../../../interfaces/IMiningDevice";
import WebService, { IWebServiceFuncs } from "../../../../../webService";
import apis from "../../../../../webService/ApiUrls/apis";
import IReqRes from "../../../../../webService/ApiUrls/apis/IReqRes";
import DevicePotWithdraw, { ICreateWithdraw } from "./Form";

export default (c: ICreateWithdraw) => {
    const refBottomDrawer = useRef<IBottomDrawerFuncs>(null)
    const _onClose = () => {
        refBottomDrawer.current?.onClose()
        c.onSucceed!("",'add')
    }
    return <CBottomDrawer
        ref={refBottomDrawer}
        btn={
            <SvgWrapper className=" w-14 "  >
                <WithdrawIcon />
            </SvgWrapper>}
    >
        <DevicePotWithdraw {...c} onSucceed={_onClose}/>

    </CBottomDrawer>


}