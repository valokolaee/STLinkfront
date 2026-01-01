import { useEffect, useRef, useState } from "react"
import IWithdrawalRequest from "../../interfaces/IWithdrawalRequest"
import { useAppSelector } from "../../redux/hooks"
import WebService, { IWebServiceFuncs } from "../../webService"
import { withdrawalRequest } from "../../webService/ApiUrls/apis"
import IReqRes from "../../webService/ApiUrls/apis/IReqRes"

import Item from "./withdrawList/item"
import TinyItem from "./withdrawList/tinyItem"

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_withdraw, set_withdraw] = useState<IWithdrawalRequest[]>([])

    const _loadWithdraws = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getAll']['res']>(withdrawalRequest.getAll())
        console.log(res);

        if (res?.success) {
            set_withdraw(res?.data!)
        }
    }

    useEffect(() => {
        _loadWithdraws()
    }, [])



    const _add = (nd: IWithdrawalRequest) => { set_withdraw([nd, ..._withdraw]) }

    const _update = (nd: IWithdrawalRequest) => {
        const updated = _withdraw.map(d =>
            d.id === nd.id ? nd : d
        );
        set_withdraw(updated)
    }


    const _delete = (nd: IWithdrawalRequest) => { set_withdraw([nd, ..._withdraw]) }




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
        <div className="h-screen overflow-scroll  ">
            {_withdraw?.map((item) => <Item wr={item} key={item.id} onSucceed={_succeedCallback} />)}
            <WebService ref={refWebService} />
        </div>
    )
}