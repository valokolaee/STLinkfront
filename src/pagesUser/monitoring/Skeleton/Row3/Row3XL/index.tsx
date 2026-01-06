import {
    useGaugeState
} from '@mui/x-charts/Gauge';
import { Flex } from 'antd';
import { getObjectFromJsonArray } from '../../../../../utils/json.utils';
import { safeFixed } from '../../../../../utils/text.utils';
import Box from '../../components/Box';
import ContentBox from '../../components/ContentBox';
import RowFrame from '../../components/RowFrame';
import { IMonitorData } from '../../IMonitorData';
import CpuUsage from './cpuUsage';
import GpuUsage from './gpuUsage';



export default (monitor: IMonitorData) => {
    const { wallet, alerts, metrics, session } = monitor || {}

    const metric = getObjectFromJsonArray(metrics!)
    const alert = getObjectFromJsonArray(alerts!)

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
                            value={`${safeFixed(hashRate)} TFLPS`}
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
                        children1={<CpuUsage cpuUsage={cpuUsage} />}
                        children2={<GpuUsage gpuUsage={gpuUsage} />}
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