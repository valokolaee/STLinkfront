import { RadarChart } from '@mui/x-charts';
import {
    GaugeContainer,
    GaugeReferenceArc,
    GaugeValueArc,
    useGaugeState,
} from '@mui/x-charts/Gauge';
import { Flex } from 'antd';
import React from 'react';
import Box from './components/Box';
import ContentBox from './components/ContentBox';
import { customize, sx } from './Row2';
import RowFrame from './components/RowFrame';
import { IMonitorData } from './IMonitorData';
import { safeFixed } from '../../../../utils/text.utils';

function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
        // No value to display
        return null;
    }

    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={5} fill="red" />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke="red"
                strokeWidth={3}
            />
        </g>
    );
};


export default (monitor: IMonitorData) => {
    const { wallet, alert, metric, session } = monitor || {}
    const { cpuUsage = 0, fanSpeedRpm = 0, gpuUsage = 0, memoryUsage = 0, hashRate = 0, networkLatency = 0, powerConsumption = 0, processingSpeed = 0, temperature = 0 } = metric || {}


    return (
        <RowFrame
            children1flex={2}
            children2flex={3}
            flex={2}
            children1={

                <Flex vertical flex={2}>
                    <Box card>
                        <ContentBox
                            title='Farm Hash Rate'
                            color={{ name: 'green', num: 500 }}
                            value={`${safeFixed (hashRate)} FLPS`}
                        />
                    </Box>
                    <Box card>
                        <ContentBox
                            title='Fan Speed'
                            color={{ name: 'green', num: 500 }}
                            value={`${fanSpeedRpm} RPM`}
                        />
                    </Box>
                </Flex>
            }
            children2={

                <Flex vertical flex={3}>
                    <RowFrame
                        children1flex={1}
                        children2flex={1}
                        children1={

                            <Box card >
                                <Flex vertical align='center'>

                                    <GaugeContainer
                                        height={150}
                                        startAngle={-110}
                                        endAngle={110}
                                        value={cpuUsage}
                                        color='red'

                                    >
                                        <GaugeReferenceArc />
                                        <GaugeValueArc />
                                        <GaugePointer />
                                    </GaugeContainer>
                                    <div >{`CPU ${cpuUsage}`}</div>
                                </Flex>
                            </Box>
                        }
                        children2={

                            <Box card >
                                <Flex vertical align='center'>

                                    <GaugeContainer
                                        height={150}
                                        startAngle={-110}
                                        endAngle={110}
                                        value={gpuUsage}
                                    >
                                        <GaugeReferenceArc />
                                        <GaugeValueArc />
                                        <GaugePointer />
                                    </GaugeContainer>
                                    <div >{`GPU ${gpuUsage}`}</div>
                                </Flex>
                            </Box>
                            // <Box card >
                            //     <RadarChart
                            //         height={150}

                            //         series={[
                            //             { label: 'USA', data: [6.65, 2.76, 5.15, 0.19, 0.07, 0.12], valueFormatter },
                            //             {
                            //                 label: 'Australia',
                            //                 data: [5.52, 5.5, 3.19, 0.51, 0.15, 0.11],
                            //                 valueFormatter,
                            //             },
                            //             {
                            //                 label: 'United Kingdom',
                            //                 data: [2.26, 0.29, 2.03, 0.05, 0.04, 0.06],
                            //                 valueFormatter,
                            //             },
                            //         ]}
                            //         radar={{
                            //             metrics: ['Oil', 'Coal', 'Gas', 'Flaring', 'Other\nindustry', 'Cement'],
                            //         }}
                            //         {...customize}
                            //         sx={sx}
                            //     />
                            // </Box>
                        }
                    />

                    <RowFrame
                        children1flex={1}
                        children2flex={1}
                        flex={1}
                        children1={

                            <Box card >
                                <ContentBox
                                    title='Power Consumption'
                                    color={{ name: 'green', num: 500 }}
                                    value={`${powerConsumption} W`}
                                    fontSize={4}
                                />
                            </Box>

                        }
                        children2={<Box card >
                            <ContentBox
                                title='Temperature'
                                color={{ name: 'green', num: 500 }}
                                value={`${temperature} °C`}
                                fontSize={4}
                            />
                        </Box>
                        }
                    />
                </Flex>


            }
        />


    )
};


function valueFormatter(v: number | null) {
    if (v === null) {
        return 'NaN';
    }
    return `${v.toLocaleString()}t CO2eq/pers`;
}