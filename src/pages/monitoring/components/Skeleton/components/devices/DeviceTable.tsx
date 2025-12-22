import { Flex } from 'antd';
import IMiningDevice from '../../../../../../interfaces/IMiningDevice';
import { ISelect } from '../../../../../../interfaces/ISelect';
import Item from './item';


export default ({ devices, sel }: { devices: IMiningDevice[]; sel: ISelect<IMiningDevice> }) =>
    <Flex vertical className='bg-gray-900 m-2'>{devices.map((item) =>
        <Item info={item} isSelected={sel.selectedItem?.id === item?.id} onSelect={sel.onSelect} key={item.id} />)}
    </Flex >





