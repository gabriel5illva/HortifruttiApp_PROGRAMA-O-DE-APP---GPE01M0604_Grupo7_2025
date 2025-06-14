import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';

const GREEN = '#2ecc71';

export default function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleEntrar() {
    login('cliente');
  }

  return (
    <View style={styles.bgContainer}>
      {/* Seta de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{'\u2190'}</Text>
      </TouchableOpacity>

      {/* Título centralizado */}
      <Text style={styles.title}>Login</Text>

      {/* E-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholderTextColor="#ccc"
      />

      {/* Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#ccc"
      />

      {/* Esqueci minha senha */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Ou */}
      <Text style={styles.ouText}>Ou</Text>

      {/* Faça login com */}
      <Text style={styles.socialTitle}>Faça login com</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.iconBox}>
          <FontAwesome name="google" size={32} color={GREEN} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <FontAwesome name="facebook" size={32} color={GREEN} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <FontAwesome name="apple" size={32} color={GREEN} />
        </TouchableOpacity>
      </View>

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.button} onPress={handleEntrar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Cadastro */}
      <View style={styles.registerRow}>
        <Text style={styles.registerLabel}>Não tem conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      {/* Entrar como administrador */}
      <TouchableOpacity style={styles.adminButton} onPress={() => navigation.navigate('AdminLogin')}>
        <Text style={styles.adminLink}>Entrar como administrador</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    left: 18,
    top: 56,
    zIndex: 1,
    padding: 4,
  },
  backIcon: {
    fontSize: 32,
    color: GREEN,
    fontWeight: 'bold',
  },
  title: {
    color: GREEN,
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 28,
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    borderColor: '#ececec',
    borderWidth: 1,
    borderRadius: 9,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 13,
    fontSize: 16,
    color: '#222',
  },
  forgot: {
    color: '#bcbcbc',
    fontSize: 13,
    alignSelf: 'flex-start',
    marginBottom: 22,
    marginLeft: 4,
  },
  ouText: {
    color: GREEN,
    marginVertical: 3,
    fontSize: 16,
    alignSelf: 'center',
  },
  socialTitle: {
    color: GREEN,
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 8,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 22,
    marginTop: 6,
    width: '100%',
  },
  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#cfcfcf',
    borderRadius: 7,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: GREEN,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    marginTop: 2,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 2,
    marginBottom: 12,
  },
  registerLabel: {
    color: GREEN,
    fontSize: 15,
    marginRight: 2,
    fontWeight: '400',
  },
  registerLink: {
    color: GREEN,
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 4,
  },
  adminButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  adminLink: {
    color: GREEN,
    fontSize: 16,
    fontWeight: '400',
  },
});
