import { useEffect, useRef, useState } from "react"
import { card } from "../../../css/classNames"
import IMiningDevice from "../../../interfaces/IMiningDevice"
import { useAppSelector } from "../../../redux/hooks"
import WebService, { IWebServiceFuncs } from "../../../webService"
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes"
import Item from "./item"
import TinyItem from "./TinyItem"
import { panel } from "../../../webService/ApiUrls/apis"
import IDeviceEarningPot from "../../../interfaces/IDeviceEarningPot"

export default ({ flashMode }: { flashMode?: boolean }) => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_open, set_open] = useState<boolean>(false)
    const [_devices, set_devices] = useState<IMiningDevice[]>([])

    const _loadWallets = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IDeviceEarningPot>['getAllBy']['res']>(panel.miningDevices.getAll())
        if (res?.success) {

            set_devices(res?.data! || [])
        }
        // console.log(res);
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
        <div className={`${card} `}>
            
            {_devices?.map((item) => <Item {...item} key={item.id} />)}
            
            
            <WebService ref={refWebService} />
        </div>
    )
}