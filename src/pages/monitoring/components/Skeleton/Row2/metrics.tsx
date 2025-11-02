import { LineChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { JsonArrayIntoNumberArray } from '../../../../../utils/json.utils';
import Box from '../components/Box';
import { IMonitorData } from '../IMonitorData';
import { sx } from './alllEarnings';
const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none',
} as const;

export const customize = {
    // height: 350,
    hideLegend: true,
    experimentalFeatures: { preferStrictDomainInLineCharts: true },
};


const margin = { right: 5, left: 0 };
const vData = [7010, 2000, 3000, 5780, 1790, 1390, 1490];
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];




export default ({ metrics }: { metrics: IMonitorData['metrics'] }) => {

    const [_metrics, set_metrics] = useState<t[]>([])

    useEffect(() => {
        const _delay = Math.random() * 4000

        setTimeout(() => {
            set_metrics([
                { data: JsonArrayIntoNumberArray(metrics!, 'cpuUsage'), label: 'cpuUsage' },
                { data: JsonArrayIntoNumberArray(metrics!, 'memoryUsage'), label: 'memoryUsage' },
                { data: JsonArrayIntoNumberArray(metrics!, 'gpuUsage'), label: 'gpuUsage' },
                { data: JsonArrayIntoNumberArray(metrics!, 'processingSpeed'), label: 'processingSpeed' },
                { data: JsonArrayIntoNumberArray(metrics!, 'fanSpeedRpm'), label: 'fanSpeedRpm' },
                { data: JsonArrayIntoNumberArray(metrics!, 'temperature'), label: 'temperature' },
                { data: JsonArrayIntoNumberArray(metrics!, 'powerConsumption'), label: 'powerConsumption' },
                { data: JsonArrayIntoNumberArray(metrics!, 'hashRate'), label: 'hashRate' },

            ])
        }, _delay);

    }, [metrics])


    // processingSpeed ?: number;
    // fanSpeedRpm ?: number;
    // temperature ?: number;
    // powerConsumption ?: number;
    // hashRate ?: number;


    return (

        <Box flex={1} card>
            <LineChart
                series={_metrics}
                // xAxis={[{ scaleType: 'point', data: xLabels }]}
                yAxis={[{ width: 50 }]}
                margin={margin}
                sx={sx}
            /></Box>


    );
}




type t = { data: number[], label: string };