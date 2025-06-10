import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Card from './Componentes/Card';

export default function App() {
  const handleCardPress = () => {
    Alert.alert('Card Clicado', 'Você tocou no card!');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Minha Tela Estilizada</Text>
      </View>

      {/* Conteúdo Principal */}
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/6d/81/64/6d8164ffd35230a1990bb8b9d8d148fb.jpg' }}
          style={styles.image}
        />
        <Text style={styles.subtitle}>Explorando Estilos no React Native</Text>
      </View>

      {/* Seção de Cards */}
      <View style={styles.cardSection}>
        <TouchableOpacity onPress={handleCardPress}>
          <Card texto="Card 1: Estilização com Flex" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCardPress}>
          <Card texto="Card 2: Layouts Responsivos" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87fa2f',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e6f3ff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  cardSection: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 20,
  },
  
});