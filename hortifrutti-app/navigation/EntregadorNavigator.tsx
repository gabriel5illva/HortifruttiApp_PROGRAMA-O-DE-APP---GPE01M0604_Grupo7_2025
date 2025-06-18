import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';
import { supabase } from '../lib/supabase';

import TelaAguardandoEntregador from '../screens/entregador/TelaAguardandoEntregador';
import TelaAprovadoEntregador from '../screens/entregador/TelaAprovadoEntregador';
import TelaReprovadoEntregador from '../screens/entregador/TelaReprovadoEntregador';
import EntregadorMapScreen from '../screens/entregador/EntregadorMapScreen';
import CaminhoRestauranteScreen from '../screens/entregador/CaminhoRestauranteScreen';
import CaminhoClienteScreen from '../screens/entregador/CaminhoClienteScreen';

const Stack = createNativeStackNavigator();

export default function EntregadorNavigator({ userId }) {
  const [status, setStatus] = useState<string>('pendente');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      const { data, error } = await supabase
        .from('entregadores')
        .select('status_aprovacao')
        .eq('id', userId)
        .single();

      if (error) {
        console.error(error);
        setStatus('pendente');
      } else {
        setStatus(data?.status_aprovacao || 'pendente');
      }
      setLoading(false);
    }

    fetchStatus();
  }, [userId]);

  console.log('STATUS:', status);

  if (loading) return <ActivityIndicator size="large" />;

  return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {status === 'pendente' && (
      <Stack.Screen name="AguardandoEntregador" component={TelaAguardandoEntregador} />
    )}
    {status === 'aprovado' && (
      <>
        <Stack.Screen name="AprovadoEntregador" component={TelaAprovadoEntregador} />
        <Stack.Screen name="EntregadorMap" component={EntregadorMapScreen} />
        <Stack.Screen name="CaminhoRestaurante" component={CaminhoRestauranteScreen} />
        <Stack.Screen name="CaminhoCliente" component={CaminhoClienteScreen} />
      </>
    )}
    {status === 'reprovado' && (
      <Stack.Screen name="ReprovadoEntregador" component={TelaReprovadoEntregador} />
    )}
    {/* Fallback */}
    {!['pendente', 'aprovado', 'reprovado'].includes(status) && (
      <Stack.Screen name="AguardandoEntregador" component={TelaAguardandoEntregador} />
    )}
  </Stack.Navigator>
);

}
