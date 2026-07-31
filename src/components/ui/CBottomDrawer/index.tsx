import React, { forwardRef, useImperativeHandle, useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';

export default forwardRef(({ children, btn }: { children?: React.ReactNode; btn?: React.ReactNode }, ref) => {
  useImperativeHandle(ref, () => { return { onClose } })


  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Drawer
        placement={'bottom'}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {children}
      </Drawer>
      <div onClick={showDrawer}>
        {btn}
      </div>
    </>
  );
})

export interface IBottomDrawerFuncs{
  onClose:()=>void
}