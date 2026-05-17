import { ProfileOutlined } from '@ant-design/icons';
import { DashboardOutlined, DeveloperBoard, MonitorSharp, NewspaperOutlined, RequestPageOutlined, WalletOutlined } from '@mui/icons-material';
const routList = () => [
    // { label: 'Home', rout: '/', icon: <HomeOutlined /> },
    { label: 'Dashboard', rout: '/cust/Dashboard', icon: <DashboardOutlined /> },
    { label: 'Monitoring', rout: '/cust/Monitoring', icon: <MonitorSharp /> },
    { label: 'Devices', rout: '/cust/Devices', icon: <DeveloperBoard /> },
    { label: 'Wallets', rout: '/cust/Wallets', icon: <WalletOutlined /> },
    { label: 'Withdraw', rout: '/cust/Withdraw', icon: <RequestPageOutlined /> },
    { label: 'Profile', rout: '/cust/Profile', icon: <ProfileOutlined /> },
    // { label: 'News*', rout: '/cust/News', icon: <NewspaperOutlined /> },
]
export default routList


