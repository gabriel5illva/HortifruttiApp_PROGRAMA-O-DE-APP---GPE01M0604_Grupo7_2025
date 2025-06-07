// screens/admin/AdminHistorico.tsx
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const historicoMock = [
  { id: '1', usuario: '@loja01', tipo: 'Loja', status: 'Concluido' },
  { id: '2', usuario: '@entregador02', tipo: 'Entregador', status: 'Aguardando' },
  { id: '3', usuario: '@loja03', tipo: 'Loja', status: 'Aguardando' },
  { id: '4', usuario: '@entregador04', tipo: 'Entregador', status: 'Não respondido' },
];

export default function AdminHistorico() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Histórico</Text>
        <View style={{ width: 28 }} />
      </View>

      <FlatList
        data={historicoMock}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.usuario}>{item.usuario}</Text>
              <Text>{item.tipo}</Text>
            </View>
            <Text style={styles.status}>Status: {item.status}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 6,
    color: '#555',
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usuario: {
    fontWeight: 'bold',
  },
  status: {
    color: '#666',
    fontSize: 12,
    alignSelf: 'center',
  },
});
