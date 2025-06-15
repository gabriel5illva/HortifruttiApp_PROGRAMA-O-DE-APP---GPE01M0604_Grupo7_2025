import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../../lib/supabase';
import { uploadImageAsync } from '../../lib/supabaseHelpers';

const GREEN = '#2ecc71';

export default function RegisterHortifruttiScreen() {
  const navigation = useNavigation();
  const [cnpj, setCnpj] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);

  async function handleProfileImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });
    if (!result.canceled) setProfileImage(result.assets[0].uri);
  }

  async function handleCoverImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });
    if (!result.canceled) setCoverImage(result.assets[0].uri);
  }

  async function handleRegister() {
  if (!cnpj || !nome || !telefone || !endereco || !email || !senha) {
    alert('Preencha todos os campos!');
    return;
  }
  try {
    // 1. Cria usuário no Auth
    const { data, error } = await supabase.auth.signUp({ email, password: senha });
    if (error || !data?.user) throw error || new Error('Falha ao criar usuário.');
    const userId = data.user.id;

    // 2. Upload das imagens
    let profileUrl = null, coverUrl = null;
    if (profileImage) profileUrl = await uploadImageAsync(profileImage, 'hortifrutis', `profile_${userId}.jpg`);
    if (coverImage) coverUrl = await uploadImageAsync(coverImage, 'hortifrutis', `cover_${userId}.jpg`);

    // 3. Registro na tabela
    const { error: err2 } = await supabase.from('hortifrutis').insert({
      id: userId,
      cnpj,
      telefone,
      endereco,
      profile_image_url: profileUrl,
      cover_image_url: coverUrl,
    });
    if (err2) throw err2;

    alert('Cadastro realizado!');
    navigation.goBack();
  } catch (e: any) {
    alert('Erro no cadastro: ' + (e?.message || JSON.stringify(e)));
  }
}

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#f6f6f6' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>{'\u2190'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Cadastro de Hortifrutti</Text>
        <TextInput style={styles.input} placeholder="CNPJ" value={cnpj} onChangeText={setCnpj} placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Nome fantasia" value={nome} onChangeText={setNome} placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} placeholderTextColor="#ccc" />

        <View style={styles.coverImageArea}>
          <TouchableOpacity style={styles.coverImageButton} onPress={handleCoverImage}>
            {coverImage ? (
              <Image source={{ uri: coverImage }} style={styles.coverImage} />
            ) : (
              <FontAwesome name="camera" size={28} color="#bcbcbc" />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileImageBox} onPress={handleProfileImage}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <FontAwesome name="camera" size={20} color="#bcbcbc" />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar Hortifruti</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  // ... seus estilos
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
