import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomButton from '../Componentes/CustomButton';
import CustomInput from '../Componentes/CustomInput';
import axios from 'axios';

export default function AddTaskScreen({ navigation, route }:any) {
  const { addTask } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async ()=> {
if (title.trim()) {
try {
const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
title,
completed: false,
});
addTask({ title, description, id: response.data.id.toString() });
navigation.goBack();
} catch (err) {
Alert.alert('Erro', 'Falha ao salvar na API');
}
} else {
Alert.alert('Erro', 'Por favor, insira o título da tarefa.');
}
};

 

return (
  <View style={styles.container}>
  <Text style={styles.label}>Título da Tarefa</Text>
  <CustomInput
  value={title}
  onChangeText={(text: string) => setTitle(text.slice(0, 50))}
  placeholder="Digite o título da tarefa (máx. 50 caracteres)"
  />
  <CustomInput
  value={description}
  onChangeText={setDescription}
  placeholder="Digite a descrição (opcional)"
  multiline
  />
  <CustomButton title="Salvar Tarefa" onPress={handleAddTask} color="#007bff" />
  <CustomButton
  title="Cancelar"
  onPress={() => navigation.goBack()}
  color="#dc3545"
  />
  </View>
);
}

const styles = StyleSheet.create({
 container: {
flex: 1,
backgroundColor: '#f5f5f5',
alignItems: 'center',
justifyContent: 'center',
padding: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
color: '#333',
},
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
});

