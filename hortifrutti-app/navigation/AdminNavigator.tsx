import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminBottomTabs from './AdminBottomTabs';
import HortifrutiDetailsScreen from '../screens/admin/HortifrutiDetailsScreen';
import HortifrutiListScreen from '../screens/admin/HortifrutiListScreen';
import AdminAjudaScreen from '../screens/admin/AdminAjudaScreen';
import EditarPedidoScreen from '../screens/admin/EditarPedidoScreen';
import EntregadorDetailsScreen from '../screens/admin/EntregadorDetailsScreen';
import AdminNotificacoes from '../screens/admin/AdminNotificacoes';
import DetalheNotificacao from '../screens/admin/DetalheNotificacao';
import AdminChats from '../screens/admin/AdminChats';
import AdminMensagens from '../screens/admin/AdminMensagens';
import AdminPerfil from '../screens/admin/AdminPerfil';
import AdminEditarPerfil from '../screens/admin/AdminEditarPerfil';

const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminTabs" component={AdminBottomTabs} />
      <Stack.Screen name="HortifrutiList" component={HortifrutiListScreen} />
      <Stack.Screen name="HortifrutiDetails" component={HortifrutiDetailsScreen} />
      <Stack.Screen name="Ajuda" component={AdminAjudaScreen} />
        <Stack.Screen name="EditarPedido" component={EditarPedidoScreen} />
        <Stack.Screen name="EntregadorDetails" component={EntregadorDetailsScreen} />
        <Stack.Screen name="Notificacoes" component={AdminNotificacoes} />
        <Stack.Screen name="DetalheNotificacao" component={DetalheNotificacao} />
        <Stack.Screen name="Chats" component={AdminChats} />
        <Stack.Screen name="Mensagens" component={AdminMensagens} />
        <Stack.Screen name="Perfil" component={AdminPerfil} />
        <Stack.Screen name="EditarPerfil" component={AdminEditarPerfil} />
    </Stack.Navigator>
  );
}
