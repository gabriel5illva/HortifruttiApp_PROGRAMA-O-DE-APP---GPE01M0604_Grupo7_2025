import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Pressable, ScrollView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ClienteStackParamList = {
  EntregaCliente: undefined;
  Login: undefined;
  RastreioCliente: undefined;
  Itens: undefined;
};

type EntregaClienteNavigationProp = NativeStackNavigationProp<
  ClienteStackParamList,
  'EntregaCliente'
>;



export default function EntregaCliente() {
  const navigation = useNavigation<EntregaClienteNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Itens")}>
          <Ionicons name="chevron-back-outline" size={40} style={styles.icon} />
        </Pressable>
            <Text style={styles.title}>Entrega</Text>
            <Image
                    source={{ uri: 'https://cdn.pixabay.com/photo/2019/07/19/09/54/map-4348394_960_720.png' }}
                    style={styles.imagem}
                    resizeMode="contain"
                  />
            <Text style={styles.subtitle}>Endereço de Entrega</Text>
            <Text style={styles.text}>Eixo Monumental - SRPN - Asa Norte, Brasília - DF, 70070-701</Text>

            <View style={styles.linha} />

            <Text style={styles.subtitle}>Pedido</Text>
            <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.value}>R$ 27,00</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>Entrega</Text>
            <Text style={styles.value}>R$ 5,00</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>Gorjeta</Text>
            <Text style={styles.value}>R$ 3,00</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>Taxa de Serviço</Text>
            <Text style={styles.value}>R$ 10,00</Text>
            </View>

            <View style={styles.linha} />

            <View style={styles.row}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.value}>R$ 45,00</Text>
            </View>

            <View style={styles.card}>
                    <Pressable style={styles.infoBlock} onPress={() => navigation.navigate('RastreioCliente')}>
                      <Text style={styles.title}>Pagar</Text>
                    </Pressable>
                  </View>

            
                  
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    title:{
       textAlign: "center",
        fontSize: 45,
        fontFamily: "Arial"
    },
    subtitle:{
        marginLeft: 20,
        marginBottom: 7,
        textAlign: "left",
        fontSize: 15,
        fontFamily: "Arial"
    },

     imagem: {
    width: 600,
    height: 300,
    marginBottom: 5,
    alignSelf: 'center',
  },
  icon:{
    alignSelf: 'flex-start',
    marginTop: 0,
    marginBottom: 7,
    marginLeft: 10,
  },
  text:{
    marginLeft: 15,
    marginBottom: 7,
    textAlign:"left",
    fontSize: 12,
    fontFamily:'Arial',
    color: "#3c3c3c",
  },
  linha: {
  borderBottomColor: '#000',
  borderBottomWidth: 1,
  marginVertical: 15,
  marginHorizontal: 20,
},
  row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 10,
  marginBottom: 7,
},
value: {
  fontSize: 12,
  fontFamily: 'Arial',
  color: '#3c3c3c',
},
  card: {
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    marginTop: 7,
    marginBottom: 30,
    width: 300,
    alignSelf: 'center'
  },
  infoBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});