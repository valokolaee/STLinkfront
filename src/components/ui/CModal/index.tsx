import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import IModal from './IModal';
import StarsSimulation from '../StarsSimulation';

export default ({ children, btn,title,open,onClose }: IModal) => {
    const [modal2Open, setModal2Open] = useState(open);
    const _open = () => setModal2Open(true)
    const _close = () => {
        onClose!()
        setModal2Open(false)
    }
    return (
        <>
            <a onClick={_open}>
                {btn}
            </a>
            <Modal
                title={title}
                centered
                destroyOnHidden 
                open={modal2Open}
                onOk={_close}
                onCancel={_close}
                footer={null}
                classNames={{
                    content:'bg-gradient-to-br from-black via-gray-900 to-black '
                }}
                styles={{
                // body: { backgroundColor: 'blue' },
            // content: { backgroundColor: 'black' },
                }}

            >
                          {/* <StarsSimulation /> */}
                
                {children}
            </Modal>
        </>
    );
};
