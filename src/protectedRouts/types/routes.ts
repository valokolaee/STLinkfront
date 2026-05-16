import { UserRole } from "./auth";

// types/routes.ts
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  allowedRoles?: UserRole[];
  redirectTo?: string;
  children?: RouteConfig[]; // For nested routes

}