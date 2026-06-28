import { PlusCircleOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import { useEffect, useRef, useState } from "react"
import CBottomDrawer from "../../../../components/ui/CBottomDrawer"
import IMiningDevice from "../../../../interfaces/IMiningDevice"
import IMiningWallet from "../../../../interfaces/IMiningWallet"
import { useAppSelector } from "../../../../redux/hooks"
import WebService, { IWebServiceFuncs } from "../../../../webService"
import apis, { panel } from "../../../../webService/ApiUrls/apis"
import IReqRes from "../../../../webService/ApiUrls/apis/IReqRes"
 import DevicesList from "./DevicesList"

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_open, set_open] = useState<boolean>(false)
    const [_devices, set_devices] = useState<IMiningDevice[]>([])

    const _loadWallets = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IMiningWallet>['getAllBy']['res']>(apis.miningDevices.getAllBy({ userId: _savedUser.id! }))
        if (res?.success) {
            set_devices(res?.data!)
        }
        console.log(res);
    }

    useEffect(() => {
        _loadWallets()
    }, [])

    const _hide = () => {
        set_open(false)
    }

    const _show = () => {
        set_open(true)
    }

    const _newCreated = (nd: IMiningDevice) => {
        set_devices([nd, ..._devices])
        _hide()
    }
    return (
        <div className="w-full">
            <DevicesList />
            <WebService ref={refWebService} />
        </div>
    )
}