import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TelaReprovadoEntregador() {
  const reenviarDados = () => {
    // lógica para reenviar dados
    console.log('Reenviar dados acionado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Reprovado</Text>
      <Text style={styles.text}>
        Seu cadastro como entregador foi reprovado. Verifique seus dados e tente novamente.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#b00020',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
