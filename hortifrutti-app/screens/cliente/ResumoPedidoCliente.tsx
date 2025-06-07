import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const OrderSummaryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#444" />
        <Text style={styles.headerText}>Pedido #999999</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Nome do Hortifruti</Text>

        <Text style={styles.subTitle}>Itens do pedido</Text>
        <Text>• Item 1    1    $9.99</Text>
        <Text>• Item 2    1    $9.99</Text>
        <Text>• Item X    Y    $Z.ZZ</Text>

        <Text style={styles.subTitle}>Total:</Text>
        <Text style={styles.subTitle}>Forma de pagamento:</Text>

        <Text style={styles.subTitle}>Observações</Text>
        <Text>• Observação 1</Text>
        <Text>• Observação 2</Text>
        <Text>• Observação X</Text>

        <Text style={styles.subTitle}>Endereço de Entrega</Text>
        <Text>📍 R xxx, Q xxx, L xxx</Text>
      </View>

      <Pressable style={[styles.button, { backgroundColor: '#ccc' }]}>
        <Text style={styles.buttonText}>Continuar</Text>
      </Pressable>

      <Pressable style={[styles.button, { backgroundColor: '#bbb' }]}>
        <Text style={styles.buttonText}>Cancelar Pedido</Text>
      </Pressable>
    </View>
  );
};

export default OrderSummaryScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  headerText: { fontSize: 16, fontWeight: 'bold', marginLeft: 10, color: '#444' },
  card: {
    backgroundColor: 'white', padding: 15, borderRadius: 8, elevation: 2, marginBottom: 20,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  subTitle: { marginTop: 10, fontWeight: '600' },
  button: {
    padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 10,
  },
  buttonText: { fontWeight: 'bold', color: '#444' },
});
