// config/routes.ts
import { ProfileOutlined } from '@ant-design/icons';
import { DashboardOutlined, DeveloperBoard, MonitorSharp, RequestPageOutlined, WalletOutlined } from '@mui/icons-material';
import AddWallet from '../../pages/pagesUser/AddWallet';
import Devices from '../../pages/pagesUser/components/devices';
import Wallets from '../../pages/pagesUser/components/wallets';
import Dashboard from '../../pages/pagesUser/Dashboard';
import Device from '../../pages/pagesUser/Devices/Device';
import Skeleton from '../../pages/pagesUser/monitoring/Skeleton';
import Profile from '../../pages/pagesUser/Profile';
import Wallet from '../../pages/pagesUser/Wallets/Wallet';
import Withdraw from '../../pages/pagesUser/withdraw';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { CustomerLayout } from '../layouts/CustomerLayout';
import { IRouteConfig } from '../types/IRouteConfig';





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