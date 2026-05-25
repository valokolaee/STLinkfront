// layouts/AdminLayout.tsx
import { Outlet } from 'react-router-dom';
import Layout from '../../components/layout';
import { useAuth } from '../context/useAuth';
import adminRoutes from '../config/adminRoutes';

export const AdminLayout = () => {
  const { user, logout } = useAuth();

  return (
    <Layout rList={adminRoutes.children}>
      <Outlet />
    </Layout>
  )
};