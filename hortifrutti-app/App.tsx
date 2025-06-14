import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Navigators de cada fluxo
import AuthNavigator from './navigation/AuthNavigator';
import AdminNavigator from './navigation/AdminNavigator'; // OU AdminBottomTabs se preferir
import ClienteNavigator from './navigation/ClienteNavigator';
import EntregadorNavigator from './navigation/EntregadorNavigator';

function RootNavigator() {
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
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
