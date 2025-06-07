import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AdminMensagens() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nome } = route.params as { nome: string };

  const [mensagens, setMensagens] = useState([
    { id: '1', texto: 'Olá, tudo certo com o pedido?', enviado: true },
    { id: '2', texto: 'Sim', enviado: false },
  ]);
  const [novaMensagem, setNovaMensagem] = useState('');

  const enviarMensagem = () => {
    if (!novaMensagem.trim()) return;
    setMensagens((prev) => [
      ...prev,
      { id: Date.now().toString(), texto: novaMensagem.trim(), enviado: true },
    ]);
    setNovaMensagem('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={28} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{nome}</Text>
        </View>

        <FlatList
          data={mensagens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.balao,
                item.enviado ? styles.balaoEnviado : styles.balaoRecebido,
              ]}
            >
              <Text style={styles.textoBalao}>{item.texto}</Text>
            </View>
          )}
          contentContainerStyle={styles.mensagemContainer}
        />

        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            value={novaMensagem}
            onChangeText={setNovaMensagem}
            placeholder="Digite sua mensagem..."
          />
          <TouchableOpacity onPress={enviarMensagem}>
            <MaterialIcons name="send" size={28} color="#3498db" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  mensagemContainer: {
    padding: 16,
    paddingBottom: 60,
  },
  balao: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
    marginBottom: 10,
  },
  balaoEnviado: {
    backgroundColor: '#e1f5fe',
    alignSelf: 'flex-end',
  },
  balaoRecebido: {
    backgroundColor: '#eeeeee',
    alignSelf: 'flex-start',
  },
  textoBalao: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
});
