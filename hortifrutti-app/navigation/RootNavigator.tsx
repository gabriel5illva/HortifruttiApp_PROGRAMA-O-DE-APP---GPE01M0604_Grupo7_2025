// navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AdminNavigator from './AdminNavigator';
import ClienteNavigator from './ClienteNavigator';
import EntregadorNavigator from './EntregadorNavigator';// Se não tiver, pode comentar/ajustar
import { useAuth } from '../contexts/AuthContext';

export default function RootNavigator() {
  const { isLoggedIn, role } = useAuth();

  let Navigator = <AuthNavigator />;

  if (isLoggedIn && role === 'admin') {
    Navigator = <AdminNavigator />;
  } else if (isLoggedIn && role === 'cliente') {
    Navigator = <ClienteNavigator />;
  } else if (isLoggedIn && role === 'entregador') {
    Navigator = <EntregadorNavigator />;
  } else if (isLoggedIn && role === 'loja') {
    Navigator = <LojaNavigator />;
  }

  console.log('RootNavigator - isLoggedIn:', isLoggedIn, 'role:', role);

  return (
    <NavigationContainer>
      {Navigator}
    </NavigationContainer>
  );
}
