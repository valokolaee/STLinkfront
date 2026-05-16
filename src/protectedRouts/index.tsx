// router/index.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { CustomerLayout } from './layouts/CustomerLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { publicRoutes } from './config/publicRoutes';
import { customerRoutes } from './config/customerRoutes';
import { adminRoutes } from './config/adminRoutes';
// import { ProtectedRoute } from '../components/ProtectedRoute';
// import { CustomerLayout } from '../layouts/CustomerLayout';
// import { AdminLayout } from '../layouts/AdminLayout';
// import { publicRoutes, customerRoutes, adminRoutes } from '../config/routes';

export const AppRouter = () => {
  const router = createBrowserRouter([

    // // Public routes
    // ...publicRoutes.map(route => ({
    //   path: route.path,
    //   element: route.element,
    // })),

    // Customer routes with layout
    {
      path: '/',
      element: (
        <ProtectedRoute allowedRoles={['customer']}>
          <CustomerLayout />
        </ProtectedRoute>
      ),
      children: customerRoutes.map(route => ({
        path: route.path.replace('/', ''), // Remove leading slash
        element: route.element,
      })),
    },

    // {
    //   path: '/blog',
    //   element: (
    //     <ProtectedRoute allowedRoles={['customer']}>
    //       <CustomerLayout />
    //     </ProtectedRoute>
    //   ),
    //   children: customerRoutes.map(route => ({
    //     path: route.path.replace('/', ''), // Remove leading slash
    //     element: route.element,
    //   })),
    // },

    // // Admin routes with layout
    // {
    //   path: '/admin',
    //   element: (
    //     <ProtectedRoute allowedRoles={['admin']}>
    //       <AdminLayout />
    //     </ProtectedRoute>
    //   ),
    //   children: customerRoutes[0].children?.map(child => ({
    //     path: child.path,
    //     element: child.element,
    //   })),
    // },



    ...publicRoutes,
    ...adminRoutes,
    // ...customerRoutes,
  ]);

  return <RouterProvider router={router} />;
};