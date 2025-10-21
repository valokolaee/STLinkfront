import { Flex } from 'antd';
import React, { ReactElement, ReactNode } from 'react';
import RowFrame from './RowFrame';
import { tstStyle, tstStyleBlue } from '../../../../styles/tstStyle';



const Box: React.FC<IBox> = ({ flex = 1, children, vertical, card,onClick }) => {

    const cardStyle = card ? style : {}

    return (
        <Flex
            onClick={onClick}
            vertical={vertical}
            style={{ ...cardStyle }}
            flex={flex}
            className={!card ? '' : 'bg-gray-800 overflow-hidden '}
        >
            {children}
        </Flex >
    );
}

export default Box;

export interface IBox {
    children?: ReactElement[] | ReactElement | ReactNode
    flex?: number;
    vertical?: boolean;
    card?: boolean;
    onClick?: () => void

}



const style: React.CSSProperties = {
    // height: 230,
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    marginRight: 5,

    // ...tstStyle,
    // backgroundColor: 'rgba(0,0,0,0.3)',
}