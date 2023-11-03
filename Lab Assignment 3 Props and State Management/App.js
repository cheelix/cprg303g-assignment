/**
 * My To Do List App
 *
 * @format
 */
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,

} from 'react-native';

import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);


  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
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

});


