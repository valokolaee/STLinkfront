import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Drawer, Flex } from 'antd';
import React, { useState } from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import { IDrawerIcon } from './drawerIcon';
import IMasterDetail from './IMasterDetal';
import Header from '../../layout/Header';

const Mobile: React.FC<{ md: IMasterDetail, drawer?: IDrawerIcon }> = ({ md: { detail, master },  }) => {
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
   const [open, setOpen] = useState(false);

  const drawer = { toggleOpen: setOpen, isOpen: open };


  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <div className=' h-screen w-screen relative    ' >
      <Header drawer={drawer} />


      <Drawer
        // title="Chat List"

        placement={placement}
        closable={true}
        onClose={onClose}
        onClick={onClose}
        open={open}
        key={placement}
      >
        {master}
      </Drawer>
      <Flex vertical  style={{ height: '90%', overflow: 'scroll' }}   >
        {detail}
      </Flex>
    </div>
  );
};

export default Mobile;

