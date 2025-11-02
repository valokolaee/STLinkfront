import { Flex } from 'antd';
import svgList from '../../../../../assets/icons/svgList';
import IMiningDevice from '../../../../../interfaces/IMiningDevice';
import { ISelect } from '../../../../../interfaces/ISelect';
import { safeFixed } from '../../../../../utils/text.utils';
import Box from '../components/Box';
import ContentBox from '../components/ContentBox';
import Devices from '../components/devices';
import RowFrame from '../components/RowFrame';
import { IMonitorData } from '../IMonitorData';
import LastUpTime from './lastUpTime';




export default ({ device, monitor }: { monitor: IMonitorData; device: ISelect<IMiningDevice> }) => {
    const { wallet,  } = monitor || {}
    const { totalEarnings, currency = 'USDT', availableBalance, withdrawnAmount, lastUpdated, } = wallet || {}
 
    return (
        <>
            <RowFrame
                children1={[

                    <Devices selectedItem={device.selectedItem} onSelect={device.onSelect} />

                    ,
                    <Box flex={3} card  >

                        <ContentBox
                            fontSize={4}
                            color={{ name: 'green', num: 500 }}
                            title='Total Earning'
                            value={
                                <>
                                    <div>{(safeFixed(totalEarnings || 0.00))}</div>
                                    <div>{currency}</div>
                                </>
                            } />



                    </Box>,
                    <Box flex={2} vertical card>

                        <Box flex={2}>
                            <ContentBox
                                color={{ name: 'blue', num: 500 }}
                                title='Available Balance' value={safeFixed(availableBalance)} />
                        </Box>
                        <Box flex={2}>
                            <ContentBox
                                color={{ name: 'blue', num: 500 }}
                                title='Withdrawn Amount' value={safeFixed(withdrawnAmount)} />
                        </Box>

                    </Box>,
                ]}
                children2={[
                    <Box flex={1} card>
                        <LastUpTime lastUpdated={lastUpdated} />
                    </Box>,

                    <Box flex={1} vertical>
                        <Box card >
                            <Box >
                                <Flex vertical style={{ width: '100%', justifyContent: 'space-between' }}>
                                    <span className='block w-full text-center'>
                                        Consensus
                                    </span>

                                    <Flex justify='space-between'>
                                        <span>
                                            Delegator
                                        </span>
                                        <span className='text-xl'>
                                            3
                                        </span>
                                    </Flex>

                                    <Flex justify='space-between'>
                                        <span>
                                            Stacking KeyPairs
                                        </span>
                                        <span className='text-xl'>
                                            3
                                        </span>
                                    </Flex>

                                </Flex>
                            </Box>
                        </Box>
                        <Box card>
                            <Box  >
                                <Flex vertical style={{ width: '100%', justifyContent: 'space-between' }}>
                                    <span className='block w-full text-center'>
                                        Block Producer
                                    </span>

                                    <Flex justify='space-between'>
                                        <span>
                                            Blocks Produced
                                        </span>
                                        <span className='text-xl'>
                                            3
                                        </span>
                                    </Flex>

                                    <Flex justify='space-between'>
                                        <span>
                                            Slots Won
                                        </span>
                                        <span className='text-xl'>
                                            3
                                        </span>
                                    </Flex>

                                </Flex>
                            </Box>
                        </Box>


                    </Box>,
                ]}
            />
        </>
    )
};
export interface IR1 {
    totalEarning?: number;
    currency?: string
}