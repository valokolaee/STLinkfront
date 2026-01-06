import { LineChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { JsonArrayIntoNumberArray } from '../../../../utils/json.utils';
import Box from '../components/Box';
import { IMonitorData } from '../IMonitorData';
import { sx } from './sx';




export default ({ metrics }: { metrics: IMonitorData['metrics'] }) => {

    const [_metrics, set_metrics] = useState<t[]>([])

    useEffect(() => {
        const _delay = Math.random() * 4000

        setTimeout(() => {
            set_metrics([
                { data: JsonArrayIntoNumberArray(metrics!, 'cpuUsage'), label: 'cpu' },
                { data: JsonArrayIntoNumberArray(metrics!, 'memoryUsage'), label: 'memory' },
                { data: JsonArrayIntoNumberArray(metrics!, 'gpuUsage'), label: 'gpu' },
                { data: JsonArrayIntoNumberArray(metrics!, 'processingSpeed'), label: 'Processing Speed' },
                { data: JsonArrayIntoNumberArray(metrics!, 'fanSpeedRpm'), label: 'Fan Speed' },
                { data: JsonArrayIntoNumberArray(metrics!, 'temperature'), label: 'Temperature' },
                { data: JsonArrayIntoNumberArray(metrics!, 'powerConsumption'), label: 'Power Consumption' },
                { data: JsonArrayIntoNumberArray(metrics!, 'hashRate'), label: 'Hash Rate' },
            ])
        }, _delay);

    }, [metrics])



    return (

        <Box flex={1} card>
            <LineChart
                series={_metrics}
                // xAxis={[{ scaleType: 'point', data: xLabels }]}
                // yAxis={[{ width: 50 }]}
                // margin={margin}
                sx={sx}



            />
        </Box>


    );
}




type t = { data: number[], label: string };