import {
    GaugeContainer,
    GaugeReferenceArc,
    GaugeValueArc
} from '@mui/x-charts/Gauge';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import Box from '../../components/Box';
import GaugePointer from './GaugePointer';


export default ({ cpuUsage }: { cpuUsage: number }) => {

    const [_cpuUsage, set_cpuUsage] = useState<number>(0)

    useEffect(() => {
        const _delay = Math.random() * 4000

        setTimeout(() => {
            set_cpuUsage(cpuUsage)
        }, _delay);

    }, [cpuUsage])


    return (
        <Box card >
            <Flex vertical align='center'>

                <GaugeContainer
                    height={150}
                    startAngle={-110}
                    endAngle={110}
                    value={_cpuUsage}
                    color='red'

                >
                    <GaugeReferenceArc />
                    <GaugeValueArc />
                    <GaugePointer />
                </GaugeContainer>
                <div >{`CPU ${_cpuUsage}`}</div>
            </Flex>
        </Box>


    )
};

