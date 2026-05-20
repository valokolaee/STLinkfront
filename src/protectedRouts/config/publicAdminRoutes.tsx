import LoginAdmin from '../../pages/pagesAdmin/LoginAdmin';
import { RouteConfig } from '../types/routes';




// Public routes (accessible to everyone)
export const publicAdminRoutes: RouteConfig[] = [
  {
    path: '/panel/login',
    element: <LoginAdmin />,
  },

];


