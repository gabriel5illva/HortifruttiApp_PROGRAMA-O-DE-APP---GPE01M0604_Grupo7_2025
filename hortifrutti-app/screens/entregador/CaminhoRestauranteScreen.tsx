import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

export default function CaminhoRestauranteScreen({ navigation }: { navigation: any }) {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Mapa_caminho.jpg')} style={styles.image} resizeMode="contain" />
      <Button title="Pedido Recebido" onPress={() => navigation.navigate('CaminhoCliente')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  image: { width: '100%', height: '70%' },
});
