import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AuthOptionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={require('../../assets/hortifruti/horti2.png')}
          style={styles.mainImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.authBox}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Ou</Text>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerButtonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.skipText}>Continuar sem login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  imageArea: {
    flex: 1.3,
    width: '100%',
    minHeight: 240,
    maxHeight: windowHeight * 0.45,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  authBox: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  orText: {
    color: '#444',
    marginVertical: 8,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#a9f5cb',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  skipText: {
    marginTop: 12,
    color: '#6d6d6d',
    fontSize: 15,
    textAlign: 'center',
  },
});
