import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const GREEN = '#2ecc71';

export default function RegisterEntregadorScreen() {
  const navigation = useNavigation();
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [motoModelo, setMotoModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [cnhImage, setCnhImage] = useState(null);

  function handleProfileImage() {
    alert('Selecione uma imagem de perfil (em breve)');
  }

  function handleCnhImage() {
    alert('Selecione uma imagem da CNH (em breve)');
  }

  function handleRegister() {
    if (!cpf || !nome || !telefone || !email || !senha || !motoModelo || !placa) {
      alert('Preencha todos os campos!');
      return;
    }
    alert('Cadastro realizado! (aqui você integraria com supabase)');
    navigation.goBack();
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

        <Text style={styles.title}>Cadastro de Entregador</Text>

        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
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
          placeholder="Modelo da moto"
          value={motoModelo}
          onChangeText={setMotoModelo}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Placa"
          value={placa}
          onChangeText={setPlaca}
          placeholderTextColor="#ccc"
        />

        <View style={styles.profileImageArea}>
          <TouchableOpacity style={styles.profileImageBox} onPress={handleProfileImage}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <FontAwesome name="camera" size={26} color="#bcbcbc" />
            )}
          </TouchableOpacity>
          <Text style={styles.labelImage}>Imagem de Perfil</Text>
        </View>

        <View style={styles.cnhImageArea}>
          <TouchableOpacity style={styles.cnhImageBox} onPress={handleCnhImage}>
            {cnhImage ? (
              <Image source={{ uri: cnhImage }} style={styles.cnhImage} />
            ) : (
              <FontAwesome name="camera" size={32} color="#bcbcbc" />
            )}
          </TouchableOpacity>
          <Text style={styles.labelImage}>Imagem da CNH</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar Entregador</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 16,
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
  profileImageArea: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 10,
  },
  profileImageBox: {
    width: 60,
    height: 60,
    backgroundColor: '#ededed',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.3,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  labelImage: {
    marginTop: 5,
    fontSize: 13,
    color: '#757373',
  },
  cnhImageArea: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  cnhImageBox: {
    width: '80%',
    aspectRatio: 1.8,
    backgroundColor: '#ededed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.3,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
  },
  cnhImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: GREEN,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

