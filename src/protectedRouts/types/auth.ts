// types/auth.ts
export type UserRole ='public'| 'customer' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}


