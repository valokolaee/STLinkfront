// config/routes.ts
import Layout from '../../components/layout';
import Login from '../../pages/pagesAdmin/LoginAdmin';
import WithdrawManagement from '../../pages/pagesAdmin/withdrawManagement';
import { RouteConfig } from '../types/routes';


export const adminMainRoutes = '/panel'

// Admin-only routes
export const adminRoutes: RouteConfig[] = [
  { path: '/withdrawManagement', element: <WithdrawManagement />},
  { path: '/dashboard', element: <WithdrawManagement />},
  // {
  //   path: '/panel',
  //   element: <Login />,
  //   allowedRoles: ['admin'],
  //   redirectTo: '/login',
  //   children: [
  //     {
  //       path: '/withdrawManagement',
  //       element: <WithdrawManagement />,
  //     },
  //     // {
  //     //   path: 'users',
  //     //   element: <UserManagement />,
  //     // },
  //     // {
  //     //   path: 'products',
  //     //   element: <ProductManagement />,
  //     // },
  //     // {
  //     //   path: 'orders',
  //     //   element: <OrderManagement />,
  //     // },
  //     // {
  //     //   path: 'settings',
  //     //   element: <AdminSettings />,
  //     // },
  //   ],
  // },
];


