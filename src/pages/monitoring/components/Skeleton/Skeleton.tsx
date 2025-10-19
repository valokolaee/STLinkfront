import React, { useEffect, useRef, useState } from 'react';
import { Card, Flex, Layout, Space } from 'antd';
import RowFrame from './RowFrame';
import { tstStyle, tstStyleBlue, tstStyleOrange } from '../../../../styles/tstStyle';
import Row1, { IR1 } from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import WebService, { IWebServiceFuncs } from '../../../../webService';
import apis from '../../../../webService/ApiUrls/apis';
import IReqRes from '../../../../webService/ApiUrls/apis/IReqRes';
import IMiningSession from '../../../../interfaces/IMiningSession';
import { useAppSelector } from '../../../../redux/hooks';
import IMiningWallet from '../../../../interfaces/IMiningWallet';



const Skeleton: React.FC = () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    const [_session, set_session] = useState<IMiningSession | undefined>(undefined)
    const [_data, set_data] = useState<IR1>({currency:'',totalEarning:0})

    useEffect(() => {
        _createEarning()
    }, [_session])



    const _createEarning = async () => {

        setInterval(async () => {

            await refWebService.current?.callApi<IReqRes<IMiningSession>['create']['res']>(apis.deviceEarnings.create({
                amount:Math.random(), currency: 'cbt', deviceId: _session?.deviceId!, isSettled: true, userId: _savedUser.id!,miningSessionId:_session?.id
            }))

            const res = await refWebService.current?.callApi<IReqRes<IMiningWallet>['getOneByID']['res']>(apis.miningWallet.getOneByID(1))

            if (res?.success) {
                set_data({totalEarning:res.data?.availableBalance,currency:res.data?.currency})
            }
        }, 2000);
    }



    useEffect(() => {
        if (_session) {
            _newSession()
        }
    }, [])



    const _newSession = async () => {
        const res = await refWebService.current?.callApi<IReqRes<IMiningSession>['create']['res']>(apis.miningSession.create({deviceId:1,}))
       
        if (res?.success) {
            set_session(res.data)
        }
    }



    return (
        <Flex style={{ margin: 5 }} vertical >
            <Row1  {..._data} />
            <Row2 />
            <Row3 />
            <WebService ref={refWebService} donTShowSpin/>
        </Flex>
    );
}

export default Skeleton;

