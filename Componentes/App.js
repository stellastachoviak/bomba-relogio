
import{StyleSheet, View, Text, Image, Button, TouchableOpacity, Alert} from 'react-native';

export default function App() {
  const handleButtonPress= ()=>{
    Alert.alert('Botão foi Pressionado','Você clicou no botão!');
  }
  const handleTouchablePress= ()=>{
    Alert.alert('Touchable foi Pressionado','Você clicou no botão personalizado!');
  }
}

return(
  <View style={styles.container}>
    <Text style={styles.title}>Bem vindo ao react native!!</Text>
    <Image
      source={{uri:''}}
      style={styles.image}
    />
    <Button title="Clique aqui" onPress={handleButtonPress}/>
    <TouchableOpacity style={styles.costomButton} onPress={handleTouchablePress}>
      <Text style={styles.buttonText}>Botão Personalizado</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
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
    width: 150,
    height: 150,
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
