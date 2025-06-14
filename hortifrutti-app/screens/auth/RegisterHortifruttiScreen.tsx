import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const GREEN = '#2ecc71';

export default function RegisterHortifruttiScreen() {
  const navigation = useNavigation();
  // Campos do formulário
  const [cnpj, setCnpj] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Futuramente: imagens
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  function handleProfileImage() {
    // Em breve: usar ImagePicker ou upload para supabase
    alert('Selecione uma imagem de perfil (em breve)');
  }

  function handleCoverImage() {
    // Em breve: usar ImagePicker ou upload para supabase
    alert('Selecione uma imagem de capa (em breve)');
  }

  function handleRegister() {
    if (!cnpj || !nome || !telefone || !endereco || !email || !senha) {
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
        {/* Seta de voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'\u2190'}</Text>
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.title}>Cadastro de Hortifrutti</Text>

        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={setCnpj}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Nome fantasia"
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
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
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

        {/* Área da imagem de capa */}
        <View style={styles.coverImageArea}>
          <TouchableOpacity style={styles.coverImageButton} onPress={handleCoverImage}>
            {coverImage ? (
              <Image source={{ uri: coverImage }} style={styles.coverImage} />
            ) : (
              <FontAwesome name="camera" size={28} color="#bcbcbc" />
            )}
          </TouchableOpacity>
          {/* Quadrado para imagem de perfil sobreposto */}
          <TouchableOpacity style={styles.profileImageBox} onPress={handleProfileImage}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <FontAwesome name="camera" size={20} color="#bcbcbc" />
            )}
          </TouchableOpacity>
        </View>

        {/* Botão */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar Hortifruti</Text>
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
  coverImageArea: {
    width: '100%',
    minHeight: 80,
    backgroundColor: '#ededed',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 10,
    position: 'relative',
  },
  coverImageButton: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: 70,
    borderRadius: 7,
  },
  profileImageBox: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    position: 'absolute',
    left: 24,
    bottom: -22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ededed',
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 7,
  },
  button: {
    backgroundColor: GREEN,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
    marginTop: 38,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

