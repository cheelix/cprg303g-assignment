import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import MainLayout from '../layout/MainLayout';

import ToDoList from '../components/ToDoList'
import ToDoForm from '../components/ToDoForm'
import { useState } from 'react';
export default function HomeScreen({navigation }) {


  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  const deleteTask = (index) => {
   const updatedTasks = tasks.filter((_, i) => i !== index);
   setTasks(updatedTasks);
  }





  return (
    <MainLayout>
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
       
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask}/>
      
      <Button title='Go to About' onPress={()=>navigation.navigate("About")}/>
      <StatusBar style="auto" />
    </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:16,
  }



});
