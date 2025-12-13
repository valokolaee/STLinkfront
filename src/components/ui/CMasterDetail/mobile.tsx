import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Drawer, Flex } from 'antd';
import React, { useState } from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import { IDrawerIcon } from './drawerIcon';
import IMasterDetail from './IMasterDetal';

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
    <div className=' h-screen w-screen relative flex flex-1 ' >


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
      <Flex vertical style={{height:'90%',overflow:'scroll'}}   >
         
        {detail}
        
      </Flex>
      </div>
   );
};

export default Mobile;

