import { ProfileOutlined } from '@ant-design/icons';
import { DashboardOutlined, HomeOutlined, RequestPageOutlined, WalletOutlined } from '@mui/icons-material';
const routList = () => [
    { label: 'Home', rout: '/', icon: <HomeOutlined /> },
    { label: 'Dashboard', rout: '/Dashboard', icon: <DashboardOutlined /> },
    { label: 'Wallets', rout: '/Wallets', icon: <WalletOutlined /> },
    { label: 'Withdraw', rout: '/Withdraw', icon: <RequestPageOutlined  /> },
    { label: 'Profile', rout: '/Profile', icon: <ProfileOutlined /> },
]
export default routList


