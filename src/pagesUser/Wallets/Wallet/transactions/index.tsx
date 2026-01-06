import { useEffect, useRef, useState } from "react";
import IMiningWallet from "../../../../interfaces/IMiningWallet";
import WebService, { IWebServiceFuncs } from "../../../../webService";
import IResponse from "../../../../webService/ApiUrls/apis/IResponse";
import IWithdrawalRequest from "../../../../interfaces/IWithdrawalRequest";
import { withdrawalRequest } from "../../../../webService/ApiUrls/apis";
import Item from "./item";

export default ({ address }: { address: string }) => {
    const refWebService = useRef<IWebServiceFuncs>()
    const [_withdrawalRequest, set_withdrawalRequest] = useState<IWithdrawalRequest[] | undefined>();


    const _loadWithdraws = async () => {
        const res = await refWebService.current?.callApi<IResponse<IWithdrawalRequest[]>>(withdrawalRequest.getAllBy({ miningWalletAddress: address }))

        if (res?.success) {
            set_withdrawalRequest(res.data!)
        }


    }
    useEffect(() => {
        _loadWithdraws()
    }, [])


    return <>
        {_withdrawalRequest!?.length > 0 ? <> {_withdrawalRequest?.map((item) => <Item {...item} key={item.id} />)}</> : <strong className="border-solidb w-full text-center pt-10 ">No Withdraw Request Submitted under this Wallet</strong>}
        <WebService ref={refWebService} />
    </>
}