// config/routes.ts
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { CustomerLayout } from '../../layouts/CustomerLayout';
import { IRouteConfig } from '../../types/IRouteConfig';
import { customer_addWallet, customer_dashboard, customer_device, customer_devices, customer_monitoring, customer_profile, customer_wallet, customer_wallets, customer_withdraw } from './objects';


export const customerMainRoutes = '/cu'

const customerRoutes: IRouteConfig[] = [
  customer_dashboard,
  customer_profile,
  customer_monitoring,
  customer_withdraw,
  customer_wallets,
  customer_wallet,
  customer_addWallet,
  customer_devices,
  customer_device,
];



export default {
  path: customerMainRoutes,
  element: (
    <ProtectedRoute allowedRoles={['customer']}>
      <CustomerLayout />
    </ProtectedRoute>
  ),
  children: customerRoutes.map(route => ({
    path: route.path.replace('/', ''),
    element: route.element,
    allowedRoles: ['customer'],
    redirectTo: '/login',
    sideBar: route.sideBar
  })),
}