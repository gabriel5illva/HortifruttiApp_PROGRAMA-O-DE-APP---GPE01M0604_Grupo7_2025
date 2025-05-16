import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AdminNavigator from './navigation/AdminNavigator';


const RootNavigator = () => {
  // Simulação de login como admin, mudar quando for rodar outros fluxos e quando o fluxo de inicio estiver pronto
  const isLoggedIn = true;
  const role = 'admin';

  if (!isLoggedIn) return <AuthNavigator />;

  switch (role) {
    case 'admin':
      return <AdminNavigator />;
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
