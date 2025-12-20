import { Flex } from 'antd';
import { ReactNode, useEffect, useState } from 'react';
import { shadowX, shadowY } from '../../../../../css/classNames';


export default ({ color: { name, num }, title, value, fontSize = 5, svg }: IContentBox) => {
    const [_value, set_value] = useState(value)

    useEffect(() => {
        const _delay = Math.random() * 4000
        setTimeout(() => {
            set_value(value)
        }, _delay);
    }, [value])


    return (
        <Flex
            vertical
            style={{ borderRadius: 5, }}
            className={'relative w-full '}
            align='center'

        >
            {svg &&
                <div className="image-card">
                    <img
                        src={svg}
                        alt={'alt'}
                        className={`absolute opacity-10 left-0 right-0 bottom-0 w-full h-1/2`}
                    />
                </div>
            }
            {title}
            <Flex
                flex={1}
                align='center'
            >
                <strong className={`text-center text-${fontSize}xl text-${name}-${num}`}>{_value}</strong>
            </Flex>
        </Flex >
    );
}


export interface IContentBox {
    // children?:string
    title: string;
    value?: ReactNode[] | ReactNode;
    fontSize?: number;
    color: {
        name: string;
        num: number;
    };

    svg?: string
}