import {
    GaugeContainer,
    GaugeReferenceArc,
    GaugeValueArc
} from '@mui/x-charts/Gauge';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import Box from '../../components/Box';
import GaugePointer from './GaugePointer';


export default ({ gpuUsage }: { gpuUsage: number }) => {


    const [_gpuUsage, set_gpuUsage] = useState<number>(0)

    useEffect(() => {
        const _delay = Math.random() * 4000

        setTimeout(() => {
            set_gpuUsage(gpuUsage)
        }, _delay);

    }, [gpuUsage])


    return (

        <Box card >
            <Flex vertical align='center'>

                <GaugeContainer
                    height={150}
                    startAngle={-110}
                    endAngle={110}
                    value={_gpuUsage}
                >
                    <GaugeReferenceArc />
                    <GaugeValueArc />
                    <GaugePointer />
                </GaugeContainer>
                <div >{`GPU ${_gpuUsage}`}</div>
            </Flex>
        </Box>)
};
