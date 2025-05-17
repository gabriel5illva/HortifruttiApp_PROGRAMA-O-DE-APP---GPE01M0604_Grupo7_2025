import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  UIManager,
  Platform,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AdminStackParamList } from '../../types/navigation';

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

type NavigationProps = NativeStackNavigationProp<AdminStackParamList>;

export default function AdminHome() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const navigation = useNavigation<NavigationProps>();

  const handlePressItem = (index: number) => {
    LayoutAnimation.easeInEaseOut();
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.title}>Últimas atualizações do sistema</Text>

        <FlatList
          data={updates}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => handlePressItem(index)}
              style={styles.notification}
              activeOpacity={1}
            >
              <Text numberOfLines={expandedIndex === index ? undefined : 1}>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.push('HortifrutiList')}
          >
            <MaterialIcons name="store" size={40} color="#2ecc71" />
            <Text style={styles.label}>Cadastro de Hortifruti</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="delivery-dining" size={40} color="#2ecc71" />
            <Text style={styles.label}>Cadastro de Entregador</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Ajuda')}
>
            <MaterialIcons name="help-outline" size={40} color="#2ecc71" />
            <Text style={styles.label}>Ajuda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
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
