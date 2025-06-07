import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const entregadoresMock = [
  {
    id: '1',
    nome: 'João Silva',
    foto: require('../../assets/entregadores/avatar1.png'),
  },
  {
    id: '2',
    nome: 'Mario Oliveira',
    foto: require('../../assets/entregadores/avatar2.png'),
  },
  {
    id: '3',
    nome: 'Carlos Souza',
    foto: require('../../assets/entregadores/avatar6.png'),
  },
];

export default function EntregadorListScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Entregadores</Text>
        <View style={{ width: 28 }} />
      </View>

      <FlatList
        data={entregadoresMock}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('EntregadorDetails', { entregador: item })}
          >
            <Image source={item.foto} style={styles.foto} />
            <Text style={styles.name}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 16,
  },
});
