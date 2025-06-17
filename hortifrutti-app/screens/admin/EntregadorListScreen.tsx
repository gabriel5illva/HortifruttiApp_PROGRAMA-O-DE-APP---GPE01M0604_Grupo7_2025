import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView, ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../../lib/supabase';

export default function EntregadorListScreen() {
  const navigation = useNavigation();
  const [entregadores, setEntregadores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchEntregadores() {
    setLoading(true);
    const { data, error } = await supabase
      .from('entregadores')    // ajuste para 'entregador' se for o seu caso
      .select('*')
      .order('created_at', { ascending: false });

    if (error) alert('Erro ao buscar entregadores: ' + error.message);
    else setEntregadores(data || []);
    setLoading(false);
  }

  useEffect(() => { fetchEntregadores(); }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Entregadores</Text>
        <View style={{ width: 28 }} />
      </View>
      {loading
        ? <ActivityIndicator style={{ marginTop: 40 }} size="large" color="#2ecc71" />
        : <FlatList
            data={entregadores}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate('EntregadorDetails', { entregadorId: item.id })}
              >
                <Image
                  source={item.profile_url ? { uri: item.profile_url } : require('../../assets/entregadores/avatar1.png')}
                  style={styles.foto}
                />
                <View>
                  <Text style={styles.name}>{item.nome}</Text>
                  <Text style={{ fontSize: 12, color: '#555' }}>{item.status}</Text>
                </View>
              </TouchableOpacity>
            )}
          />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  list: { padding: 16 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  foto: {
    width: 60, height: 60, borderRadius: 30, marginRight: 12, backgroundColor: '#eee',
  },
  name: { fontSize: 16, fontWeight: 'bold' },
});
