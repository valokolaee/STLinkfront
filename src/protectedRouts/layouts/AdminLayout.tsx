// layouts/AdminLayout.tsx
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
 
export const AdminLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav className="admin-nav">
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/users">Users</NavLink>
          <NavLink to="/admin/products">Products</NavLink>
          <NavLink to="/admin/orders">Orders</NavLink>
          <NavLink to="/admin/settings">Settings</NavLink>
        </nav>
        <div className="admin-user">
          <span>{user?.name} (Admin)</span>
          <button onClick={logout}>Logout</button>
        </div>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};