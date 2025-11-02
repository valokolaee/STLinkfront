import { Flex } from 'antd';
import React, { ReactElement } from 'react';
import useIsMobile from '../../../../../hooks/useIsMobile';

const h = window.innerHeight

const RowFrame: React.FC<IRowFrame> = ({ children1, children2, flex, children1flex = 2, children2flex = 1, minHeight = h / 7 }) => {

    const _isMobile = useIsMobile()

    return (
        <Flex style={{ minHeight }} vertical={_isMobile} flex={flex} className='overflow-hidden'>

            <Flex style={style} flex={children1flex} vertical={_isMobile}> {children1} </Flex>
            <Flex style={style} flex={children2flex} vertical={_isMobile}>{children2}</Flex>

        </Flex>
    );
}
export default RowFrame;


const style: React.CSSProperties = {

};


export interface IRowFrame {
    children1?: ReactElement[] | ReactElement;
    children2?: ReactElement[] | ReactElement;
    children1flex?: number;
    children2flex?: number;
    flex?: number;
    minHeight?: number

}