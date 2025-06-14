import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const GREEN = '#2ecc71';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [promo, setPromo] = useState(false);
  const [error, setError] = useState('');

  function handleRegister() {
    if (!nome || !email || !senha || !confirmarSenha) {
      setError('Preencha todos os campos!');
      return;
    }
    if (senha !== confirmarSenha) {
      setError('As senhas não coincidem!');
      return;
    }
    setError('');
    alert('Cadastro realizado! (aqui você integraria com seu backend)');
    navigation.replace('Login');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f6f6f6' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'\u2190'}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Cadastre-se</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholderTextColor="#ccc"
        />

        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setPromo((v) => !v)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, promo && { backgroundColor: GREEN, borderColor: GREEN }]}>
            {promo && <FontAwesome name="check" size={16} color="#fff" />}
          </View>
          <Text style={styles.checkboxLabel}>Quero receber emails promocionais</Text>
        </TouchableOpacity>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.ouText}>OU</Text>
        <Text style={styles.socialText}>Cadastre-se com</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.iconBox}>
            <FontAwesome name="google" size={28} color={GREEN} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <FontAwesome name="facebook" size={28} color={GREEN} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <FontAwesome name="apple" size={28} color={GREEN} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RegisterHortifrutti')}>
        <Text style={styles.outroCadastro}>Cadastrar como hortifruti</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RegisterEntregador')}>
        <Text style={styles.outroCadastro}>Cadastrar como entregador</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 45,
    backgroundColor: '#f6f6f6',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 47,
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
    marginBottom: 14,
    marginTop: 0,
  },
  input: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 10,
    fontSize: 16,
    color: '#222',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 2,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#bcbcbc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginRight: 8,
  },
  checkboxLabel: {
    color: '#757373',
    fontSize: 14,
  },
  error: {
    color: '#e74c3c',
    marginBottom: 6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ouText: {
    color: '#757373',
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialText: {
    color: '#757373',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 4,
    fontSize: 15,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    marginTop: 4,
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
    marginTop: 6,
    marginBottom: 14,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  outroCadastro: {
    color: '#757373',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '400',
  },
});

