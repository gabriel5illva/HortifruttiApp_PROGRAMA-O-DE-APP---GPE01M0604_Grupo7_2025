import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function EntregadorMapScreen({ navigation }: { navigation: any }) {

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CaminhoRestaurante')}>
      <Image source={require('../../assets/Mapa_parado.jpg')} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>Toque no mapa para iniciar a entrega</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  image: { width: '100%', height: '70%' },
  text: { marginTop: 20, fontSize: 16, color: '#333' },
});
