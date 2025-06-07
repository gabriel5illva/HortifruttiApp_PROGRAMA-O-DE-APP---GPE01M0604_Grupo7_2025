import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminPerfil from '../screens/admin/AdminPerfil';
import AdminEditarPerfil from '../screens/admin/AdminEditarPerfil';

const Stack = createNativeStackNavigator();

export default function AdminPerfilStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminPerfil" component={AdminPerfil} />
      <Stack.Screen name="EditarPerfil" component={AdminEditarPerfil} />
    </Stack.Navigator>
  );
}
