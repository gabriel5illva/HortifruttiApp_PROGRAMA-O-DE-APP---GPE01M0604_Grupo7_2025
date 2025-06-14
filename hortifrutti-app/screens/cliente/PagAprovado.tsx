import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ClienteStackParamList = {
  EntregaCliente: undefined;
  PagamentoAprovado: undefined;
  RastreioCliente: undefined;
  Pagamento: undefined;
};

type PagamentoAprovadoNavigationProp = NativeStackNavigationProp<
  ClienteStackParamList,
  'PagamentoAprovado'
>;



const PaymentApprovedScreen = () => {
  const navigation = useNavigation<PagamentoAprovadoNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido aprovado</Text>
      <View style={styles.placeholder} />
      <Text style={styles.title}>Pagamento aprovado</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("RastreioCliente")}>
        <Text style={styles.buttonText}>Acompanhar entrega</Text>
      </Pressable>
    </View>
  );
};

export default PaymentApprovedScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#444', marginVertical: 10 },
  placeholder: { width: 60, height: 60, backgroundColor: '#ccc', marginVertical: 10 },
  button: {
    marginTop: 30, backgroundColor: '#666', padding: 12, borderRadius: 8, width: '80%', alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
