import type { TableProps } from 'antd';
import { Flex, Space, Table, Tag } from 'antd';
import IMiningDevice from '../../../../../../interfaces/IMiningDevice';
import Item from './item';
import { ISelect } from '../../../../../../interfaces/ISelect';


export default ({ devices,sel }: { devices: IMiningDevice[];sel: ISelect<IMiningDevice> }) => {
    return <Flex vertical className='bg-gray-900 m-2'>{devices.map((item) => <Item info={item} onSelect={sel.onSelect} key={item.id} />)}</Flex >

};



const _color = (s: IMiningDevice['status']) => {
    switch (s) {
        case 'active':
            return 'green'
        case 'error':
            return 'red'
        case 'inactive':
            return 'gray'
        case 'maintenance':
            return 'blue'
        case 'offline':
            return 'orange'

        default:
            return 'white'
    }

}


const columns: TableProps<IMiningDevice>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'deviceName',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'imei',
        dataIndex: 'imei',
        key: 'imei',
    },

    {
        title: 'status',
        key: 'status',
        dataIndex: 'status',
        render: (_, { status }) => <Tag color={_color(status)} key={'tag'}>
            {status!.toUpperCase()}
        </Tag>


    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">

            </Space>
        ),
    },
];
