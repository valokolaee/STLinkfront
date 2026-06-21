import adminRoutes from './config/adminRoutes';
import customerRoutes from './config/customerRoutes';
import { publicAdminRoutes } from './config/publicAdminRoutes';
import publicRoutes from './config/publicRoutes';


export default
  [
    ...publicRoutes,
    ...publicAdminRoutes,

    // Customer routes with layout
    customerRoutes,

    // Admin routes with layout
    adminRoutes,
  ]
