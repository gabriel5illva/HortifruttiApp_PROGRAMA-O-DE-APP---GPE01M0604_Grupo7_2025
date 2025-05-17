import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const pedidosAjuda = [
  { id: '1', titulo: 'Editar Pedido #10234', detalhes: 'Alterar endereço de entrega.' },
  { id: '2', titulo: 'Editar Pedido #10235', detalhes: 'Atualizar status para entregue.' },
];

export default function AdminAjudaScreen() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleExpand = (id: string) => {
    LayoutAnimation.easeInEaseOut();
    setExpanded(prev => (prev === id ? null : id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('EditarPedido')}
      >
        <MaterialIcons name="edit" size={40} color="#2ecc71" />
        <Text style={styles.label}>Editar Pedido</Text>
      </TouchableOpacity>

      <FlatList
        data={pedidosAjuda}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleExpand(item.id)}
            style={styles.notification}
            activeOpacity={1}
          >
            <Text style={styles.title}>{item.titulo}</Text>
            {expanded === item.id && (
              <Text style={styles.details}>{item.detalhes}</Text>
            )}
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    marginTop: 6,
  },
  list: {
    maxHeight: 300,
  },
  notification: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  details: {
    marginTop: 6,
  },
});
