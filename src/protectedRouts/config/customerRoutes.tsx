// config/routes.ts
import Layout from '../../components/layout';
import WithdrawManagement from '../../pages/pagesAdmin/withdrawManagement';
import Landing from '../../pages/pagesPublic/Landing/Landing';
import Dashboard from '../../pages/pagesUser/Dashboard';
import Home from '../../pages/pagesUser/Home';
import Login from '../../pages/pagesUser/Login';
import Profile from '../../pages/pagesUser/Profile';
import Register from '../../pages/pagesUser/Register';
import Blog from '../../pages/pagesPublic/news/Blog/Blog';
import { IRouteConfig } from '../types/IRouteConfig';
import Skeleton from '../../pages/pagesUser/monitoring/Skeleton';
 import Wallets from '../../pages/pagesUser/components/wallets';
import Wallet from '../../pages/pagesUser/Wallets/Wallet';
import Devices from '../../pages/pagesUser/components/devices';
import AddWallet from '../../pages/pagesUser/AddWallet';
import Device from '../../pages/pagesUser/Devices/Device';
import { CustomerLayout } from '../layouts/CustomerLayout';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { DashboardOutlined, DeveloperBoard, MonitorSharp, NewspaperOutlined, RequestPageOutlined, WalletOutlined } from '@mui/icons-material';
import { ProfileOutlined } from '@ant-design/icons';
import Withdraw from '../../pages/pagesUser/withdraw';





export const customerMainRoutes = '/cu'
const customerRoutes: IRouteConfig[] = [
  { path: '/dashboard', element: <Dashboard />, sideBar: { label: 'Dashboard', icon: <DashboardOutlined /> }, },
  { path: '/profile', element: <Profile />, sideBar: { label: 'Profile', icon: <ProfileOutlined /> }, },
  { path: '/monitoring', element: <Skeleton />, sideBar: { label: 'Monitoring', icon: <MonitorSharp /> }, },
  { path: '/withdraw', element: <Withdraw />, sideBar: { label: 'Withdraw', icon: <RequestPageOutlined /> }, },
  { path: '/wallets', element: <Wallets />, sideBar: { label: 'Wallets', icon: <WalletOutlined /> }, },
  { path: '/wallet/:id"', element: <Wallet /> },
  { path: '/addWallet', element: <AddWallet /> },
  { path: '/devices', element: <Devices />, sideBar: { label: 'Devices', icon: <DeveloperBoard /> }, },
  { path: '/device/:id"', element: <Device /> },
];






export default {
  path: customerMainRoutes,
  element: (
    <ProtectedRoute allowedRoles={['customer']}>
      <CustomerLayout />
    </ProtectedRoute>
  ),
  children: customerRoutes.map(route => ({
    path: route.path.replace('/', ''),
    element: route.element,
    allowedRoles: ['customer'],
    redirectTo: '/login',
    sideBar: route.sideBar
  })),
}