import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntregaCliente from '../screens/cliente/EntregaCliente';
import LoginScreen from '../screens/auth/LoginScreen';
import AdminNavigator from './AdminNavigator';
import RastreioCliente from '../screens/cliente/RastreioCliente';
import BuscaCliente from '../screens/cliente/BuscaCliente';
import HomeCliente from '../screens/cliente/HomeCliente';
import ItensCliente from '../screens/cliente/ItensCliente';
import MenuHort2 from '../screens/cliente/MenuHort2Cliente';
import PagamentoCliente from '../screens/cliente/PagamentoCliente';
import PagAprovadoCliente from '../screens/cliente/PagAprovadoCliente';
import PedidoCliente from '../screens/cliente/PedidoCliente';
import ResumoPedidoCliente from '../screens/cliente/ResumoPedidoCliente';


const Stack = createNativeStackNavigator();

export default function ClienteNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeCliente" component={HomeCliente} />
      <Stack.Screen name="BuscaCliente" component={BuscaCliente} />
      <Stack.Screen name="RastreioCliente" component={RastreioCliente} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Admin" component={AdminNavigator} />
      <Stack.Screen name="ResumoPedidoCliente" component={ResumoPedidoCliente} />
      <Stack.Screen name="PedidoCliente" component={PedidoCliente} />
      <Stack.Screen name="PagamentoAprovado" component={PagAprovadoCliente} />
      <Stack.Screen name="Pagamento" component={PagamentoCliente} />
      <Stack.Screen name="MenuHort2" component={MenuHort2} />
      <Stack.Screen name="EntregaCliente" component={EntregaCliente} />
      <Stack.Screen name="ItensCliente" component={ItensCliente} />
    </Stack.Navigator>
  );
}