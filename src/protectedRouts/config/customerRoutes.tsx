// config/routes.ts
import Layout from '../../components/layout';
import WithdrawManagement from '../../pages/pagesAgent/withdrawManagement';
import Landing from '../../pages/pagesPublic/Landing/Landing';
import Dashboard from '../../pages/pagesUser/Dashboard';
import Home from '../../pages/pagesUser/Home';
import Login from '../../pages/pagesUser/Login';
import Profile from '../../pages/pagesUser/Profile';
import Register from '../../pages/pagesUser/Register';
import Blog from '../../pages/pagesPublic/news/Blog/Blog';
import { RouteConfig } from '../types/routes';
import Skeleton from '../../pages/pagesUser/monitoring/Skeleton';
import Withdraw from '../../pages/pagesUser/Wallets/Wallet/actions/Withdraw';
import Wallets from '../../pages/pagesUser/components/wallets';
import Wallet from '../../pages/pagesUser/Wallets/Wallet';
import Devices from '../../pages/pagesUser/components/devices';
import AddWallet from '../../pages/pagesUser/AddWallet';
import Device from '../../pages/pagesUser/Devices/Device';




export const customerRoutes: RouteConfig[] = [

  { path: '/dashboard', element: <Dashboard />, allowedRoles: ['customer'], redirectTo: '/login', },
  { path: '/profile', element: <Profile />, allowedRoles: ['customer'], redirectTo: '/login', },
  { path: '/monitoring', element: <Skeleton />, allowedRoles: ['customer'], redirectTo: '/login', },
  { path: '/withdraw', element: <Withdraw />, allowedRoles: ['customer'], redirectTo: '/login', },
  { path: '/wallets', element: <Wallets />, allowedRoles: ['customer'], redirectTo: '/login', },
  { path: '/wallet/:id"', element: <Wallet />, allowedRoles: ['customer'], redirectTo: '/login', },
  { path: '/addWallet', element: <AddWallet />, allowedRoles: ['customer'], redirectTo: '/login', },
  { path: '/devices', element: <Devices />, allowedRoles: ['customer'], redirectTo: '/login', },
  { path: '/device/:id"', element: <Device />, allowedRoles: ['customer'], redirectTo: '/login', },

];

