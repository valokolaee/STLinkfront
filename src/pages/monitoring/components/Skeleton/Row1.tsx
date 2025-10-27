import { Flex } from 'antd';
import { useEffect, useRef, useState } from 'react';
import svgList from '../../../../assets/icons/svgList';
import IMiningDevice from '../../../../interfaces/IMiningDevice';
import IMiningSession from '../../../../interfaces/IMiningSession';
import IMiningWallet from '../../../../interfaces/IMiningWallet';
import { useAppSelector } from '../../../../redux/hooks';
import WebService, { IWebServiceFuncs } from '../../../../webService';
import apis from '../../../../webService/ApiUrls/apis';
import IReqRes from '../../../../webService/ApiUrls/apis/IReqRes';
import Box from './Box';
import ContentBox from './ContentBox';
import RowFrame from './RowFrame';
import Devices from './components/devices';
import IDeviceEarning from '../../../../interfaces/IDeviceEarning';
import CWhiteLabel from '../../../../components/ui/CWhiteLabel';




var _interV = setInterval(async () => {

}, 3000);

export default () => {

    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)

    const [_data, set_data] = useState<IR1>({ currency: '', totalEarning: 0 })
    const [_device, set_device] = useState<IMiningDevice>({})






    const _createEarning = async (_session: IMiningSession) => {

        _interV = setInterval(async () => {

            const x = await refWebService.current?.callApi<IReqRes<IDeviceEarning>['create']['res']>(apis.deviceEarnings.create({
                amount: Math.random()*100, currency: 'cbt', deviceId: _session?.deviceId!, walletId: _device.walletId, isSettled: true, userId: _savedUser.id!, miningSessionId: _session?.id
            }))


            const res = await refWebService.current?.callApi<IReqRes<IMiningWallet>['getOneByID']['res']>(apis.miningWallet.getOneByID(_device.walletId!))
            if (res?.success) {
                // console.log('res', x, res.data);

                set_data({ totalEarning: res.data?.availableBalance, currency: res.data?.currency })
            }

        }, 2000);
    }



    useEffect(() => {
        if (_device.id! > 0) {

            // _newSession()
        }

    }, [_device])



    const _newSession = async () => {
        clearInterval(_interV)
        const res = await refWebService.current?.callApi<IReqRes<IMiningSession>['create']['res']>(apis.miningSession.create({ deviceId: _device.id, }))
        console.log(res);

        if (res?.success) {
            // set_session(res.data)
            _createEarning(res.data!)
        }
    }


    const _set_device = (d?: IMiningDevice) => {
        set_data({ currency: '', totalEarning: 0 })
        set_device(d!)
    }


    return (
        <>
            <RowFrame
          
                
                
                children1={[
                  
             <Devices selectedItem={_device} onSelect={_set_device} /> 
                  
                    ,
                    <Box flex={2} card>
                        <ContentBox
                            fontSize={6}
                            color={{ name: 'green', num: 500 }}
                            title='Local Uptime' value={`${(parseFloat((_data.totalEarning || 0.00).toString())).toFixed(2)} ${_data.currency || ''}`} />
                    </Box>,
                    <Box flex={1} vertical card>
                        <Box flex={1}>
                            <span className='block w-full text-center'>
                                Block Height
                            </span>
                        </Box>
                        <Box flex={2}>
                            <ContentBox
                                color={{ name: 'blue', num: 500 }}
                                title='Max Observed' value={87365} />
                        </Box>
                        <Box flex={2}>
                            <ContentBox
                                color={{ name: 'blue', num: 500 }}
                                title='Max Unvalidated' value={87237} />
                        </Box>

                    </Box>,
                ]}
                children2={[
                    <Box flex={1} card>
                        <ContentBox
                            fontSize={4}
                            color={{ name: 'blue', num: 500 }}
                            title='Last Best Tip (Slot Time)' value={'2:33 min'}
                            svg={svgList.chart1}
                        />
                    </Box>,

                    <Box flex={1} vertical>
                        <Box card >
                            <Box >
                                <Flex vertical style={{ width: '100%', justifyContent: 'space-between' }}>
                                    <span className='block w-full text-center'>
                                        Consensus
                                    </span>

                                    <Flex justify='space-between'>
                                        <span>
                                            Delegator
                                        </span>
                                        <span className='text-xl'>
                                            3
                                        </span>
                                    </Flex>

                                    <Flex justify='space-between'>
                                        <span>
                                            Stacking KeyPairs
                                        </span>
                                        <span className='text-xl'>
                                            3
                                        </span>
                                    </Flex>

                                </Flex>
                            </Box>
                        </Box>
                        <Box card>
                            <Box  >
                                <Flex vertical style={{ width: '100%', justifyContent: 'space-between' }}>
                                    <span className='block w-full text-center'>
                                        Block Producer
                                    </span>

                                    <Flex justify='space-between'>
                                        <span>
                                            Blocks Produced
                                        </span>
                                        <span className='text-xl'>
                                            3
                                        </span>
                                    </Flex>

                                    <Flex justify='space-between'>
                                        <span>
                                            Slots Won
                                        </span>
                                        <span className='text-xl'>
                                            3
                                        </span>
                                    </Flex>

                                </Flex>
                            </Box>
                        </Box>


                    </Box>,
                ]}
            />
            <WebService ref={refWebService} donTShowSpin />
        </>
    )
};
export interface IR1 {
    totalEarning?: number;
    currency?: string
}