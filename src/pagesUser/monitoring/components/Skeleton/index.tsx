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
import Loading from './components/Loading';
import { dateDifference } from '../../../../utils/DateTimeHelperN';

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

                // const res2 = await refWebService.current?.callApi(apis.monitor.getAll())


            } else {

                const res2: IResponse<IMonitorData> = await refWebService.current?.callApi<any>(apis.monitor.getAllBy(_device!))



                if (res2.success) {
                     const _calculatedAt = res2.data?.lastEarnings![0].calculatedAt
                    const _status: IMiningDevice['status'] = (dateDifference(new Date(), _calculatedAt) > 10 || dateDifference(new Date(), _calculatedAt) < 0) ? 'offline' : 'active'

                    set_device({
                        ..._device,
                        status: _status
                    })

                    if (_status === 'active') {
                        set_data(res2.data)
                    } else {
                        set_data({
                            wallet: {
                                totalEarnings: res2.data?.wallet?.totalEarnings,
                                walletAddress: ''
                            }
                        })
                    }


                } else {
                    set_data({
                        wallet: {
                            totalEarnings: 0,
                            walletAddress: ''
                        }
                    })
                }




                // if (_device?.status === 'active') {

                //     const _lastEarnings = res2.data?.lastEarnings
                //     const _calculatedAt = res2.data?.lastEarnings![0].calculatedAt
                //     if (res2?.success) {
                //         set_data(res2.data)



                //         if (_lastEarnings!?.length > 0) {

                //             set_device({
                //                 ..._device,
                //                 status: (dateDifference(new Date(), _calculatedAt) > 10 || dateDifference(new Date(), _calculatedAt) < 0) ? 'offline' : 'active'
                //             })
                //             set_data({
                //                 wallet: {
                //                     totalEarnings: res2.data?.wallet?.totalEarnings,
                //                     walletAddress: ''
                //                 }
                //             })



                //         }
                //     } else {
                //         clearInterval(_interV)
                //     }

                // } else {

                //     set_data({
                //         wallet: {
                //             totalEarnings: res2.data?.wallet?.totalEarnings,
                //             walletAddress: ''
                //         }
                //     })
                //     setLoading(false)
                // }



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

    }, [_device?.id])




    const _setDevice = (device?: IMiningDevice) => set_device(device)


    return (
        <Flex vertical  >
            {_loading && <Loading />}
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

