// layouts/AdminLayout.tsx
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import Layout from '../../components/layout';
import adminRoutList from '../../components/layout/sideBar/adminRoutList';
import { IRout } from '../../components/layout/sideBar';

export const AdminLayout = () => {
  const { user, logout } = useAuth();




  return (
    <Layout rList={adminRoutList  as IRout[]}>
      <Outlet />
    </Layout>
  )
  // return (
  //   <div className="admin-layout">
  //     <aside className="admin-sidebar">
  //       <h2>Admin Panel</h2>
  //       <nav className="admin-nav">
  //         <NavLink to="/admin/dashboard">Dashboard</NavLink>
  //         <NavLink to="/admin/users">Users</NavLink>
  //         <NavLink to="/admin/products">Products</NavLink>
  //         <NavLink to="/admin/orders">Orders</NavLink>
  //         <NavLink to="/admin/settings">Settings</NavLink>
  //       </nav>
  //       <div className="admin-user">
  //         <span>{user?.name} (Admin)</span>
  //         <button onClick={logout}>Logout</button>
  //       </div>
  //     </aside>
  //     <main className="admin-content">
  //       <Outlet />
  //     </main>
  //   </div>
  // );
};