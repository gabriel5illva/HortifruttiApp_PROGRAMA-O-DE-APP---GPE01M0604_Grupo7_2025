import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function AdminPerfil() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('Administrador');
  const [email, setEmail] = useState('admin@email.com');
  const [avatarUri, setAvatarUri] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');

  useEffect(() => {
    (async () => {
      const savedNome = await AsyncStorage.getItem('admin_nome');
      const savedEmail = await AsyncStorage.getItem('admin_email');
      const savedAvatar = await AsyncStorage.getItem('admin_avatar');
      const savedData = await AsyncStorage.getItem('admin_data_cadastro');

      if (savedNome) setNome(savedNome);
      if (savedEmail) setEmail(savedEmail);
      if (savedAvatar) setAvatarUri(savedAvatar);
      if (savedData) setDataCadastro(savedData);
      else {
        const now = new Date().toLocaleDateString('pt-BR');
        await AsyncStorage.setItem('admin_data_cadastro', now);
        setDataCadastro(now);
      }
    })();
  }, []);

  const handleLogoff = () => {
    console.log('Logoff...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={
          avatarUri
            ? { uri: avatarUri }
            : require('../../assets/admin/profile-pic.jpg')
        }
        style={styles.avatar}
      />

      <Text style={styles.name}>{nome}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.date}>Administrador desde: {dataCadastro}</Text>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('EditarPerfil')}
      >
        <Text style={styles.editText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogoff}>
        <Text style={styles.logoutText}>Log Off</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40, backgroundColor: '#fff' },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#eee', marginBottom: 20 },
  name: { fontSize: 18, fontWeight: 'bold' },
  email: { color: 'gray', marginTop: 4 },
  date: { fontSize: 12, marginTop: 12 },
  editButton: {
    backgroundColor: '#bdc3c7',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 30,
  },
  editText: { fontWeight: 'bold' },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 12,
  },
  logoutText: { color: '#fff', fontWeight: 'bold' },
});
