// navigators/LojaNavigator.js
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaAguardandoLoja from '../screens/loja/TelaAguardandoLoja';
import TelaAprovadoLoja from '../screens/loja/TelaAprovadoLoja';
import TelaReprovadoLoja from '../screens/loja/TelaReprovadoLoja';
import { ActivityIndicator } from 'react-native';
import { supabase } from '../lib/supabase';

const Stack = createNativeStackNavigator();

export default function LojaNavigator({ userId }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      const { data, error } = await supabase
        .from('hortifrutis')
        .select('status')
        .eq('id', userId)
        .single();

      if (error) {
        console.error(error);
      } else {
        setStatus(data?.status || 'pending');
      }

      setLoading(false);
    }

    fetchStatus();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {status === 'pending' && (
        <Stack.Screen name="Aguardando" component={TelaAguardandoLoja} />
      )}
      {status === 'aprovado' && (
        <Stack.Screen name="Principal" component={TelaAprovadoLoja} />
      )}
      {status === 'reprovado' && (
        <Stack.Screen name="Reprovado" component={TelaReprovadoLoja} />
      )}
    </Stack.Navigator>
  );
}
