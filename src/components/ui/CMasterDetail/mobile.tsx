import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Flex, Radio, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import IMasterDetail from './IMasterDetal';

const Mobile: React.FC<IMasterDetail> = ({ detail, master }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };
  const hideDrawer = () => {
    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>

      <Space className='fixed bg-gray-500'>
        <Button onClick={showDrawer}>
          {open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Space>
      <Drawer
        title="Chat List"

        placement={placement}
        closable={true}
        onClose={onClose}
        // onClick={onClose}
        open={open}
        key={placement}
        width={'80%'}

      >
 

        {master}

      </Drawer>
      <div>
      {detail}
      </div>
    </>
  );
};

export default Mobile;