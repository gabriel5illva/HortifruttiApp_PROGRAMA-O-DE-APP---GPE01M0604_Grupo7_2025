import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView, ActivityIndicator, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../../lib/supabase';

export default function HortifrutiListScreen() {
  const navigation = useNavigation();
  const [hortifrutiList, setHortifrutiList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Listar
  async function fetchHortifrutis() {
    setLoading(true);
    const { data, error } = await supabase.from('hortifrutis').select('*').order('created_at', { ascending: false });
    if (!error) setHortifrutiList(data ?? []);
    setLoading(false);
  }

  // Deletar
  async function handleDelete(id: string) {
    Alert.alert(
      'Excluir hortifruti',
      'Tem certeza que deseja excluir?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const { error } = await supabase.from('hortifrutis').delete().eq('id', id);
            if (!error) {
              setHortifrutiList(hortifrutiList.filter(item => item.id !== id));
              Alert.alert('Excluído!', 'Hortifruti removido com sucesso.');
            } else {
              Alert.alert('Erro', error.message || 'Erro ao excluir.');
            }
          }
        }
      ]
    );
  }

  useEffect(() => {
    fetchHortifrutis();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Hortifruti</Text>
        <View style={{ width: 28 }} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#2ecc71" style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={hortifrutiList}
          numColumns={3}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center', margin: 8 }}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate('HortifrutiDetails', { hortifruti: item })}
              >
                <Image
                  source={item.profile_image_url ? { uri: item.profile_image_url } : require('../../assets/hortifruti/logo1.png')}
                  style={styles.logo}
                />
                <Text style={styles.name} numberOfLines={2}>{item.nome}</Text>
                <Text style={[styles.status, getStatusStyle(item.status)]}>
                  {item.status === 'aprovado' ? 'Aprovado'
                    : item.status === 'reprovado' ? 'Reprovado'
                    : 'Pendente'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
                <MaterialIcons name="delete" size={18} color="#e74c3c" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

function getStatusStyle(status?: string) {
  if (status === 'aprovado') return { color: '#2ecc71' };
  if (status === 'reprovado') return { color: '#e74c3c' };
  return { color: '#999' };
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  list: { paddingHorizontal: 10, paddingTop: 10 },
  item: {
    alignItems: 'center',
    margin: 10,
    width: 100,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: 4,
  },
  logo: {
    width: 70, height: 70, borderRadius: 10, marginBottom: 6, backgroundColor: '#eee',
  },
  name: { fontSize: 12, textAlign: 'center' },
  status: { fontSize: 12, marginTop: 4 },
  deleteBtn: { marginTop: 4, alignItems: 'center' },
});
