import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>ALCOOL OU GASOLINA</Text>
      <Text style={styles.subtxt}>Preço do Etanol (R$):</Text>
      <TextInput
      style={styles.input}
      placeholder='Gasolina'
      placeholderTextColor={"#ffff"}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#310d85',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color:'#ffff',
    fontSize:20,
    fontVariant:'negrito',
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
   },
});
