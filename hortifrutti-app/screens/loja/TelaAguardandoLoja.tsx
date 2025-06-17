import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaAguardandoLoja() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aguardando Aprovação</Text>
      <Text style={styles.text}>
        Sua loja está sendo analisada. Entraremos em contato assim que ela for aprovada.
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
