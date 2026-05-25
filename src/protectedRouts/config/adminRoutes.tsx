// config/routes.ts
import Layout from '../../components/layout';
import Login from '../../pages/pagesAdmin/LoginAdmin';
import WithdrawManagement from '../../pages/pagesAdmin/withdrawManagement';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { AdminLayout } from '../layouts/AdminLayout';
import { IRouteConfig } from '../types/IRouteConfig';
import { ProfileOutlined } from '@ant-design/icons';
import { DashboardOutlined, DeveloperBoard, MonitorSharp, NewspaperOutlined, RequestPageOutlined, WalletOutlined } from '@mui/icons-material';



export const adminMainRoutes = '/panel'

// Admin-only routes
const adminRoutes: IRouteConfig[] = [
  {
    path: '/withdrawManagement', element: <WithdrawManagement />,
    sideBar:
    { label: 'withdrawManagement',   icon: <DashboardOutlined /> },

  },
  { path: '/dashboard', element: <WithdrawManagement /> },
 
];






export default {
  path: adminMainRoutes,
  element: (
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: adminRoutes.map(route => ({
    path: route.path.replace('/', ''),
    element: route.element,
  })),
}