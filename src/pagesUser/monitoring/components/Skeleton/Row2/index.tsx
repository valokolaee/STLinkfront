import { LineChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { JsonArrayIntoNumberArray } from '../../../../../utils/json.utils';
import Box from '../components/Box';
import RowFrame from '../components/RowFrame';
import { colors, keyToLabel, worldElectricityProduction, } from '../components/worldElectricityProduction';
import { IMonitorData } from '../IMonitorData';
import LastEarnings from './lastEarnings';
import Metrics from './metrics';
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





export default ({ alerts, lastEarnings, metrics, session, wallet }: IMonitorData) => {

    const [_lastEarnings, set_lastEarnings] = useState<number[]>([])

    useEffect(() => {
        const _delay = Math.random() * 4000

        setTimeout(() => {
            set_lastEarnings(JsonArrayIntoNumberArray(lastEarnings!, 'amount'))
        }, _delay);

    }, [lastEarnings])

    return (

        < RowFrame
            children1flex={2}
            children2flex={2}
            children1={
                [
                    // <Box flex={1} card>
                    //     <LineChart
                    //         axisHighlight={{
                    //         }}
                    //         xAxis={[
                    //             { dataKey: 'year', valueFormatter: (value: number) => value?.toString() },
                    //         ]}
                    //         series={Object.keys(keyToLabel).map((key) => ({
                    //             dataKey: key,
                    //             label: keyToLabel[key],
                    //             color: colors[key],
                    //             showMark: false,
                    //             ...stackStrategy,
                    //         }))}
                    //         dataset={worldElectricityProduction}
                    //         {...customize}
                    //         sx={sx}
                    //     />

                    // </Box>,
                    <LastEarnings lastEarnings={lastEarnings} />,

                ]}
            children2={
                [

                    <Metrics metrics={metrics} />
                ]}
        />




    );
}