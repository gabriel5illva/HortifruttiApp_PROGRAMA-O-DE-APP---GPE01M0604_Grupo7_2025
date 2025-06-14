import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/auth/HomeScreen';
import AuthOptionsScreen from '../screens/auth/AuthOptionsScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import AdminLoginScreen from '../screens/auth/AdminLoginScreen';
import RegisterHortifruttiScreen from '../screens/auth/RegisterHortifruttiScreen';
import RegisterEntregadorScreen from '../screens/auth/RegisterEntregadorScreen';

export type AuthStackParamList = {
  Home: undefined;
  AuthOptions: undefined;
  Login: undefined;
  Register: undefined;
  AdminLogin: undefined;
  RegisterHortifrutti: undefined;
  RegisterEntregador: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="AuthOptions" component={AuthOptionsScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
    <Stack.Screen name="RegisterHortifrutti" component={RegisterHortifruttiScreen} />
    <Stack.Screen name="RegisterEntregador" component={RegisterEntregadorScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
