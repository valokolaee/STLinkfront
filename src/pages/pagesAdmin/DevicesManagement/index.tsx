import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import AddNewSvg from "../../../assets/icons/AddNewSvg"
import SvgWrapper from "../../../components/ui/SvgWrapper"
import IMiningDevice from "../../../interfaces/IMiningDevice"
import IDeviceEarningPot from "../../../interfaces/IDeviceEarningPot"
import { adminMainRoutes } from "../../../protectedRouts/config/adminRoutes"
import { admin_add_device } from "../../../protectedRouts/config/adminRoutes/objects"
import { useAppSelector } from "../../../redux/hooks"
import WebService, { IWebServiceFuncs } from "../../../webService"
import { panel } from "../../../webService/ApiUrls/apis"
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes"
import DevicesList from "./DevicesList"

export default () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_open, set_open] = useState<boolean>(false)
    const [_devices, set_devices] = useState<IMiningDevice[]>([])

    const _loadWallets = async () => {
        const res = await refWebService?.current?.callApi<IReqRes<IDeviceEarningPot>['getAllBy']['res']>(panel.miningDevices.getAllBy({ userId: _savedUser.id! }))
        if (res?.success) { set_devices(res?.data!) }
        // console.log(res);
    }

    useEffect(() => {
        _loadWallets()
    }, [])
    

    const navigate = useNavigate();

    const handleNavigate = () => { navigate(`${adminMainRoutes}${admin_add_device.path.replace(':id', '')}`, {}); };

    return (
        <div className="w-full">

            <DevicesList />


            <SvgWrapper onClick={handleNavigate} className={" w-14  fixed bottom-6 right-6  "}>
                <AddNewSvg />
            </SvgWrapper>


            <WebService ref={refWebService} />
        </div>
    )
}