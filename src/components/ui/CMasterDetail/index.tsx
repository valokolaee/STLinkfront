import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
import './index.css';
import useIsMobile from '../../../hooks/useIsMobile';
import Mobile from './mobile';
import Desktop from './desktop';
import IMasterDetail from './IMasterDetal';



export default ({ detail,master}:IMasterDetail) => {
  const _isMobile = useIsMobile();
  if (_isMobile) {
    return <Mobile master={master} detail={detail} />
  } else {
    return <Desktop master={master} detail={detail} />
  }
}

