import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Flex, Radio, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import IMasterDetail from './IMasterDetal';
import useIsMobile from '../../../hooks/useIsMobile';
import { IDrawerIcon } from './drawerIcon';
import StarsSimulation from '../StarsSimulation';

const Mobile: React.FC<{ md: IMasterDetail, drawer: IDrawerIcon }> = ({ md: { detail, master }, drawer: { isOpen, toggleOpen } }) => {
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  const _isMobile = useIsMobile();


  const onClose = () => {
    toggleOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>


      <Drawer
        // title="Chat List"

        placement={placement}
        closable={true}
        onClose={onClose}
        onClick={onClose}
        open={isOpen}
        key={placement}
        width={_isMobile ? '80%' : '30%'}
       >
   
        
        {master}

      </Drawer>
      <div >
        {detail}
      </div>
    </>
  );
};

export default Mobile;

