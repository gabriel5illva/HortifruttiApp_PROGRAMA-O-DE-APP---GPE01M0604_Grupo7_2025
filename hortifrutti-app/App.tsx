import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // IMPORTA O useAuth
import AuthNavigator from './navigation/AuthNavigator';
import AdminNavigator from './navigation/AdminNavigator'; // Troquei para AdminNavigator
import ClienteNavigator from './navigation/ClienteNavigator';
import EntregadorNavigator from './navigation/EntregadorNavigator';
import LojaNavigator from './navigation/LojaNavigator';

const RootNavigator = () => {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) return <AuthNavigator />;

  switch (role) {
    case 'admin':
      return <AdminNavigator />;
    case 'cliente':
      return <ClienteNavigator />;
    case 'entregador':
      return <EntregadorNavigator />;
    case 'loja':
      return <LojaNavigator />;
    default:
      return <AuthNavigator />;
  }
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
