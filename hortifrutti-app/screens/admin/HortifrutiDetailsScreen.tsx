import React, { useState } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, Alert, TextInput,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../../lib/supabase';

export default function HortifrutiDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { hortifruti } = route.params || {};

  const [nome, setNome] = useState(hortifruti?.nome ?? '');
  const [cnpj, setCnpj] = useState(hortifruti?.cnpj ?? '');
  const [telefone, setTelefone] = useState(hortifruti?.telefone ?? '');
  const [endereco, setEndereco] = useState(hortifruti?.endereco ?? '');
  const [saving, setSaving] = useState(false);

  if (!hortifruti) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Erro: Hortifruti não informado!</Text>
      </View>
    );
  }

  // Atualizar status
  async function handleStatus(status: 'aprovado' | 'reprovado') {
    setSaving(true);
    const { error } = await supabase.from('hortifrutis')
      .update({ status })
      .eq('id', hortifruti.id);
    setSaving(false);
    if (!error) {
      Alert.alert('Sucesso', `Cadastro ${status}!`);
      navigation.goBack();
    } else {
      Alert.alert('Erro', error.message);
    }
  }

  // Editar info básica
  async function handleEdit() {
    setSaving(true);
    const { error } = await supabase.from('hortifrutis')
      .update({ nome, cnpj, telefone, endereco })
      .eq('id', hortifruti.id);
    setSaving(false);
    if (!error) {
      Alert.alert('Editado!', 'Dados alterados.');
      navigation.goBack();
    } else {
      Alert.alert('Erro', error.message);
    }
  }

  // Excluir (extra: botão se quiser)
  async function handleDelete() {
    Alert.alert(
      'Excluir hortifruti',
      'Tem certeza?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            setSaving(true);
            const { error } = await supabase.from('hortifrutis').delete().eq('id', hortifruti.id);
            setSaving(false);
            if (!error) {
              Alert.alert('Excluído!', 'Hortifruti removido.');
              navigation.goBack();
            } else {
              Alert.alert('Erro', error.message);
            }
          }
        }
      ]
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerWrapper}>
          <ImageBackground
            source={require('../../assets/hortifruti/fundo-detalhe.png')}
            style={styles.headerBackground}
            imageStyle={{ resizeMode: 'cover' }}
          >
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={28} color="#fff" />
            </TouchableOpacity>
          </ImageBackground>
          <Image
            source={hortifruti.profile_image_url ? { uri: hortifruti.profile_image_url } : require('../../assets/hortifruti/logo1.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        {/* Editáveis */}
        <TextInput style={styles.editInput} value={nome} onChangeText={setNome} placeholder="Nome" />
        <TextInput style={styles.editInput} value={cnpj} onChangeText={setCnpj} placeholder="CNPJ" />
        <TextInput style={styles.editInput} value={telefone} onChangeText={setTelefone} placeholder="Telefone" />
        <TextInput style={styles.editInput} value={endereco} onChangeText={setEndereco} placeholder="Endereço" />

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonApprove} onPress={() => handleStatus('aprovado')} disabled={saving}>
            <Text style={styles.buttonText}>Aprovar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonReject} onPress={() => handleStatus('reprovado')} disabled={saving}>
            <Text style={styles.buttonText}>Reprovar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEdit} onPress={handleEdit} disabled={saving}>
            <Text style={styles.buttonText}>Salvar edição</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDelete} onPress={handleDelete} disabled={saving}>
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scroll: { alignItems: 'center', paddingBottom: 40 },
  headerWrapper: {
    width: '100%', backgroundColor: '#fff', alignItems: 'center', marginBottom: 60,
  },
  headerBackground: { width: '100%', height: 80 },
  backButton: { position: 'absolute', top: 16, left: 16, zIndex: 10 },
  logo: {
    width: 100, height: 100, borderRadius: 12, backgroundColor: '#eee',
    position: 'absolute', bottom: -50, zIndex: 5,
  },
  editInput: {
    width: '90%',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  buttons: { width: '100%', alignItems: 'center', gap: 8, marginTop: 18 },
  buttonApprove: {
    backgroundColor: '#2ecc71', padding: 12, borderRadius: 8, minWidth: 200, alignItems: 'center',
  },
  buttonReject: {
    backgroundColor: '#e74c3c', padding: 12, borderRadius: 8, minWidth: 200, alignItems: 'center',
  },
  buttonEdit: {
    backgroundColor: '#3498db', padding: 12, borderRadius: 8, minWidth: 200, alignItems: 'center',
  },
  buttonDelete: {
    backgroundColor: '#aaa', padding: 12, borderRadius: 8, minWidth: 200, alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
