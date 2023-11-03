import { StyleSheet } from "react-native";
import React from 'react';
import { useState } from 'react';
import {

    ScrollView,
    Pressable,
    View,
    Text,


} from 'react-native';




export default function ToDoList({ tasks }) {




    return (


        <ScrollView style={styles.body}>
            {tasks.map((task, index) => (
                <Pressable key={index}>
                    <View style={[styles.task]}>
                        <Text tyle={styles.taskText}>{task}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>


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
        marginTop: 50,
    },
    taskText: {
        fontSize: 16,
    },

});