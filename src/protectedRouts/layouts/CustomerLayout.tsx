// layouts/CustomerLayout.tsx
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import Layout from '../../components/layout';
export const CustomerLayout = () => {
  const { user, logout } = useAuth();


  return (
    <Layout>
      <Outlet />
    </Layout>
  )
  // return (
  //   <div className="customer-layout">
  //     <nav className="customer-nav">
  //       <NavLink to="/dashboard">Dashboard</NavLink>
  //       <NavLink to="/orders">Orders</NavLink>
  //       <NavLink to="/profile">Profile</NavLink>
  //       <NavLink to="/cart">Cart</NavLink>
  //       <button onClick={logout}>Logout</button>
  //       <span>Welcome, {user?.name}</span>
  //     </nav>
  //     <main className="customer-content">
  //       <Outlet />
  //     </main>
  //   </div>
  // );
};