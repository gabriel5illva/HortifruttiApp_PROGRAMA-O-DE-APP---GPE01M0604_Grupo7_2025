import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminBottomTabs from './AdminBottomTabs';
import HortifrutiDetailsScreen from '../screens/admin/HortifrutiDetailsScreen';
import HortifrutiListScreen from '../screens/admin/HortifrutiListScreen';
import AdminAjudaScreen from '../screens/admin/AdminAjudaScreen';
import EditarPedidoScreen from '../screens/admin/EditarPedidoScreen';

const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminTabs" component={AdminBottomTabs} />
      <Stack.Screen name="HortifrutiList" component={HortifrutiListScreen} />
      <Stack.Screen name="HortifrutiDetails" component={HortifrutiDetailsScreen} />
      <Stack.Screen name="Ajuda" component={AdminAjudaScreen} />
        <Stack.Screen name="EditarPedido" component={EditarPedidoScreen} />
    </Stack.Navigator>
  );
}
