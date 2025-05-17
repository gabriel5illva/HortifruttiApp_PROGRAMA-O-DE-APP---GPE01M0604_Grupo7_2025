import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/AuthContext';
import AuthNavigator from './navigation/AuthNavigator';
import AdminNavigator from './navigation/AdminBottomTabs';
import ClienteNavigator from './navigation/ClienteNavigator'; //quando vocês codarem esse arquivo o erro desaparece
import EntregadorNavigator from './navigation/EntregadorNavigator'; //quando vocês codarem esse arquivo o erro desaparece
import LojaNavigator from './navigation/LojaNavigator'; //quando vocês codarem esse arquivo o erro desaparece

//VOCÊS TEM QUE MUDAR AQUI PARA O FLUXO QUE VOCÊS ESTÃO TESTANDO
const RootNavigator = () => {
  const isLoggedIn = true; // deixa true mesmo
  const role = 'admin'; //TROQUEM AQUI PARA O FLUXO QUE VOCÊS ESTÃO TESTANDO, são eles: 'admin', 'cliente', 'entregador' e 'loja'

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
