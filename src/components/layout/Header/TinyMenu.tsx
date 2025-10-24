import { BilibiliOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import CAvatar from '../../ui/CAvatar';
import { Dashboard, DashboardOutlined, ReceiptLongOutlined } from '@mui/icons-material';
import { setUser } from '../../../redux/actions';

export default () => {
    const _user = useAppSelector((s) => s.userSlice)
    const navigate = useNavigate();

    const _login = () => {
        // setUser({ token: 'ljsfhhfhiuhgihugihgihhhfiuvhfiuhvfhvhfvhh' })

        navigate('/login')
    }
    const _dashboard = () => { navigate('/dashboard') }

    const _profile = () => { navigate('/profile') }
    const _withdraw = () => { navigate('/withdraw') }

    const _register = () => { navigate('/register') }

    const _logOut = () => {
        _login()
    }



    const _log = !!!_user.token ? {
        key: '4',
        label: 'login',
        icon: <LoginOutlined />,
        onClick: _login,
        // extra: '⌘S',
    } : {
        key: '4',
        label: 'switch user',
        icon: <LogoutOutlined />,
        onClick: _logOut,
        // extra: '⌘S',
    }



    const items: MenuProps['items'] = [

        {
            key: '2',
            label: 'dashboard',
            onClick: _dashboard,
            icon: <DashboardOutlined />,
        },
        {
            key: '1',
            label: 'withdraw',
            onClick: _withdraw,
            icon: <ReceiptLongOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Profile',
            onClick: _profile
        },
        {
            key: '3',
            label: 'Register',
            onClick: _register
        },
        _log

    ];
    return (
        <Dropdown menu={{ items }} >
            <Space>
                {_user.username || ''}
                <CAvatar url={_user.profileImage!} />
            </Space>
        </Dropdown>
    );
}