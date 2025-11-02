import svgList from '../../../../../assets/icons/svgList';
import { getObjectFromJsonArray } from '../../../../../utils/json.utils';
import { safeFixed } from '../../../../../utils/text.utils';
import Box from '../components/Box';
import ContentBox from '../components/ContentBox';
import RowFrame from '../components/RowFrame';
import { IMonitorData } from '../IMonitorData';
import Row3XL from './Row3XL';



export default (monitor: IMonitorData) => {
    const { wallet, alerts, metrics, session } = monitor || {}

    const metric = getObjectFromJsonArray(metrics!)
    const alert = getObjectFromJsonArray(alerts!)

    const { networkLatency, processingSpeed, } = metric || {}
    const { energyConsumed, } = session || {}
    const { alertMessage } = alert || {}


    return (
        <RowFrame

            children1={[
                <Row3XL {...monitor} />
            ]}

            children2={[
                <Box flex={1} vertical>
                    <Box flex={2} card>
                        <ContentBox
                            color={{ name: 'red', num: 200 }}
                            title='Network Latency'
                            value={safeFixed(networkLatency!)}

                        />
                    </Box>
                    <Box flex={2} card>
                        <ContentBox
                            color={{ name: 'red', num: 200 }}
                            title='Energy Consumed'
                            value={`${energyConsumed || 0}`}

                        />
                    </Box>
                </Box>,
                <Box flex={1} vertical>
                    <Box flex={2} card >
                        <ContentBox
                            color={{ name: 'red', num: 200 }}
                            title='Processing Speed'
                            value={`${processingSpeed}`}
                            svg={svgList.chart6}
                        />
                    </Box>
                    <Box flex={2} card>
                        <ContentBox
                            color={{ name: 'red', num: 200 }}
                            title='Alert Message'
                            value={alertMessage || 'No Alert'}

                        />
                    </Box>
                </Box>,
            ]}
        />
    );


}