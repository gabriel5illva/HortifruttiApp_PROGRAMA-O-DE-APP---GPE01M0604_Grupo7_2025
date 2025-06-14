import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const imageHeight = windowWidth * 1.1;

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Início</Text>
      
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/hortifruti/fundo-detalhe.png')}
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AuthOptions')}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    color: '#bcbcbc',
    fontSize: 16,
    marginTop: 16,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 24,
    marginTop: 20,
    marginBottom: 16,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  bottomBar: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
