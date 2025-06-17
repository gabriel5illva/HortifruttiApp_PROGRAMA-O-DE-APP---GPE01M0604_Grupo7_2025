// AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Role = 'admin' | 'cliente' | 'entregador' | 'loja' | null;

interface AuthContextType {
  isLoggedIn: boolean;
  role: Role;
  userId: string | null;
  login: (role: Role, userId: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<Role>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const login = (userRole: Role, userId: string) => {
    setIsLoggedIn(true);
    setRole(userRole);
    setUserId(userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
