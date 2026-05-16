// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { UserRole } from '../types/auth';
import { useAuth } from '../context/useAuth';
import { useAppSelector } from '../../redux/hooks';

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
  redirectTo?: string;
  children?: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles = [],
  redirectTo = '/login',
  children,
}) => {
  const { isLoading } = useAuth();
  const user = useAppSelector((s) => s.userSlice)

  if (isLoading) {
    return <div>Loading...</div>; // Or your loading component
  }

  // Not authenticated
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  // Check role authorization
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role!)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // return children ? <>{children}</> : <>jj</>;
  return children ? <>{children}</> : <Outlet />;
};