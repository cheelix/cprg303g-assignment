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



export default function App() {
  return (
    <SafeAreaView>
      <ToDoList />
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


