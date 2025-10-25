
import { Tabs } from 'antd';
import React from 'react';
import Devices from './devices';
import CWhiteLabel from '../../components/ui/CWhiteLabel';
import Withdraw from '../withdraw/list';
import Wallet from './wallet';

const App: React.FC = () => {

    const list = [
        {
            label: <CWhiteLabel txt='devices' />,
            key: '1',
            children: <Devices />,
        },
        {
            label: <CWhiteLabel txt='wallets' />,
            key: '2',
            children: <Wallet />,

        },
        // {
        //     label: <CWhiteLabel txt='Withdraw' />,
        //     key: '3',
        //     children: <Withdraw />,
        // }
    ]
    return (
        <Tabs
            defaultActiveKey="2"
            centered
            destroyOnHidden
            color='white'
            tabBarStyle={{ color: 'red' }}
            items={list}

        />
    );
}

export default App;