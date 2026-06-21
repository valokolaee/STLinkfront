import LoginAdmin from '../../pages/pagesAdmin/LoginAdmin';
import { IRouteConfig } from '../types/IRouteConfig';


export const publicAdminRoutes: IRouteConfig[] = [

  {
    path: '/panel/login',
    element: <LoginAdmin />,
  },

  {
    path: '/panel',
    element: <LoginAdmin />,
  },

];


    export default publicAdminRoutes.map(route => ({
      path: route.path,
      element: route.element,
    }))
