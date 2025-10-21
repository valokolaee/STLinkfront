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
  

    return (
        <Flex style={{ margin: 5 }} vertical >
            <Row1  />
            <Row2 />
            <Row3 />
            <WebService ref={refWebService} donTShowSpin />
        </Flex>
    );
}

export default Skeleton;

