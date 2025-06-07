import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ClienteStackParamList = {
  RastreioCliente: undefined;
  EntregaCliente: undefined;
  Login: undefined;
  Admin:undefined;
};

type RastreioClienteNavigationProp = NativeStackNavigationProp<
  ClienteStackParamList,
  'RastreioCliente'
>;

export default function Entrega(){
    const navigation = useNavigation<RastreioClienteNavigationProp>();
    return(
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("EntregaCliente")}>
            <Ionicons name="chevron-back-outline" size={40} style={styles.icon}/>
            </Pressable>
            <Text style={styles.title}>Rastreio</Text>
            <Image
                    source={{ uri: 'https://cdn.pixabay.com/photo/2019/07/19/09/54/map-4348394_960_720.png' }}
                    style={styles.imagem}
                    resizeMode="contain"
                  />

            <View style={styles.row}>
            <Text style={styles.text}>Tempo Estimado</Text>
            <Text style={styles.value}>20:40</Text>
            </View>
            <View style={styles.card}>
                    <View style={styles.logo} />
                    <View style={styles.infoBlock}>
                      <Text style={styles.subtitle}>Nome do Entregador</Text>
                      <Text style={styles.text}>Veiculo: CG 160</Text>
                      <Text style={styles.text}>Placa: ETG5P89</Text>
                    </View>
                  </View>

            <View style={styles.linha} />

            <View style={styles.row}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.value}>R$ 45,00</Text>
            </View>
            <View style={styles.statusSteps}>
            <View style={styles.step}>
              <View style={[styles.circle, styles.circleActive]} />
              <Text style={styles.stepLabel}>Recebido</Text>
            </View>
            <View style={styles.step}>
              <View style={[styles.circle, styles.circlePending]} />
              <Text style={styles.stepLabel}>A caminho</Text>
            </View>
            <View style={styles.step}>
              <View style={[styles.circle, styles.circleInactive]} />
              <Text style={styles.stepLabel}>Entregue</Text>
            </View>
          </View>


            <View style={styles.button}>
                <Pressable style={styles.infoBlock} onPress={() => navigation.navigate('Admin')}>
                <Text style={styles.title}>Pagar</Text>
                </Pressable>
            </View>
                  
        </View>
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
        fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
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
    fontSize: 15,
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
  fontSize: 15,
  fontFamily: 'Arial',
  color: '#3c3c3c',
},
  card: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 30,
    marginRight: 12,
    alignSelf: 'center',
  },
  button:{
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    marginTop: 3,
    marginBottom: 30,
    width: 300,
    alignSelf: 'center'
  },
  statusSteps: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginHorizontal: 20,
  marginVertical: 20,
},
step: {
  alignItems: 'center',
},
circle: {
  width: 20,
  height: 20,
  borderRadius: 10,
  marginBottom: 6,
},

circleActive: {
  backgroundColor: '#2ecc71', // verde - ativo
},

circlePending: {
  backgroundColor: '#f1c40f', // amarelo - em progresso
},

circleInactive: {
  backgroundColor: '#ccc', // cinza - futuro
},

stepLabel: {
  fontSize: 12,
  color: '#3c3c3c',
  fontFamily: 'Arial',
  textAlign: 'center',
},

});