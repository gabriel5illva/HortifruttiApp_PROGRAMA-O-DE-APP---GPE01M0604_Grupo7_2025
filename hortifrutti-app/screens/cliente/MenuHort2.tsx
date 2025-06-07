import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ClienteStackParamList = {
  MenuHort2: undefined;
  PedidoCliente:undefined;
  ItensCliente: undefined;
};

type MenuHort2NavigationProp = NativeStackNavigationProp<
  ClienteStackParamList,
  'MenuHort2'
>;


const tipos = ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 4', 'Tipo 5'];

const itemList = new Array(4).fill({ name: 'Item 1', price: '$Valor/medida', description: 'Descrição' });

export default function HortifrutiScreen() {
  const [filtroSelecionado, setFiltroSelecionado] = useState('Tipo 1');
  const navigation = useNavigation<MenuHort2NavigationProp>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("ItensCliente")}>
        <Ionicons name="arrow-back" size={24} />
      </Pressable>

      <View style={styles.header}>
        <Text style={styles.storeName}>Nome do hortifruti</Text>
        <Text>Endereço do hortifruti</Text>
        <Text>Tempo de entrega | Taxa de entrega</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>5.0</Text>
          <Ionicons name="call-outline" size={20} />
        </View>

        <View style={styles.tagRow}>
          {tipos.map((tipo, i) => (
            <Pressable
              key={i}
              onPress={() => setFiltroSelecionado(tipo)}
              style={[
                styles.tag,
                filtroSelecionado === tipo && styles.tagAtivo
              ]}
            >
              <Text style={{ color: filtroSelecionado === tipo ? '#fff' : '#000' }}>{tipo}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>ITENS</Text>

      <FlatList
        data={itemList}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Text>{item.description}</Text>
              <View style={styles.counter}>
                <Pressable><Ionicons name="remove" size={20} /></Pressable>
                <Text>1</Text>
                <Pressable><Ionicons name="add" size={20} /></Pressable>
              </View>
            </View>
            <View style={styles.imagePlaceholder} />
          </View>
        )}
      />

      <Pressable style={styles.footerButton} onPress={() => navigation.navigate("PedidoCliente")}>
        <Text style={styles.footerButtonText}>Continuar</Text>
        <Text style={styles.footerButtonText}>$total</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  header: { marginVertical: 10 },
  storeName: { fontWeight: 'bold', fontSize: 16 },
  ratingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  rating: { backgroundColor: '#ccc', padding: 4, borderRadius: 4 },
  tagRow: { flexDirection: 'row', gap: 8, marginTop: 12, flexWrap: 'wrap' },
  tag: { backgroundColor: '#eee', padding: 8, borderRadius: 6 },
  tagAtivo: { backgroundColor: '#666' },
  sectionTitle: { fontWeight: 'bold', fontSize: 18, marginVertical: 8 },
  itemBox: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  counter: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  imagePlaceholder: { width: 40, height: 40, backgroundColor: '#eee', borderRadius: 4 },
  footerButton: {
    backgroundColor: '#666', padding: 16, borderRadius: 8, flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center', marginTop: 16,
  },
  footerButtonText: { color: 'white', fontWeight: 'bold' },
});
