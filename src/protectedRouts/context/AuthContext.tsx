// context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../types/auth';
import { useAppSelector } from '../../redux/hooks';
import IUser from '../../interfaces/IUser';

interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const _user=useAppSelector((s)=>s.userSlice)


  useEffect(() => {
    // Check for stored session
    const storedUser = JSON.stringify(_user);//''//localStorage.getItem('user');
    console.log(storedUser);
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Implement your login logic here
    // This is just a mock example
    // const mockUser: IUser = {
    //   id: '1',
    //   email,
    //   role: email.includes('admin') ? 'admin' : 'customer',
    //   name: email.includes('admin') ? 'Admin User' : 'Customer User',
    // };

    setUser(_user);
    localStorage.setItem('user', JSON.stringify(_user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

