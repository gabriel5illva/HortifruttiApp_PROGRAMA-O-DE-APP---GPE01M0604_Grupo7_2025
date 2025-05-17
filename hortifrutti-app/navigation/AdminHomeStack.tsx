// navigation/AdminHomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminHome from '../screens/admin/AdminHome';
import HortifrutiListScreen from '../screens/admin/HortifrutiListScreen';

const Stack = createNativeStackNavigator();

export default function AdminHomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="HortifrutiList" component={HortifrutiListScreen} />
    </Stack.Navigator>
  );
}
