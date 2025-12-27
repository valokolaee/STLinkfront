import { Flex } from 'antd';
import React, { useEffect, useState } from 'react';
import RowFrame from '../components/RowFrame';
import Box from '../components/Box';
import { BarChart, LineChart } from '@mui/x-charts';
import {
    worldElectricityProduction,
    keyToLabel,
    colors,
} from '../components/worldElectricityProduction';
import { IMonitorData } from '../IMonitorData';
import { getObjectFromJsonArray, JsonArrayIntoNumberArray } from '../../../../../utils/json.utils';
import LastEarnings from './lastEarnings';
import { sx } from './sx';
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

 

export default ({  metrics, }: {metrics:IMonitorData['metrics']}) => {

    const [_lastEarnings, set_lastEarnings] = useState<number[]>([])

    useEffect(() => {
        const _delay = Math.random() * 4000

        setTimeout(() => {
            // set_lastEarnings(JsonArrayIntoNumberArray(lastEarnings!, 'amount'))
        }, _delay);

    }, [metrics])

    return (

     
                    <Box flex={1} card>
                        <LineChart
                            axisHighlight={{
                            }}
                            xAxis={[
                                { dataKey: 'year', valueFormatter: (value: number) => value?.toString() },
                            ]}
                            series={Object.keys(keyToLabel).map((key) => ({
                                dataKey: key,
                                label: keyToLabel[key],
                                color: colors[key],
                                showMark: false,
                                ...stackStrategy,
                            }))}
                            dataset={worldElectricityProduction}
                            {...customize}
                            // margin={margin}
                            sx={sx}
                        />

        </Box>
        

    );
}