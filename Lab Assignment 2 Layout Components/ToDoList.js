import { StyleSheet } from "react-native";
import React from 'react';
import { useState } from 'react';
import {

    ScrollView,
    Pressable,
    View,
    Text,


} from 'react-native';




export default function ToDoList() {




    return (


        <ScrollView style={styles.body}>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Do laundry</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>Go to gym</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Walk dog</Text>
                </View>
            </Pressable>
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