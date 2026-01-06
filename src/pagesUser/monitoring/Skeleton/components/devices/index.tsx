import { useEffect, useRef, useState } from 'react';
import CModal from '../../../../../components/ui/CModal';
import { useAppSelector } from '../../../../../redux/hooks';
import WebService, { IWebServiceFuncs } from '../../../../../webService';
import Box from '../Box';
import DeviceTable from './DeviceTable';
import { RiceBowlOutlined } from '@mui/icons-material';
import { RightCircleFilled, RightCircleTwoTone } from '@ant-design/icons';
import { Flex } from 'antd';
import Item from './item';
import IMiningDevice from '../../../../../interfaces/IMiningDevice';
import IReqRes from '../../../../../webService/ApiUrls/apis/IReqRes';
import { miningDevices } from '../../../../../webService/ApiUrls/apis';
import StatusTag from './StatusTag';
import { ISelect } from '../../../../../interfaces/ISelect';
import CWhiteLabel from '../../../../../components/ui/CWhiteLabel';
import Loading from '../Loading';





export default ({ onSelect, selectedItem }: ISelect<IMiningDevice>) => {
    const { deviceName, status, deviceModel, imei } = selectedItem || {}


    const refWebService = useRef<IWebServiceFuncs>()
    const refModalDevice = useRef<any>(null)
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_devices, set_devices] = useState<IMiningDevice[]>([])
    const [_loading, setLoading] = useState(false)



    const _loadDevices = (initial: boolean) => async () => {
        setLoading(true)
        const res = await refWebService?.current?.callApi<IReqRes<IMiningDevice>['getAllBy']['res']>(miningDevices.getAllBy({ userId: _savedUser.id! }))
        if (res?.success) {
            set_devices(res?.data!)
            if (res?.data!.length > 0 && initial) {
                onSelect!(res.data![0])
                // set_device(res.data![0])
            }
        }
        setLoading(false)
    }

    useEffect(() => {
        _loadDevices(true)()
    }, [])


    const _set_device = (d?: IMiningDevice) => {
        onSelect!(d)
        refModalDevice.current.hide()
    }


    return (
        <Box flex={2} card >
            {selectedItem?.id! > 0 ?
                <Flex vertical align='flex-end' className='w-full'>
                    <Flex vertical
                        className=' w-full h-full'>
                        <Flex justify="space-between">
                            <p>Device Name: {deviceName}</p>
                            {status && <StatusTag status={status} />}
                        </Flex>
                        <span>IMei: {imei}</span>
                        <span>Device Model: {deviceModel}</span>
                    </Flex>

                    <CModal ref={refModalDevice} btn={<RightCircleTwoTone style={{ fontSize: 30 }} onClick={_loadDevices(false)} />} mat>
                        {_loading ?
                            <Flex className='justify-center'>

                                <Loading />
                            </Flex>
                            :
                            <DeviceTable devices={_devices} sel={{ onSelect: _set_device, selectedItem }} />
                        }
                    </CModal>

                </Flex>
                :
                <CWhiteLabel txt='No Devices' />}
            <WebService ref={refWebService} donTShowSpin />

        </Box>
    )
};
