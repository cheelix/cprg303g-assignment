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
    Button
} from 'react-native';


export default function ToDoForm({submitHandler}) {

    const [text,settext]=useState('');
    const changeHandler=(val)=>{
        settext(val);
    }

    return (
        <SafeAreaView>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    onChangeText={(val) => changeHandler(val)}
                />
                <Button title="Add" 
                onPress={() => submitHandler(text)}/>
            </View>



            
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
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

