import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { But } from './But';
import { Card } from './Card';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [etanol, setEtanol] = useState('');
  const [resultado, setResultado] = useState (null);

  function verificarVantagem () {
    const precoGasolina = parseFloat(gasolina);
    const precoEtanol = parseFloat(etanol);
    
    const porcentagem = (precoEtanol/precoGasolina)*100;
    
  let recomendacao = '';
  if (precoEtanol<precoGasolina*0.7) {
    recomendacao = 'Etanol';
  } else {
    recomendacao = 'Gasolina';
  }

  setResultado({
    combustivel: recomendacao,
    porcentagem: porcentagem.toFixed(2),
  });
  }


  return (
    <View style={styles.container}>
     
     
      <Text style={styles.txt}>ÁLCOOL OU GASOLINA</Text>
       <Image style={{width: 400, height: 150}}
      source={require('./assets/postodegasolina.png')}
      />
      <Text style={styles.subtxt}>Preço do Etanol (R$):</Text>
      
      <TextInput
      style={styles.input}
      placeholder='Ex: 3.99'
      placeholderTextColor={"#ffffffca"}
      onChangeText={setEtanol}
       value = {etanol}
      />

      <Text style={styles.subtxt}>Preço da Gasolina (R$):</Text>
      
       <TextInput
      style={styles.input}
      placeholder='Ex : 4.98'
      placeholderTextColor={"#ffffffca"}
      onChangeText={setGasolina}
       value = {gasolina}
      />
             <But
      title="Verificar vantagem"
      onPress={verificarVantagem}
      />
        {resultado && (
        <Card
      combustivel = {resultado.combustivel}
      porcentagem = {resultado.porcentagem}
      />
      )}
     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#310d85',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  txt: {
    color:'#ffff',
    fontSize:20,
    fontVariant:'negrito',
    margin: 15,
    fontWeight:'bold',
    
  },
  subtxt: {
    color:'#ffff',
    fontSize:15,
    fontVariant:'negrito',
    textAlign:'left',
  },
   input: {
    fontSize:15,
    alignItems:'center',
    backgroundColor:'#ffffff74',
    margin:5,
    height:25,
    borderColor:'#ffff',
    padding:10,
    borderRadius:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
   },
});
