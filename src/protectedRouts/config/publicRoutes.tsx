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
import { RouteConfig } from '../types/routes';
import Unauthorized from '../components/unauthorized';

// Public routes (accessible to everyone)
export const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/blog',
    element: <Blog />,
    // allowedRoles: ['customer'],
    // redirectTo: '/',
  },

  {
    path: '/unauthorized',
    element: <Unauthorized />


  }
  // {
  //   path: '/dashboard',
  //   element: <Dashboard />,
  //   // allowedRoles: ['customer'],
  //   // redirectTo: '/',
  // },
  // {
  //   path: '/unauthorized',
  //   element: <Unauthorized />,
  // },
];


