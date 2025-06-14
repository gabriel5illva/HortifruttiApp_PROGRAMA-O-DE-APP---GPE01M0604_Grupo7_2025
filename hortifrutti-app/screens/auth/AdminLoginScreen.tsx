import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

const GREEN = '#2ecc71';

export default function AdminLoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [adminId, setAdminId] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  function handleEntrar() {
    if (adminId.length !== 9) {
      setError('O número/ID deve ter 9 dígitos.');
      return;
    }
    if (!senha) {
      setError('Digite a senha.');
      return;
    }
    setError('');
    login('admin'); // Fluxo do admin será exibido pelo seu RootNavigator
  }

  return (
    <View style={styles.bgContainer}>
      {/* Seta de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{'\u2190'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Login Administrador</Text>

      <TextInput
        style={styles.input}
        placeholder="Número/ID (9 dígitos)"
        value={adminId}
        onChangeText={text => setAdminId(text.replace(/[^0-9]/g, '').slice(0, 9))}
        keyboardType="numeric"
        maxLength={9}
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#ccc"
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleEntrar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 26,
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
    marginBottom: 15,
    fontSize: 16,
    color: '#222',
  },
  error: {
    color: '#e74c3c',
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: GREEN,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    marginTop: 6,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
