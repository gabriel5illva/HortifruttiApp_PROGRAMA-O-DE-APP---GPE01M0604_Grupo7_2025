import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ClienteStackParamList = {
  Busca: undefined;
  HomeCliente: undefined;
  Itens: undefined;
};

export default function ProductCategoryScreen() {
  const filters = ['⇅', 'Orgânicos', 'Promoções', 'Melhores', 'Mais vendidos'];
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const hortifrutis = [1, 2];
  const navigation = useNavigation<NativeStackNavigationProp<ClienteStackParamList>>();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Busca')}>
          <Ionicons name="arrow-back" size={24}/>
        </Pressable>
        <Text style={styles.headerTitle}>Tipo de produto 1</Text>
      </View>

      <View style={styles.filtrosContainer}>
        <Text style={styles.filtrosTitle}>Filtros</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((filtro, index) => (
            <View key={index} style={styles.filtro}>
              <Text>{filtro}</Text>
            </View>
          ))}
          <Ionicons name="chevron-forward" size={16} style={styles.filtroSeta} />
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {hortifrutis.map((section, index) => (
          <View key={index} style={styles.section}>

            <View style={styles.hortiHeader}>
            <Pressable onPress={() => navigation.navigate("Itens")}>
              <View style={styles.logoPlaceholder} />
            </Pressable>
              <View>
                <Text style={styles.hortiName}>Nome do hortifruti</Text>
                <Text style={styles.hortiSub}>Tempo de entrega | Taxa de entrega</Text>
              </View>
            </View>

            <FlatList
              horizontal
              data={items}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <View style={styles.itemCard}>
                  <View style={styles.itemImage} />
                  <Text style={styles.itemName}>{item}</Text>
                  <Text style={styles.itemPrice}>$Valor</Text>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ))}
      </ScrollView>

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
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
    gap: 8,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  filtrosContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  filtrosTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  filtro: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  filtroSeta: {
    alignSelf: 'center',
    marginLeft: 4,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  hortiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  logoPlaceholder: {
    width: 32,
    height: 32,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  hortiName: {
    fontWeight: 'bold',
  },
  hortiSub: {
    fontSize: 12,
    color: '#555',
  },
  itemCard: {
    marginRight: 12,
    alignItems: 'center',
    width: 100,
  },
  itemImage: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 4,
  },
  itemName: {
    fontWeight: '500',
  },
  itemPrice: {
    color: '#666',
    fontSize: 12,
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
  footerLabel: {
    fontSize: 12,
  },
});