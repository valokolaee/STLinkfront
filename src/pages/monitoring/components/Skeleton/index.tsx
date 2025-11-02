import { Flex } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import WebService, { IWebServiceFuncs } from '../../../../webService';
import Row1, { IR1 } from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import IMiningDevice from '../../../../interfaces/IMiningDevice';
import IMiningSession from '../../../../interfaces/IMiningSession';
import apis from '../../../../webService/ApiUrls/apis';
import IResponse from '../../../../webService/ApiUrls/apis/IResponse';
import { IMonitorData } from './IMonitorData';


var _interV = setInterval(async () => {

}, 5000);


const Skeleton: React.FC = () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_loading, setLoading] = useState(true)
    const [_data, set_data] = useState<IMonitorData | undefined>({})
    const [_device, set_device] = useState<IMiningDevice | undefined>({})



    const _getEarning = async (_session: IMiningSession) => {

        _interV = setInterval(async () => {

            if (!!!_savedUser.token) {

                const res2 = await refWebService.current?.callApi(apis.monitor.getAll())

            } else {
                // await refWebService.current?.callApi<any>(apis.deviceEarnings.create({ amount: Math.random(), currency: 'USDT', deviceId: _device?.id!, walletId: 1, isSettled: true, userId: _savedUser.id!, miningSessionId: 1 }))

                const res2: IResponse<IMonitorData> = await refWebService.current?.callApi<any>(apis.monitor.getAllBy(_device!))

                if (res2?.success) {
                    set_data(res2.data)
                }

                setLoading(false)

            }

        }, 5000);
    }


    useEffect(() => {
        setLoading(true)

        clearInterval(_interV)

        if (_device!.id! > 0) {
            _getEarning({} as IMiningSession)
        }

    }, [_device])




    const _setDevice = (device?: IMiningDevice) => set_device(device)


    return (
        <Flex vertical >
            {_loading &&
                <h1 className='absolute text-yellow-500 m-3 bg-blue-300 bg-opacity-70 rounded-full px-5'>loading...</h1>
            }
            <Row1
                monitor={_data!}
                device={{
                    selectedItem: _device,
                    onSelect: _setDevice
                }}
            />
            <Row2 {..._data!} />
            <Row3 {..._data} />
            <WebService ref={refWebService} donTShowSpin />
        </Flex>
    );
}

export default Skeleton;

