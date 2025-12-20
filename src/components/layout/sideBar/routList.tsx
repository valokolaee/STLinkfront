import { HomeFilled, ProductFilled, ProfileOutlined, TransactionOutlined } from '@ant-design/icons';
import { DashboardOutlined, DeviceHub, DeviceHubOutlined, DeviceHubSharp, HomeOutlined, RequestPageOutlined, ResetTv, SvgIconComponent, WalletOutlined } from '@mui/icons-material';
import DeviceSvg from '../../../assets/icons/deviceSvg';
import TransferSection from 'antd/es/transfer/Section';
import UserSvg from '../../../assets/icons/UserSvg';
import WalletIcon from '../../../assets/icons/WalletIcon';
import WalletIconCCC from '../../../assets/icons/WalletIconCC';
const routList = () => [
    { label: 'Home', rout: '/', icon: <HomeOutlined /> },
    { label: 'Dashboard', rout: '/Dashboard', icon: <DashboardOutlined /> },
    { label: 'Wallets', rout: '/Wallets', icon: <WalletOutlined /> },
    { label: 'Withdraw', rout: '/Withdraw', icon: <RequestPageOutlined /> },
    { label: 'Profile', rout: '/Profile', icon: <ProductFilled   /> },
]
export default routList


