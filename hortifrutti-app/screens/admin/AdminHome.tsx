import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const updates = [
  'Sistema atualizado por Fulano 1 em 15/04/2025 – melhorias de segurança implementadas via testes.',
  'Correção de bug na tela de login por Fulano 2 em 03/05/2025.',
  'Nova versão da LGPD em 12/05/2025. A LGPD é uma legislação...',
  'Ajustes visuais nas telas de entregador feitos por Fulano 3.',
  'Adição do botão de rastreio em pedidos entregue por Fulano 4.',
];

const AdminHome = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handlePressItem = (index: number) => {
    LayoutAnimation.easeInEaseOut();
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Últimas atualizações do sistema</Text>

      <FlatList
        data={updates}
        style={styles.flatList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => handlePressItem(index)}
            style={styles.notification}
            activeOpacity={0.8}
          >
            <Text numberOfLines={expandedIndex === index ? undefined : 1}>
              {String(item)}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.actions}>
        <ActionButton label="Cadastro de Hortifruti" icon="store" />
        <ActionButton label="Cadastro de Entregador" icon="delivery-dining" />
        <ActionButton label="Ajuda" icon="help-outline" />
      </View>
    </SafeAreaView>
  );
};

const ActionButton = ({
  label,
  icon,
}: {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={{ alignItems: 'center' }}>
      <MaterialIcons name={icon} size={40} color="#2ecc71" />
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  flatList: {
    maxHeight: 210,
    marginBottom: 24,
  },
  notification: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  actionButton: {
    alignItems: 'center',
    width: 90,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
});

export default AdminHome;
