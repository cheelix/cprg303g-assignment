import { StyleSheet } from "react-native";
import React from 'react';
import  { useState } from 'react';
import {


    Pressable,
    View,
    Text,
  

} from 'react-native';




export default function ToDoList({item, toggleHandler}) {

    const [completed, setCompleted] = useState(false);

    const toggleCompleted = () => {
        setCompleted(!completed);
        toggleHandler(item.key, !completed);
      };


    return (
         
    
            <Pressable onPress={toggleCompleted}>
            <View style={[styles.task,completed ? styles.completed : null]}>
                <Text style={styles.taskText}>{item.text}</Text>
                </View>
            </Pressable>
  
        
    )
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
  
        
    body: {
        marginTop: 10,
    },
    taskText: {
        fontSize: 16,
      },

});