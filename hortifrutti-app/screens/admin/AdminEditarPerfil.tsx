import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function AdminEditarPerfil() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUri, setAvatarUri] = useState('');

  useEffect(() => {
    (async () => {
      const savedNome = await AsyncStorage.getItem('admin_nome');
      const savedEmail = await AsyncStorage.getItem('admin_email');
      const savedAvatar = await AsyncStorage.getItem('admin_avatar');

      if (savedNome) setNome(savedNome);
      if (savedEmail) setEmail(savedEmail);
      if (savedAvatar) setAvatarUri(savedAvatar);
    })();
  }, []);

  const escolherAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled && result.assets[0].uri) {
      setAvatarUri(result.assets[0].uri);
    }
  };

  const handleSalvar = async () => {
    await AsyncStorage.setItem('admin_nome', nome);
    await AsyncStorage.setItem('admin_email', email);
    await AsyncStorage.setItem('admin_avatar', avatarUri || '');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={escolherAvatar}>
        <Image
          source={
            avatarUri
              ? { uri: avatarUri }
              : require('../../assets/admin/profile-pic.jpg')
          }
          style={styles.avatar}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40, backgroundColor: '#fff' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 30, backgroundColor: '#eee' },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
