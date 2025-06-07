import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const notificacoes = [
  { id: '1', titulo: 'Pedido de Ajuda', texto: 'Usuário (cliente) @maria123 solicitou ajuda com o pedido #10235.' },
  { id: '2', titulo: 'Reunião dos admins do sistema', texto: 'Reunião marcada para amanhã às 14h via Zoom. Mais detalhes no link zoom.com/reuniao140625' },
  { id: '3', titulo: 'Pedido de Ajuda', texto: 'Usuário (cliente) @joao123 solicitou ajuda com o pedido #10234.' },
];

export default function AdminNotificacoes() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notificações</Text>

      <FlatList
        data={notificacoes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Home', {
  screen: 'DetalheNotificacao',
  params: { notificacao: item },
})}
          >
            <View>
              <Text style={styles.title}>{item.titulo}</Text>
              <Text style={styles.text}>{item.texto}</Text>
            </View>
            <Text style={styles.radio}>○</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    elevation: 3,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    color: '#555',
  },
  radio: {
    fontSize: 18,
    color: '#aaa',
  },
});
