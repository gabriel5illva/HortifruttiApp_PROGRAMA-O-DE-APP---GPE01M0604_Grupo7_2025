import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AdminStackParamList } from '../../types/navigation';
import { MaterialIcons } from '@expo/vector-icons';

type NavigationProps = NativeStackNavigationProp<AdminStackParamList>;
type RouteProps = RouteProp<AdminStackParamList, 'HortifrutiDetails'>;

export default function HortifrutiDetailsScreen() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();
  const { hortifruti } = route.params;

  const handleAction = (type: 'approved' | 'rejected') => {
    Alert.alert(
      type === 'approved' ? 'Aprovado' : 'Reprovado',
      `Cadastro ${type === 'approved' ? 'aprovado' : 'reprovado'} com sucesso!`,
      [
        {
          text: 'Voltar para a home',
          onPress: () => navigation.navigate('AdminTabs', { screen: 'Home' }),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Cabeçalho com fundo */}
        <View style={styles.headerWrapper}>
          <ImageBackground
            source={require('../../assets/hortifruti/fundo-detalhe.png')}
            style={styles.headerBackground}
            imageStyle={{ resizeMode: 'cover' }}
          >
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={28} color="#fff" />
            </TouchableOpacity>
          </ImageBackground>

          {/* Imagem do hortifruti sobreposta */}
          <Image source={hortifruti.logo} style={styles.logo} resizeMode="cover" />
        </View>

        <Text style={styles.name}>{hortifruti.nome}</Text>

        <View style={styles.info}>
          <Text style={styles.label}>CNPJ:</Text>
          <Text>00.000.000/0001-00</Text>
          <Text style={styles.label}>Endereço:</Text>
          <Text>Rua das Frutas, 123 - Centro</Text>
          <Text style={styles.label}>Tempo de Entrega:</Text>
          <Text>Entregas locais em até 24h</Text>
          <Text style={styles.label}>Tipo de produto:</Text>
          <Text>Produtos orgânicos</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonApprove} onPress={() => handleAction('approved')}>
            <Text style={styles.buttonText}>Aprovar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonReject} onPress={() => handleAction('rejected')}>
            <Text style={styles.buttonText}>Reprovar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerBackground: {
    width: '100%',
    height: 80,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: -50,
    zIndex: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 16,
    textAlign: 'center',
  },
  info: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },
  buttonApprove: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonReject: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});