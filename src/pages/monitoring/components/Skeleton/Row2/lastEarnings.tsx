import { LineChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { JsonArrayIntoNumberArray } from '../../../../../utils/json.utils';
import Box from '../components/Box';
import Loading from '../components/Loading';
import { IMonitorData } from '../IMonitorData';
import { sx } from './sx';


export default ({ lastEarnings }: { lastEarnings: IMonitorData['lastEarnings'] }) => {

    const [_lastEarnings, set_lastEarnings] = useState<number[]>([])

    useEffect(() => {
        const _delay = Math.random() * 4000

        setTimeout(() => {
            set_lastEarnings(JsonArrayIntoNumberArray(lastEarnings!, 'amount'))
        }, _delay);

    }, [lastEarnings])

    return (

        <Box flex={1} card>
            {_lastEarnings.length > 0 ?

                <LineChart series={[{ data: _lastEarnings }]}
                                            sx={sx}
                />
                :
                <Loading />
            }

        </Box>


    );
}