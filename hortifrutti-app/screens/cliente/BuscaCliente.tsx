import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ClienteStackParamList = {
  Itens: undefined;
  HomeCliente: undefined;
  Busca:undefined;
};

const productTypes = [
  'Tipo de Produto 1',
  'Tipo de Produto 2',
  'Tipo de Produto 3',
  'Tipo de Produto 4',
  'Tipo de Produto 5',
  'Tipo de Produto 6',
  'Tipo de Produto 7',
  'Tipo de Produto X',
  'Tipo de Produto Y',
  'Tipo de Produto Z',
  '...',
  '...',
  '...',
  '...',
  '...',
];

export default function ProductTypesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ClienteStackParamList>>();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.deliveryToggle}>
          <Text style={styles.deliverySelected}>Delivery</Text>
          <Text style={styles.deliveryUnselected}>Retirar</Text>
        </View>

        <Pressable style={styles.addressRow}>
          <Text style={styles.address}>Linha 1 endereço</Text>
          <Ionicons name="chevron-down" size={16} color="black" />
        </Pressable>
      </View>

      <FlatList
        data={productTypes}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <Pressable style={styles.listItem} onPress={() => navigation.navigate("Itens")}>
            <Text style={styles.listText}>{item}</Text>
            <Ionicons name="chevron-forward" size={16} color="#999" />
          </Pressable>
        )}
        contentContainerStyle={styles.listContainer}
      />

<View style={styles.footer}>
      <Pressable style={styles.footerItem} onPress={() => navigation.navigate('HomeCliente')}>
        <View style={styles.footerIconPlaceholder} />
        <Text>Home</Text>
      </Pressable>
      <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Busca')}>
        <View style={styles.footerIconPlaceholder} />
        <Text>Busca</Text>
      </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  deliveryToggle: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  deliverySelected: {
    fontWeight: 'bold',
  },
  deliveryUnselected: {
    color: '#666',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  listText: {
    fontWeight: '500',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: '#ccc',
    borderRadius: 12,
    marginBottom: 4,
  },
});
