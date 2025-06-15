import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ClienteNavigator() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Entregador Navigator Placeholder</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
});
