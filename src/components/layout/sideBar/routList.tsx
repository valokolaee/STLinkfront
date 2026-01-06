import { ProfileOutlined } from '@ant-design/icons';
import { DashboardOutlined, DeveloperBoard, MonitorSharp, NewspaperOutlined, RequestPageOutlined, WalletOutlined } from '@mui/icons-material';
const routList = () => [
    // { label: 'Home', rout: '/', icon: <HomeOutlined /> },
    { label: 'Dashboard', rout: '/Dashboard', icon: <DashboardOutlined /> },
    { label: 'Monitoring', rout: '/Monitoring', icon: <MonitorSharp /> },
    { label: 'Devices', rout: '/Devices', icon: <DeveloperBoard /> },
    { label: 'Wallets', rout: '/Wallets', icon: <WalletOutlined /> },
    { label: 'Withdraw', rout: '/Withdraw', icon: <RequestPageOutlined /> },
    { label: 'Profile', rout: '/Profile', icon: <ProfileOutlined /> },
    { label: 'News*', rout: '/News', icon: <NewspaperOutlined /> },
]
export default routList


