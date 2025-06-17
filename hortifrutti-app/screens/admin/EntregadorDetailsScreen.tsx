import React, { useEffect, useState } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Alert, ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../../lib/supabase';

type RouteParams = { entregadorId: string };

export default function EntregadorDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { entregadorId } = route.params;
  const [entregador, setEntregador] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function fetchEntregador() {
    setLoading(true);
    const { data, error } = await supabase.from('entregadores').select('*').eq('id', entregadorId).single();
    if (error) alert('Erro ao buscar entregador: ' + error.message);
    else setEntregador(data);
    setLoading(false);
  }

  useEffect(() => { fetchEntregador(); }, []);

  async function updateStatus(status: 'aprovado' | 'reprovado') {
    const { error } = await supabase.from('entregadores').update({ status }).eq('id', entregadorId);
    if (error) Alert.alert('Erro', error.message);
    else {
      Alert.alert('Sucesso', `Entregador ${status === 'aprovado' ? 'aprovado' : 'reprovado'}!`);
      navigation.goBack();
    }
  }

  async function excluirEntregador() {
    Alert.alert(
      'Excluir',
      'Tem certeza que deseja excluir este entregador?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const { error } = await supabase.from('entregadores').delete().eq('id', entregadorId);
            if (error) Alert.alert('Erro', error.message);
            else {
              Alert.alert('Excluído', 'Entregador removido com sucesso.');
              navigation.goBack();
            }
          },
        },
      ],
      { cancelable: true }
    );
  }

  if (loading || !entregador) return <ActivityIndicator style={{ flex: 1, marginTop: 60 }} size="large" color="#2ecc71" />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Image
          source={entregador.profile_url ? { uri: entregador.profile_url } : require('../../assets/entregadores/avatar1.png')}
          style={styles.foto}
        />
        <Text style={styles.nome}>{entregador.nome}</Text>
        <View style={styles.info}>
          <Text style={styles.label}>Telefone:</Text>
          <Text>{entregador.telefone}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text>{entregador.email}</Text>
          <Text style={styles.label}>CPF:</Text>
          <Text>{entregador.cpf}</Text>
          <Text style={styles.label}>Moto:</Text>
          <Text>{entregador.moto_modelo} | {entregador.placa}</Text>
          <Text style={styles.label}>Status:</Text>
          <Text>{entregador.status}</Text>
          {entregador.cnh_url &&
            <>
              <Text style={styles.label}>CNH:</Text>
              <Image source={{ uri: entregador.cnh_url }} style={{ width: 160, height: 100, borderRadius: 8, marginTop: 8 }} />
            </>
          }
        </View>
        <TouchableOpacity style={styles.aprovar} onPress={() => updateStatus('aprovado')}>
          <Text style={styles.btnText}>Aprovar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reprovar} onPress={() => updateStatus('reprovado')}>
          <Text style={styles.btnText}>Reprovar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.excluir} onPress={excluirEntregador}>
          <Text style={styles.btnText}>Excluir</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { alignItems: 'center', padding: 20 },
  backButton: { alignSelf: 'flex-start', marginBottom: 20 },
  foto: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#eee', marginBottom: 16 },
  nome: { fontSize: 20, fontWeight: 'bold', marginBottom: 24 },
  info: { alignSelf: 'flex-start', width: '100%', marginBottom: 40 },
  label: { fontWeight: 'bold', marginTop: 12 },
  aprovar: { backgroundColor: '#2ecc71', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginBottom: 10 },
  reprovar: { backgroundColor: '#e74c3c', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center' },
  excluir: { backgroundColor: '#555', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center', marginTop: 14 },
  btnText: { color: '#fff', fontWeight: 'bold' },
});
