// config/routes.ts
import { adminRoutes } from './adminRoutes';
import { customerRoutes } from './customerRoutes';
import { publicRoutes } from './publicRoutes';

// Combine all routes
export const allRoutes = [
  ...publicRoutes,
  ...customerRoutes,
  ...adminRoutes,
];