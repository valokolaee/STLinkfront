import { PlusCircleOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import { useEffect, useRef, useState } from "react"
import CModal from "../../../components/ui/CModal"
import IMiningDevice from "../../../interfaces/IMiningDevice"
import { useAppSelector } from "../../../redux/hooks"
import WebService, { IWebServiceFuncs } from "../../../webService"
import { miningDevices } from "../../../webService/ApiUrls/apis"
import Create from "./create"
import Item from "./item"
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes"
import IMiningWallet from "../../../interfaces/IMiningWallet"
import TinyItem from "./TinyItem"
import { card } from "../../../css/classNames"

export default ({ flashMode }: { flashMode?: boolean }) => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_open, set_open] = useState<boolean>(false)
    const [_devices, set_devices] = useState<IMiningDevice[]>([])

    const _loadWallets = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IMiningWallet>['getAllBy']['res']>(miningDevices.getAllBy({ userId: _savedUser.id! }))
        if (res?.success) {

            set_devices(res?.data!||[])
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
        <div className={card}>
            {flashMode ?
                _devices.slice(0, 5)?.map((item) => <TinyItem {...item} key={item.id} />)
                : _devices?.map((item) => <Item {...item} key={item.id} />)}
            <WebService ref={refWebService} />
        </div>
    )
}