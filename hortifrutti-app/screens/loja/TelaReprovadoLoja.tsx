import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TelaReprovadoLoja() {
  const reenviarDados = () => {
    console.log('Reenviar dados acionado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loja Reprovada ❌</Text>
      <Text style={styles.text}>
        Infelizmente, sua loja não foi aprovada. Verifique os dados e tente novamente.
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Reenviar Dados" onPress={reenviarDados} />
      </View>
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
