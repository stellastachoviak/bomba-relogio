import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import { useTasks } from '../Contexts/TaskContext'; // ajuste o caminho se necessário

export default function HomeScreen() {
  const { localTasks, addTask, toggleTaskCompletion, deleteTask } = useTasks();

  const [modalVisible, setModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddTask = () => {
    if (newTitle.trim()) {
      addTask({ title: newTitle, description: newDescription });
      setNewTitle('');
      setNewDescription('');
    }
  };

  const handleDeleteTask = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete);
      setModalVisible(false);
      setTaskToDelete(null);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tarefas</Text>
      <FlatList
        data={localTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none', fontSize: 18 }}>
                {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 'auto' }}
              onPress={() => {
                setTaskToDelete(item.id);
                setModalVisible(true);
              }}
            >
              <Text style={{ color: 'red', marginLeft: 16 }}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <TextInput
          placeholder="Título"
          value={newTitle}
          onChangeText={setNewTitle}
          style={{ flex: 1, borderWidth: 1, marginRight: 8, padding: 8 }}
        />
        <TextInput
          placeholder="Descrição"
          value={newDescription}
          onChangeText={setNewDescription}
          style={{ flex: 1, borderWidth: 1, marginRight: 8, padding: 8 }}
        />
        <Button title="Adicionar" onPress={handleAddTask} />
      </View>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000099' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8 }}>
            <Text>Tem certeza que deseja excluir esta tarefa?</Text>
            <View style={{ flexDirection: 'row', marginTop: 16 }}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <View style={{ width: 16 }} />
              <Button title="Excluir" color="red" onPress={handleDeleteTask} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}