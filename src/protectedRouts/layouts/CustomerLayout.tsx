// layouts/CustomerLayout.tsx
import { Outlet } from 'react-router-dom';
import Layout from '../../components/layout';
import { useAuth } from '../context/useAuth';
import { IRouteConfig } from '../types/IRouteConfig';
import customerRoutes from '../config/customerRoutes';
export const CustomerLayout = () => {
  const { user, logout } = useAuth();


  return (
    <Layout rList={customerRoutes.children as IRouteConfig[]}>
      <Outlet />
    </Layout>
  )
};