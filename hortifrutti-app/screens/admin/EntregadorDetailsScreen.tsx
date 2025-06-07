import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

type Entregador = {
  id: string;
  nome: string;
  foto: any;
};

type RouteParams = {
  entregador: Entregador;
};

export default function EntregadorDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { entregador } = route.params;

  const handleAcao = (tipo: 'aprovar' | 'reprovar') => {
    alert(`Entregador ${tipo === 'aprovar' ? 'aprovado' : 'reprovado'} com sucesso.`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>

        <Image source={entregador.foto} style={styles.foto} />
        <Text style={styles.nome}>{entregador.nome}</Text>

        <View style={styles.info}>
          <Text style={styles.label}>Telefone:</Text>
          <Text>(11) 91234-5678</Text>
          <Text style={styles.label}>Habilitação desde:</Text>
          <Text>2019</Text>
          <Text style={styles.label}>Veículo:</Text>
          <Text>Moto</Text>
        </View>

        <TouchableOpacity style={styles.aprovar} onPress={() => handleAcao('aprovar')}>
          <Text style={styles.btnText}>Aprovar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reprovar} onPress={() => handleAcao('reprovar')}>
          <Text style={styles.btnText}>Reprovar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
    marginBottom: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  info: {
    alignSelf: 'flex-start',
    width: '100%',
    marginBottom: 40,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  aprovar: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  reprovar: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
