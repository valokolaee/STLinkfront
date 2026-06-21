import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRouterList from './AppRouterList';


export const AppRouter = () => {


  const router = createBrowserRouter(AppRouterList);

  return <RouterProvider router={router} />;
};

