import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
};

type NewTask = {
  title: string;
  description?: string;
  id?: string;
};

type TaskContextType = {
  localTasks: Task[];
  addTask: (task: NewTask) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  clearTasks: () => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [localTasks, setLocalTasks] = useState<Task[]>([]);

  // Carregar tarefas do AsyncStorage ao iniciar
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('@TaskApp:tasks');
        if (savedTasks) {
          const parsedTasks = JSON.parse(savedTasks);
          if (
            Array.isArray(parsedTasks) &&
            parsedTasks.every(task => task.id && task.title)
          ) {
            setLocalTasks(parsedTasks);
          } else {
            console.warn('Dados inválidos, inicializando com array vazio');
            setLocalTasks([]);
          }
        }
      } catch (err) {
        console.error('Erro ao carregar tarefas:', err);
      }
    };
    loadTasks();
  }, []);

  // Salvar tarefas no AsyncStorage quando localTasks mudar
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('@TaskApp:tasks', JSON.stringify(localTasks));
      } catch (err) {
        console.error('Erro ao salvar tarefas:', err);
      }
    };
    saveTasks();
  }, [localTasks]);

  const addTask = ({ title, description = '', id }: NewTask) => {
    setLocalTasks(prev => [
      ...prev,
      {
        id: id || `local-${Date.now()}`,
        title,
        description,
        completed: false,
      },
    ]);
  };

  const toggleTaskCompletion = (id: string) => {
    setLocalTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setLocalTasks(prev => prev.filter(task => task.id !== id));
  };

  const clearTasks = async () => {
    try {
      await AsyncStorage.removeItem('@TaskApp:tasks');
      setLocalTasks([]);
    } catch (err) {
      console.error('Erro ao limpar tarefas:', err);
    }
  };

  return (
    <TaskContext.Provider
      value={{ localTasks, addTask, toggleTaskCompletion, deleteTask, clearTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
