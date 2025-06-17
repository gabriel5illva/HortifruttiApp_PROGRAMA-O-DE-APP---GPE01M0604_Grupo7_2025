import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaAprovadoLoja() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loja Aprovada!</Text>
      <Text style={styles.text}>
        Bem-vindo! Agora você pode começar a usar todas as funcionalidades da plataforma.
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
