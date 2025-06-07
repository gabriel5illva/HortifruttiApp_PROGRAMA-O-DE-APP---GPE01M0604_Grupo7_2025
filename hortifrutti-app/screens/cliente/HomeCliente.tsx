import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ClienteStackParamList = {
  BuscaCliente: undefined;
  HomeCliente: undefined;
  MenuHort2: undefined;
};

export default function HomeCliente() {

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

        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
        <Pressable style={styles.filterBtn}>
          <Ionicons name="filter" size={16} />
        </Pressable>
        {[...Array(4)].map((_, index) => (
          <Pressable key={index} style={styles.filterBtn}>
            <Text>Filtro</Text>
          </Pressable>
        ))}
        <Pressable onPress={() => navigation.navigate("BuscaCliente")}>
          <Ionicons name="chevron-forward" size={16} style={styles.chevronIcon} />
          </Pressable>
      </ScrollView>

      <View style={styles.mainBanner} />

      <View style={styles.miniBanners}>
        {[...Array(3)].map((_, index) => (
          <View key={index} style={styles.miniBanner} />
        ))}
        <Pressable>
          <Text style={styles.verTodas}>Ver todas</Text>
        </Pressable>
      </View>

      <Pressable onPress={() => navigation.navigate("MenuHort2")}>
      <View style={styles.card}>
        
        <View style={styles.imagePlaceholder} />
        <View style={styles.cardInfo}>
          <View style={styles.cardHeader}>
            <Text style={styles.storeName}>Nome do hortifruti</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>5.0</Text>
              <Text style={styles.ratingLabel}>Nota</Text>
            </View>
          </View>
          <Text style={styles.deliveryInfo}>Tempo de entrega | Taxa de entrega</Text>
        </View>
      </View>
      </Pressable>

      <View style={styles.footer}>
      <Pressable style={styles.footerItem} onPress={() => navigation.navigate('HomeCliente')}>
        <View style={styles.footerIconPlaceholder} />
        <Text>Home</Text>
      </Pressable>
      <Pressable style={styles.footerItem} onPress={() => navigation.navigate('BuscaCliente')}>
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
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  deliveryToggle: {
    flexDirection: 'row',
    gap: 8,
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
  filterScroll: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterBtn: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  chevronIcon: {
    alignSelf: 'center',
  },
  mainBanner: {
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 16,
  },
  miniBanners: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  miniBanner: {
    width: 80,
    height: 80,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginRight: 8,
  },
  verTodas: {
    color: '#555',
    marginLeft: 8,
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: '#ddd',
  },
  cardInfo: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  storeName: {
    fontWeight: 'bold',
  },
  rating: {
    alignItems: 'flex-end',
  },
  ratingText: {
    fontWeight: 'bold',
  },
  ratingLabel: {
    fontSize: 10,
  },
  deliveryInfo: {
    color: '#666',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
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
