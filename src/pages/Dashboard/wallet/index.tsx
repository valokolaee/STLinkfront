import { PlusCircleOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import { useEffect, useRef, useState } from "react"
import CModal from "../../../components/ui/CModal"
import IUserWallet from "../../../interfaces/IUserWallet"
import { useAppSelector } from "../../../redux/hooks"
import WebService, { IWebServiceFuncs } from "../../../webService"
import { userWallet } from "../../../webService/ApiUrls/apis"
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes"
import Create from "./create"
import Item from "./item"

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_devices, set_devices] = useState<IUserWallet[]>([])
    const [_open, set_open] = useState<boolean>(false)

    const _loadWallets = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IUserWallet>['getAllBy']['res']>(userWallet.getAllBy({ userId: _savedUser.id! }))
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

    const _newCreated = (nd: IUserWallet) => {
        set_devices([nd, ..._devices])
        _hide()
    }
    return (
        <div className="w-full">
            <Flex className="w-full">

                <CModal onClose={_hide} btn={<PlusCircleOutlined style={{ fontSize: '200%', color: 'white' }} onClick={_show} />}>
                    <Create onSucceed={_newCreated} />
                </CModal>
                <div className="m-3 w-full bg-gray-500 p-2 rounded-lg">
                    {`${_devices?.length} wallets`}
                </div>
            </Flex>
            {_devices?.map((item) => <Item {...item} key={item.id} />)}
            <WebService ref={refWebService} />
        </div>
    )
}