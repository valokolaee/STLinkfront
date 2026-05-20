import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { CustomerLayout } from './layouts/CustomerLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { publicRoutes } from './config/publicRoutes';
import { customerMainRoutes, customerRoutes } from './config/customerRoutes';
import { adminMainRoutes, adminRoutes } from './config/adminRoutes';
import { publicAdminRoutes } from './config/publicAdminRoutes';


export const AppRouter = () => {
  const router = createBrowserRouter([

    // Public routes
    ...publicRoutes.map(route => ({
      path: route.path,
      element: route.element,
    })),

    ...publicAdminRoutes.map(route => ({
      path: route.path,
      element: route.element,
    })),



    // Customer routes with layout
    {
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
        redirectTo: '/login'
      })),
    },


    // Admin routes with layout
    {
      path: adminMainRoutes,
      element: (
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: adminRoutes.map(route => ({
        path: route.path.replace('/', ''),
        element: route.element,
      })),
    },





  ]);

  return <RouterProvider router={router} />;
};