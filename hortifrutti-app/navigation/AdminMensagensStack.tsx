// navigation/AdminMensagensStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminChats from '../screens/admin/AdminChats';
import AdminMensagens from '../screens/admin/AdminMensagens';

export type AdminMensagensStackParamList = {
  AdminChats: undefined;
  AdminMensagens: { nome: string };
};

const Stack = createNativeStackNavigator<AdminMensagensStackParamList>();

export default function AdminMensagensStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminChats" component={AdminChats} />
      <Stack.Screen name="AdminMensagens" component={AdminMensagens} />
    </Stack.Navigator>
  );
}
