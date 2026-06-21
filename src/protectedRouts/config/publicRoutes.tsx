// config/routes.ts
import Layout from '../../components/layout';
import WithdrawManagement from '../../pages/pagesAdmin/withdrawManagement';
import Landing from '../../pages/pagesPublic/Landing/Landing';
import Dashboard from '../../pages/pagesUser/Dashboard';
import Home from '../../pages/pagesUser/Home';
 import Profile from '../../pages/pagesUser/Profile';
import Register from '../../pages/pagesUser/Register';
import Blog from '../../pages/pagesPublic/news/Blog/Blog';
import { IRouteConfig } from '../types/IRouteConfig';
import Unauthorized from '../components/Unauthorized';
import LoginCustomer from '../../pages/pagesUser/LoginCustomer';

// Public routes (accessible to everyone)
 const publicRoutes: IRouteConfig[] = [
  {
    path: '/',
    element: <LoginCustomer />,
    // element: <Landing />,
  },
  {
    path: '/login',
    element: <LoginCustomer />,
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


export default publicRoutes.map(route => ({
     path: route.path,
     element: route.element,
   }))