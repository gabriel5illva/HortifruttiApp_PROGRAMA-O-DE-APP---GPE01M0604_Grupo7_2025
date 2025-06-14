import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ClienteStackParamList = {
  EntregaCliente: undefined;
  PagamentoAprovado: undefined;
  RastreioCliente: undefined;
  Pagamento: undefined;
};

type PagamentoNavigationProp = NativeStackNavigationProp<
  ClienteStackParamList,
  'Pagamento'
>;

const PaymentSelectionScreen = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const options = ['Google pay', 'Apple pay', 'Cartão de crédito/débito', 'Vale-Refeição', 'PIX'];
  const navigation = useNavigation<PagamentoNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("EntregaCliente")}>
        <Ionicons name="arrow-back" size={24} color="#444" />
        </Pressable>
        <Text style={styles.headerText}>Selecione o meio de pagamento</Text>
      </View>

      {options.map((option, index) => (
        <Pressable key={index} style={styles.option} onPress={() => setSelected(option)}>
          <View style={styles.placeholder} />
          <Text style={styles.optionText}>{option}</Text>
          <Ionicons
            name={selected === option ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            color="#444"
          />
        </Pressable>
      ))}

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>$9.99</Text>
        <Ionicons name="chevron-forward" size={16} color="#444" />
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate("PagamentoAprovado")}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </Pressable>
    </View>
  );
};

export default PaymentSelectionScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  headerText: { fontWeight: 'bold', marginLeft: 10, fontSize: 16, color: '#444' },
  option: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  placeholder: { width: 30, height: 30, backgroundColor: '#ccc', marginRight: 10 },
  optionText: { flex: 1, fontSize: 14, color: '#444' },
  totalContainer: {
    flexDirection: 'row', alignItems: 'center', marginVertical: 20, borderTopWidth: 1,
    borderColor: '#ddd', paddingTop: 10,
  },
  totalLabel: { fontWeight: 'bold', fontSize: 16, marginRight: 5 },
  totalValue: { fontWeight: 'bold', fontSize: 16, color: '#444', flex: 1 },
  button: {
    backgroundColor: '#666', padding: 12, borderRadius: 8, alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
