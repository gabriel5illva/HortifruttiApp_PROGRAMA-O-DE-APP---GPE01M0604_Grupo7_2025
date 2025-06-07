// navigation/AdminHomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminHome from '../screens/admin/AdminHome';
import HortifrutiListScreen from '../screens/admin/HortifrutiListScreen';
import HortifrutiDetailsScreen from '../screens/admin/HortifrutiDetailsScreen';
import AdminAjudaScreen from '../screens/admin/AdminAjudaScreen';
import EditarPedidoScreen from '../screens/admin/EditarPedidoScreen';
import EntregadorListScreen from '../screens/admin/EntregadorListScreen';
import EntregadorDetailsScreen from '../screens/admin/EntregadorDetailsScreen';
import AdminNotificacoes from '../screens/admin/AdminNotificacoes';
import DetalheNotificacao from '../screens/admin/DetalheNotificacao';
import AdminChats from '../screens/admin/AdminChats';
import AdminMensagens from '../screens/admin/AdminMensagens';
import AdminHistorico from '../screens/admin/AdminHistorico';
import AdminPerfil from '../screens/admin/AdminPerfil';
import AdminEditarPerfil from '../screens/admin/AdminEditarPerfil';

const Stack = createNativeStackNavigator();

export default function AdminHomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="HortifrutiList" component={HortifrutiListScreen} />
      <Stack.Screen name="HortifrutiDetails" component={HortifrutiDetailsScreen} />
      <Stack.Screen name="Ajuda" component={AdminAjudaScreen} />
      <Stack.Screen name="EditarPedido" component={EditarPedidoScreen} />
      <Stack.Screen name="EntregadorList" component={EntregadorListScreen} />
      <Stack.Screen name="EntregadorDetails" component={EntregadorDetailsScreen} />
      <Stack.Screen name="Notificacoes" component={AdminNotificacoes} />
      <Stack.Screen name="DetalheNotificacao" component={DetalheNotificacao} />
      <Stack.Screen name="Chats" component={AdminChats} />
      <Stack.Screen name="Mensagens" component={AdminMensagens} />
      <Stack.Screen name="Historico" component={AdminHistorico} />
      <Stack.Screen name="Perfil" component={AdminPerfil} />
      <Stack.Screen name="EditarPerfil" component={AdminEditarPerfil} />
    </Stack.Navigator>
  );
}
