import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { CustomerLayout } from './layouts/CustomerLayout';
import { AdminLayout } from './layouts/AdminLayout';
import customerRoutes, { customerMainRoutes } from './config/customerRoutes';
import adminRoutes, { adminMainRoutes } from './config/adminRoutes';
import { publicAdminRoutes } from './config/publicAdminRoutes';
import publicRoutes from './config/publicRoutes';




export default
  [
    // Public routes
    // ...publicRoutes.map(route => ({
    //   path: route.path,
    //   element: route.element,
    // })),
    ...publicRoutes,
    ...publicAdminRoutes
    // ...publicAdminRoutes.map(route => ({
    //   path: route.path,
    //   element: route.element,
    // }))
    ,


    // Customer routes with layout
  customerRoutes
    // {
    //   path: customerMainRoutes,
    //   element: (
    //     <ProtectedRoute allowedRoles={['customer']}>
    //       <CustomerLayout />
    //     </ProtectedRoute>
    //   ),
    //   children: customerRoutes.map(route => ({
    //     path: route.path.replace('/', ''),
    //     element: route.element,
    //     allowedRoles: ['customer'],
    //     redirectTo: '/login'
    //   })),
    // }
    
    ,


    // Admin routes with layout
  adminRoutes
    // {
    //   path: adminMainRoutes,
    //   element: (
    //     <ProtectedRoute allowedRoles={['admin']}>
    //       <AdminLayout />
    //     </ProtectedRoute>
    //   ),
    //   children: adminRoutes.map(route => ({
    //     path: route.path.replace('/', ''),
    //     element: route.element,
    //   })),
    // }
    ,


  ]
