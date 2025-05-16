import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const RootNavigator = () => {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) return <AuthNavigator />;

  // Aqui você redireciona para o fluxo certo baseado no papel
  switch (role) {
    case 'admin':
      return <></>; // AdminNavigator
    case 'cliente':
      return <></>; // ClienteNavigator

    // fazer outros case (entregador e loja)
    
    default:
      return <></>; // Outros
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
