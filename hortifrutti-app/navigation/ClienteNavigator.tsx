import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntregaCliente from '../screens/cliente/EntregaCliente';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthNavigator from '../screens/auth/LoginScreen';
import AdminNavigator from './AdminNavigator';
import RastreioCliente from '../screens/cliente/RastreioCliente';
import BuscaCliente from '../screens/cliente/BuscaCliente';
import HomeCliente from '../screens/cliente/HomeCliente';
import ItensCliente from '../screens/cliente/ItensCliente';

const Stack = createNativeStackNavigator();

export default function ClienteNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeCliente" component={HomeCliente} />
      <Stack.Screen name="Busca" component={BuscaCliente} />
      <Stack.Screen name="Itens" component={ItensCliente} />
      <Stack.Screen name="EntregaCliente" component={EntregaCliente} />
      <Stack.Screen name="RastreioCliente" component={RastreioCliente} />
      <Stack.Screen name="Login" component={AuthNavigator} />
      <Stack.Screen name="Admin" component={AdminNavigator} />
    </Stack.Navigator>
  );
}