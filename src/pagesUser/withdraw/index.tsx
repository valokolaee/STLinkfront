import { useEffect, useRef, useState } from "react"
import IWithdrawalRequest from "../../interfaces/IWithdrawalRequest"
import { useAppSelector } from "../../redux/hooks"
import WebService, { IWebServiceFuncs } from "../../webService"
import { withdrawalRequest } from "../../webService/ApiUrls/apis"
import IReqRes from "../../webService/ApiUrls/apis/IReqRes"

import Item from "./withdrawList/item"
import Create from "./create"
import CBottomDrawer from "../../components/ui/CBottomDrawer"
import SvgWrapper from "../../components/ui/SvgWrapper"
import CreateNewWallet from "../../assets/icons/CreateNewWallet"
import AddNewSvg from "../../assets/icons/AddNewSvg"
import { card, shadowX, shadowY } from "../../css/classNames"
import TinyItem from "./withdrawList/tinyItem"

export default ({ flashMode }: { flashMode?: boolean }) => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_withdraw, set_withdraw] = useState<IWithdrawalRequest[]>([])

    const _loadWithdraws = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IWithdrawalRequest>['getAllBy']['res']>(withdrawalRequest.getAllBy({ userId: _savedUser.id! }))
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


    if (flashMode) {
        return <div className="w-full h-full">
            {_withdraw.slice(0,5)?.map((item) => <TinyItem wr={item} key={item.id} />)}
            <WebService ref={refWebService} />
        </div>
    }


    return (
        <div className="w-full ">

            {_withdraw?.map((item) => <Item wr={item} key={item.id} onSucceed={_succeedCallback} />)}



            {!flashMode &&
                <CBottomDrawer
                    btn={
                        <SvgWrapper className={" w-14  fixed bottom-6 right-6  "}>
                            <AddNewSvg />
                        </SvgWrapper>
                    }
                >
                    <Create onSucceed={_succeedCallback} />
                </CBottomDrawer>
            }

            <WebService ref={refWebService} />
        </div>
    )
}