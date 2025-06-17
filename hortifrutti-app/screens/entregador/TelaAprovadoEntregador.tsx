import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaAprovadoEntregador() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aprovado como Entregador!</Text>
      <Text style={styles.text}>
        Bem-vindo! Agora você pode aceitar entregas e começar a trabalhar.
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
    backgroundColor: '#f0fff0',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
