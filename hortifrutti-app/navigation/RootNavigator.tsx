import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AdminNavigator from './AdminNavigator';
import ClienteNavigator from './ClienteNavigator';
import EntregadorNavigator from './EntregadorNavigator';
import LojaNavigator from './LojaNavigator';
import { useAuth } from '../contexts/AuthContext';

export default function RootNavigator() {
  const { isLoggedIn, role, userId } = useAuth();

  let Navigator = <AuthNavigator />;

  if (isLoggedIn && role === 'admin') {
    Navigator = <AdminNavigator />;
  } else if (isLoggedIn && role === 'cliente') {
    Navigator = <ClienteNavigator />;
  } else if (isLoggedIn && role === 'entregador') {
    Navigator = <EntregadorNavigator userId={userId} />;
  } else if (isLoggedIn && role === 'loja') {
    Navigator = <LojaNavigator userId={userId} />;
  }

  return (
    <NavigationContainer>
      {Navigator}
    </NavigationContainer>
  );
}
