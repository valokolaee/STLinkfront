// config/routes.ts

import { ProtectedRoute } from '../../components/ProtectedRoute';
import { AdminLayout } from '../../layouts/AdminLayout';
import { IRouteConfig } from '../../types/IRouteConfig';
import { admin_add_device, admin_dashboard, admin_device, admin_devices, admin_report, admin_reports, admin_roll, admin_rolls, admin_user, admin_users, admin_withdraws } from './objects';



export const adminMainRoutes = '/panel'

// Admin-only routes
const adminRoutes: IRouteConfig[] = [
  admin_dashboard,
  admin_withdraws,
  admin_devices,
  admin_device,
  admin_add_device,
  admin_rolls,
  admin_roll,
  admin_users,
  admin_user,
  admin_reports,
  admin_report,
];






export default {
  path: adminMainRoutes,
  element: (
    <ProtectedRoute allowedRoles={['admin']}>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: adminRoutes.map(route => ({
    path: route.path.replace('/', ''),
    element: route.element,
    allowedRoles: ['agent'],
    redirectTo: '/login',
    sideBar: route.sideBar
  })),
}