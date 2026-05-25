import LoginAdmin from '../../pages/pagesAdmin/LoginAdmin';
import { IRouteConfig } from '../types/IRouteConfig';




// Public routes (accessible to everyone)
export const publicAdminRoutes: IRouteConfig[] = [
  {
    path: '/panel/login',
    element: <LoginAdmin />,
  },

];




    export default publicAdminRoutes.map(route => ({
      path: route.path,
      element: route.element,
    }))
