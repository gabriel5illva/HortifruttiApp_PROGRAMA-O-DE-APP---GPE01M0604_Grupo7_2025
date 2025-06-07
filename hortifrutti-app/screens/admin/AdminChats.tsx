import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const mockConversas = [
  { id: '1', nome: 'João', tipo: 'Cliente' },
  { id: '2', nome: 'Mercado Local', tipo: 'Loja' },
  { id: '3', nome: 'Carlos', tipo: 'Entregador' },
  { id: '4', nome: 'Maria', tipo: 'Cliente' },
  { id: '5', nome: 'Ana', tipo: 'Cliente' },
];

export default function AdminChats() {
  const [abaSelecionada, setAbaSelecionada] = useState<'usuarios' | 'admin'>('usuarios');
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: typeof mockConversas[0] }) => (
    <TouchableOpacity
      style={styles.chatCard}
      onPress={() => navigation.navigate('AdminMensagens', {
  screen: 'AdminMensagens',
  params: { nome: item.nome },
})}
    >
      <View style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.chatNome}>{item.nome}</Text>
        <Text style={styles.chatPreview}>Mensagem prévia...</Text>
      </View>
      <Text style={styles.chatTipo}>{item.tipo}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Chats</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            abaSelecionada === 'usuarios' && styles.tabSelected,
          ]}
          onPress={() => setAbaSelecionada('usuarios')}
        >
          <Text style={styles.tabText}>Usuários</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            abaSelecionada === 'admin' && styles.tabSelected,
          ]}
          onPress={() => setAbaSelecionada('admin')}
        >
          <Text style={styles.tabText}>Administradores</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockConversas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  tabSelected: {
    backgroundColor: '#ccc',
  },
  tabText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  chatList: {
    paddingHorizontal: 16,
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 12,
    elevation: 1,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatNome: {
    fontWeight: 'bold',
  },
  chatPreview: {
    color: '#777',
    fontSize: 12,
  },
  chatTipo: {
    fontSize: 10,
    color: '#333',
  },
});
