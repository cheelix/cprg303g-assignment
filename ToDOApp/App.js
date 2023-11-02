/**
 * My To Do List App
 *
 * @format
 */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";





export default function App() {


  const [task, setTask] = useState([
    { text: 'Wake up at 4 AM', key: 1 },
    { text: 'Have breakfast', key: 2 },
    { text: 'Exercise', key: 3 },
    { text: 'Start working', key: 4 },
    { text: 'Plan for lunch', key: 5 },
    { text: 'Handle emails', key: 6 },
    { text: 'Attend a meeting', key: 7 },


  ])

  const toggleHandler  = (key,completed) => {
 
    setTask((prevTask) => {
      return prevTask.map((task) => {
        if (task.key === key) {
          return { ...task, completed: completed };
        }
        return task;
      });
      



    })
  }

  const submitHandler = (text) => {
    setTask(prevTodos => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos]
    })

  }




  return (

<ScrollView>
    <View style={styles.container}>

  

      <View style={styles.content}>
         
        <View style={styles.list}>

          <FlatList
            data={task}
            renderItem={({ item }) => (
       
              <ToDoList item={item} toggleHandler={toggleHandler} />
              // <ToDoList item={item} clickHandler={clickHandler} />
            )}

          />
          <ToDoForm submitHandler={submitHandler}/>
        </View>
      </View>



      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  container:{
    paddingBottom:10,
    marginTop:50,
  }
  
   
});


