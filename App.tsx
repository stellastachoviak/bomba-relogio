import { StatusBar } from 'expo-status-bar';
import{StyleSheet, View, Text, Image, Button, TouchableOpacity, Alert} from 'react-native';
import Card from './Componentes/Card';
import Header from './Componentes/Header';

export default function App() {
  const handleButtonPress= ()=>{
    Alert.alert('Botão foi Pressionado','Você clicou no botão!');
  }
  const handleTouchablePress= ()=>{
    Alert.alert('Touchable foi Pressionado','Você clicou no botão personalizado!');
  }


return(
  <View style={styles.container}>
    <Header texto= "aleluia"/>
    <Text style={styles.title}>Minha primeira tela interativa</Text>
    <Image
      source={{uri:'https://i.pinimg.com/736x/1b/f8/c0/1bf8c051e1fcec77609fc6b11801a4f2.jpg'}}
      style={styles.image}
    />
    <Button title="Clique aqui" onPress={handleButtonPress}/>
    <TouchableOpacity style={styles.customButton} onPress={handleTouchablePress}>
      <Text style={styles.buttonText}>Botão Personalizado</Text>
    </TouchableOpacity>
    <Card texto= "Card 1: Bem Vindo!"/>
    <Card texto= "Card 2: React Native é incrível!"/>
    <TouchableOpacity style={[styles.customButton, {backgroundColor:'green'}]} 
    onPress={()=> Alert.alert('Atenção','Botão verde clicado')}>
    <Text style={styles.buttonText}>Botão Verde </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:'lightgreen',borderRadius:20, padding:20}} 
    onPress={()=> Alert.alert('olha só!!','Vc clicou no botão zoado')}>
    <Text style={styles.buttonText}>Botão Verde </Text>
    </TouchableOpacity>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f3ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});