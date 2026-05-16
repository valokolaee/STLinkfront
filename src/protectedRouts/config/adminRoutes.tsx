// config/routes.ts
import Layout from '../../components/layout';
import Login from '../../pages/pagesAgent/Login';
import WithdrawManagement from '../../pages/pagesAgent/withdrawManagement';
import { RouteConfig } from '../types/routes';



// Admin-only routes
export const adminRoutes: RouteConfig[] = [
  {
    path: '/panel',
    element:  <Login/>,
    allowedRoles: ['admin'],
    redirectTo: '/login',
    children: [
      {
        path: 'WithdrawManagement',
        element: <WithdrawManagement />,
      },
      // {
      //   path: 'users',
      //   element: <UserManagement />,
      // },
      // {
      //   path: 'products',
      //   element: <ProductManagement />,
      // },
      // {
      //   path: 'orders',
      //   element: <OrderManagement />,
      // },
      // {
      //   path: 'settings',
      //   element: <AdminSettings />,
      // },
    ],
  },
];


