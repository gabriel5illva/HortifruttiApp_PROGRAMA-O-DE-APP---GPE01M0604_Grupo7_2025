import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaAguardandoEntregador() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aguardando Aprovação</Text>
      <Text style={styles.text}>
        Seus dados de entregador estão sendo analisados. Em breve entraremos em contato.
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
    backgroundColor: '#fff',
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
