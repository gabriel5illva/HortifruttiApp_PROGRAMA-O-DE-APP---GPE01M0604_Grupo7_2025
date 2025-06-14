import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ClienteStackParamList = {
  MenuHort2: undefined;
  PedidoCliente:undefined;
  EntregaCliente: undefined;
};

type PedidoClienteNavigationProp = NativeStackNavigationProp<
  ClienteStackParamList,
  'PedidoCliente'
>;

const pedidoItems = [
  { name: 'Item 1', qty: 1, price: '$9.99' },
  { name: 'Item 2', qty: 1, price: '$9.99' },
];

export default function PedidoScreen() {
  const navigation = useNavigation<PedidoClienteNavigationProp>();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("MenuHort2")}>
        <Ionicons name="arrow-back" size={24} />
      </Pressable>
      <Text style={styles.title}>Pedido</Text>

      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Itens</Text>
        <Text style={styles.headerText}>Qtd</Text>
        <Text style={styles.headerText}>Total</Text>
      </View>

      <FlatList
        data={pedidoItems}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text>{item.name}</Text>
            <View style={styles.counter}>
              <Pressable><Ionicons name="remove" size={20} /></Pressable>
              <Text>{item.qty}</Text>
              <Pressable><Ionicons name="add" size={20} /></Pressable>
            </View>
            <Text>{item.price}</Text>
          </View>
        )}
      />

      <Text style={styles.label}>Observação</Text>
      <TextInput style={styles.input} placeholder="..." multiline />

      <View style={styles.footer}>
        <Text style={styles.total}>Subtotal</Text>
        <Text style={styles.total}>$9.99</Text>
      </View>

      <Pressable style={styles.confirmButton} onPress={() => navigation.navigate("EntregaCliente")}>
        <Text style={styles.confirmText}>Ir para entrega</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
  headerText: { fontWeight: 'bold' },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#eee', padding: 8, borderRadius: 6, marginVertical: 4 },
  counter: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  label: { marginTop: 12 },
  input: { backgroundColor: '#eee', borderRadius: 6, padding: 10, height: 80, textAlignVertical: 'top' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  total: { fontWeight: 'bold', fontSize: 16 },
  confirmButton: { backgroundColor: '#666', padding: 16, borderRadius: 8, marginTop: 12, alignItems: 'center' },
  confirmText: { color: 'white', fontWeight: 'bold' },
});
