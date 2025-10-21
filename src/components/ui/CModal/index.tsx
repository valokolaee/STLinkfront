import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Button, Modal as AntModal } from 'antd';
import IModal from './IModal';
import { RightCircleTwoTone } from '@ant-design/icons';
import { Modal as MatModal } from '@mui/material';

export default forwardRef(({ btn, className, children, open, mat }: IModal, ref) => {
    useImperativeHandle(ref, () => { return { show, hide }; });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const show = () => {
        console.log('show devices modal');

        setIsModalOpen(true);
    };

    const hide = () => {
        setIsModalOpen(false);
    };
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };

    return (
        <>

            <a onClick={show} className={className}>
                {btn}
            </a>

            {mat ? <MatModal
                open={isModalOpen}
                onClose={hide}
                // onOk={handleOk}
                // onCancel={handleCancel}
                // footer={null}       
                className='self-center m-4 '>
                {children}
            </MatModal> : <AntModal
                open={isModalOpen}
                // onClose={hide}
                onOk={hide}
                onCancel={hide}
                maskClosable
                footer={null}
                className='self-center m-4 '>

                {children}

            </AntModal>}
            {/* <Modal

                // title="Basic Modal"
                // closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onClose={hide}
                // onOk={handleOk}
                // onCancel={handleCancel}
                // footer={null}       
                className='self-center m-4 '
            >
                {children}
            </Modal> */}
        </>
    );
}
)