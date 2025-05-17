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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AdminStackParamList } from '../../types/navigation';

type NavigationProps = NativeStackNavigationProp<AdminStackParamList, 'HortifrutiList'>;

const hortifrutiData = [
  {
    id: '1',
    nome: 'Hortifruti Verde Vida',
    logo: require('../../assets/hortifruti/logo1.png'),
  },
  {
    id: '2',
    nome: 'Hortifruti do Bairro',
    logo: require('../../assets/hortifruti/logo2.png'),
  },
  {
    id: '3',
    nome: 'Natural e Fresco',
    logo: require('../../assets/hortifruti/logo3.png'),
  },
  {
    id: '4',
    nome: 'Saúde em Casa',
    logo: require('../../assets/hortifruti/logo4.png'),
  },
  {
    id: '5',
    nome: 'HortiBom',
    logo: require('../../assets/hortifruti/logo5.png'),
  },
  {
    id: '6',
    nome: 'Viva Verde',
    logo: require('../../assets/hortifruti/logo6.png'),
  },
];

export default function HortifrutiListScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Hortifruti</Text>
        <View style={{ width: 28 }} />
      </View>

      <FlatList
        data={hortifrutiData}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('HortifrutiDetails', { hortifruti: item })}
          >
            <Image source={item.logo} style={styles.logo} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  item: {
    alignItems: 'center',
    margin: 10,
    width: '28%',
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 6,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
  },
});
