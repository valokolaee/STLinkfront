import React from 'react';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';

const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
};

const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
};

export default ({ confirm, children, title, description, confirmText, cancelText }: IConfirmProps) => (
    <Popconfirm
        title={title}
        description={description}
        onConfirm={confirm}
        onCancel={cancel}
        okText={confirmText || "Yes"}
        cancelText={cancelText || "No"}
    >
        {children || <Button danger>Delete</Button>}
    </Popconfirm>
);



export interface IConfirmProps {
    confirmText?: string;
    cancelText?: string;
    description?: string;
    title: string;
    confirm: () => void;
    children?: React.ReactNode;

}