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
import SvgWrapper from "../../../components/ui/SvgWrapper"
import CreateNewWallet from "../../../assets/icons/CreateNewWallet"
import { AddAPhoto } from "@mui/icons-material"

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_devices, set_devices] = useState<IUserWallet[]>([])

    const _loadWallets = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IUserWallet>['getAllBy']['res']>(userWallet.getAllBy({ userId: _savedUser.id! }))
        if (res?.success) {
            set_devices([...res?.data!, ...res?.data!, ...res?.data!, ...res?.data!, ...res?.data!,])
        }
        console.log(res);
    }

    useEffect(() => {
        _loadWallets()
    }, [])



    const _newCreated = (nd: IUserWallet) => {
        set_devices([nd, ..._devices])

    }

    const _update = (nd: IUserWallet) => {
        console.log(nd);

        const updated = _devices.map(d =>
            d.id === nd.id ? nd : d
        );
        set_devices(updated)

    }

    const _succeedCallback = (res: any, mode: 'add' | 'delete' | 'update') => {
        switch (mode) {
            case 'add':
                _newCreated(res)
                break;
            case 'update':
                _update(res)
                break;
            case 'delete':
                // _delete(res)
                break;
            default:
                break;
        }
    }
    return (

        <div className="w-full relative   ">
{/* 
            <Flex className="w-full">

                <div className="m-3 w-full bg-gray-500 p-2 rounded-lg">
                    {`${_devices?.length} wallets`}
                </div>
            </Flex> */}
           
            {/* <Create onSucceed={_newCreated} />  */}
            {/* <div className="w-full h-full"> */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2  items-center justify-items-center'>
                {_devices?.map((item) => <Item uw={item} key={item.id} onSucceed={_succeedCallback} />)}
            </div>
            {/* <SvgWrapper className="absolute cursor-pointer  ">
                <CreateNewWallet />
            </SvgWrapper> */}
            <WebService ref={refWebService} />
            
        </div>
    )
}