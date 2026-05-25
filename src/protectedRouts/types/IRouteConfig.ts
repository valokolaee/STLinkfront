import { ReactNode } from "react";
import { UserRole } from "./auth";
import { ISideBarItem } from "../../components/layout/sideBar/item";

// types/routes.ts
export interface IRouteConfig {
  path: string;
  element: React.ReactNode;
  allowedRoles?: UserRole[];
  redirectTo?: string;
  children?: IRouteConfig[]; // For nested routes
  sideBar?: ISideBarItem;
}


