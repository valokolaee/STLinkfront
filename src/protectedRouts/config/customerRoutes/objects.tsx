// config/routes.ts
import { ProfileOutlined } from '@ant-design/icons';
import { DashboardOutlined, DeveloperBoard, MonitorSharp, RequestPageOutlined, WalletOutlined } from '@mui/icons-material';
import AddWallet from '../../../pages/pagesUser/AddWallet';
import Devices from '../../../pages/pagesUser/components/devices';
import Wallets from '../../../pages/pagesUser/components/wallets';
import Dashboard from '../../../pages/pagesUser/Dashboard';
import Device from '../../../pages/pagesUser/Devices/Device';
import Skeleton from '../../../pages/pagesUser/monitoring/Skeleton';
import Profile from '../../../pages/pagesUser/Profile';
import Wallet from '../../../pages/pagesUser/Wallets/Wallet';
import Withdraw from '../../../pages/pagesUser/withdraw';




export const customer_dashboard = { path: '/dashboard', element: <Dashboard />, sideBar: { label: 'Dashboard', icon: <DashboardOutlined /> }, }
export const customer_profile = { path: '/profile', element: <Profile />, sideBar: { label: 'Profile', icon: <ProfileOutlined /> }, }
export const customer_monitoring = { path: '/monitoring', element: <Skeleton />, sideBar: { label: 'Monitoring', icon: <MonitorSharp /> }, }
export const customer_withdraw = { path: '/withdraw', element: <Withdraw />, sideBar: { label: 'Withdraw', icon: <RequestPageOutlined /> }, }
export const customer_wallets = { path: '/wallets', element: <Wallets />, sideBar: { label: 'Wallets', icon: <WalletOutlined /> }, }
export const customer_wallet = { path: '/wallet/:id"', element: <Wallet /> }
export const customer_addWallet = { path: '/addWallet', element: <AddWallet /> }
export const customer_devices = { path: '/devices', element: <Devices />, sideBar: { label: 'Devices', icon: <DeveloperBoard /> }, }
export const customer_device = { path: '/device', element: <Device /> }

