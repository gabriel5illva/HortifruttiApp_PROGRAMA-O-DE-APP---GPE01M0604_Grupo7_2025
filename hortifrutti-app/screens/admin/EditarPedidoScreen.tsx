import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const pedidosMock: Record<string, { tipo: string; valor: string }> = {
  '10234': { tipo: 'endereco', valor: 'Rua A, 123' },
  '10235': { tipo: 'status', valor: 'em andamento' },
};

export default function EditarPedidoScreen() {
  const navigation = useNavigation();
  const [pedidoId, setPedidoId] = useState('');
  const [pedidoEncontrado, setPedidoEncontrado] = useState<null | { tipo: string; valor: string }>(null);
  const [novoValor, setNovoValor] = useState('');

  const buscarPedido = () => {
    const pedido = pedidosMock[pedidoId.trim()];
    if (pedido) {
      setPedidoEncontrado(pedido);
      setNovoValor(pedido.valor);
    } else {
      Alert.alert('Erro', 'Pedido não encontrado.');
    }
    Keyboard.dismiss();
  };

  const salvarAlteracoes = () => {
    Alert.alert(
      'Sucesso!',
      `${pedidoEncontrado?.tipo === 'endereco' ? 'Endereço' : 'Status'} atualizado com sucesso.`,
      [
        {
          text: 'Voltar para ajuda',
          onPress: () => navigation.navigate('Ajuda'),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Editar Pedido</Text>

      <TextInput
        placeholder="Digite o número do pedido"
        value={pedidoId}
        onChangeText={setPedidoId}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity style={styles.searchButton} onPress={buscarPedido}>
        <Text style={styles.searchText}>Buscar</Text>
      </TouchableOpacity>

      {pedidoEncontrado && (
        <View style={styles.form}>
          {pedidoEncontrado.tipo === 'status' ? (
            <View style={styles.pickerWrapper}>
              <Text style={styles.label}>Status do Pedido:</Text>
              <Picker
                selectedValue={novoValor}
                onValueChange={(itemValue) => setNovoValor(itemValue)}
              >
                <Picker.Item label="Aguardando pagamento" value="Aguardando pagamento" />
                <Picker.Item label="Em andamento" value="Em andamento" />
                <Picker.Item label="Saiu para entrega" value="Saiu para entrega" />
                <Picker.Item label="Entregue" value="Entregue" />
                <Picker.Item label="Cancelado" value="Cancelado" />
              </Picker>
            </View>
          ) : (
            <>
              <Text style={styles.label}>Endereço:</Text>
              <TextInput
                value={novoValor}
                onChangeText={setNovoValor}
                style={styles.input}
              />
            </>
          )}

          <TouchableOpacity style={styles.saveButton} onPress={salvarAlteracoes}>
            <Text style={styles.saveText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  searchButton: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  form: {
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  saveButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
