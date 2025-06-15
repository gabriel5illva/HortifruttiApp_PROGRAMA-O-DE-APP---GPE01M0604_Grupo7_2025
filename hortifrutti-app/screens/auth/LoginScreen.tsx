import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext'; // ajuste o caminho se for preciso
import { supabase } from '../../lib/supabase';

const GREEN = '#2ecc71';

export default function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  async function handleEntrar() {
  try {
    console.log('INICIANDO LOGIN');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha });
    if (error || !data?.user) throw error || new Error('Falha no login.');
    const userId = data.user.id;
    console.log('USER AUTH ID:', userId);

    const { data: cliente } = await supabase.from('profiles').select('id').eq('id', userId).single();
    console.log('CLIENTE:', cliente);

    if (cliente) {
      console.log('É CLIENTE!');
      login('cliente');
      return;
    }

     const { data: horti } = await supabase.from('hortifrutis').select('id').eq('id', userId).single();
    console.log('HORTI:', horti);

    if (horti) {
      console.log('É HORTIFRUTI!');
      login('loja');
      return;
    }

    const { data: entregador } = await supabase.from('entregador').select('id').eq('id', userId).single();
    console.log('ENTREGADOR:', entregador);

    if (entregador) {
      console.log('É ENTREGADOR!');
      login('entregador');
      return;
    }

    setError('Tipo de usuário não encontrado!');
    console.log('TIPO DE USUÁRIO NÃO ENCONTRADO');
  } catch (e: any) {
    setError('Erro: ' + (e?.message || JSON.stringify(e)));
    console.log('ERRO NO LOGIN:', e);
  }
}


  return (
    <View style={styles.bgContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{'\u2190'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
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
      <View style={styles.registerRow}>
        <Text style={styles.registerLabel}>Não tem conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
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
