import React, { useEffect, useRef, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import IMiningDevice from '../../../../../../interfaces/IMiningDevice';
import { green } from '@mui/material/colors';
import WebService, { IWebServiceFuncs } from '../../../../../../webService';
// import { IModalFuncs } from '../../../../components/ui/CModal';
import IReqRes from '../../../../../../webService/ApiUrls/apis/IReqRes';
import IMiningWallet from '../../../../../../interfaces/IMiningWallet';
import { miningDevices } from '../../../../../../webService/ApiUrls/apis';
import { useAppSelector } from '../../../../../../redux/hooks';
import IDevice from '../../../../../../interfaces/IDevice';


export default ({ status }: { status: IMiningDevice['status'] }) =>
    <div>

        <Tag color={_color(status)} key={'tag'}  >
            {status!.toUpperCase()}
        </Tag>

    </div>


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
