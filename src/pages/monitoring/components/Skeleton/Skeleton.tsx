import { Flex } from 'antd';
import React, { useRef } from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import WebService, { IWebServiceFuncs } from '../../../../webService';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';



const Skeleton: React.FC = () => {
    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
  

    return (
        <Flex  vertical >
            <Row1  />
            <Row2 />
            <Row3 />
            <WebService ref={refWebService} donTShowSpin />
        </Flex>
    );
}

export default Skeleton;

