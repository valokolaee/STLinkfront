import { useEffect, useRef, useState } from "react"
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest"
import { useAppSelector } from "../../../redux/hooks"
import WebService, { IWebServiceFuncs } from "../../../webService"
import { withdrawalRequest } from "../../../webService/ApiUrls/apis"
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes"
import Create from "./create"
import Item from "./item"

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_devices, set_devices] = useState<IWithdrawalRequest[]>([])

    const _loadWithdraws = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getAllBy']['res']>(withdrawalRequest.getAllBy({ userId: _savedUser.id! }))
        if (res?.success) {
            set_devices(res?.data!)
        }
    }

    useEffect(() => {
        _loadWithdraws()
    }, [])



    const _add = (nd: IWithdrawalRequest) => { set_devices([nd, ..._devices]) }
    const _update = (nd: IWithdrawalRequest) => { 
        const updated = _devices.map(d =>
            d.id === nd.id ? nd : d
        );
        set_devices(updated)

    //     const _filtered = _devices.findIndex(d => d.id === nd.id)
    // console.log(_filtered);
    
    }
    const _delete = (nd: IWithdrawalRequest) => { set_devices([nd, ..._devices]) }




    const _succeedCallback = (res: any, mode: 'add' | 'delete' | 'update') => {
        switch (mode) {
            case 'add':
                _add(res)
                break;
            case 'update':
                _update(res)
                break;
            case 'delete':
                _delete(res)
                break;
            default:
                break;
        }
    }
    return (
        <div className="w-full ">
            {/* <Flex className="w-full" vertical>
                <div className="m-3 bg-gray-500 p-2 rounded-lg">
                    {`${_devices?.length} withdraws`}
                </div>
            </Flex> */}
            <Create onSucceed={_succeedCallback} />
            {_devices?.map((item) => <Item wr={item} key={item.id} onSucceed={_succeedCallback} />)}
            <WebService ref={refWebService} />
        </div>
    )
}