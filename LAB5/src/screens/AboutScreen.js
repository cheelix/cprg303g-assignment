import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import MainLayout from '../layout/MainLayout';


export default function AboutScreen({navigation,name}) {
  return (
    <MainLayout>
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Text>Abput page</Text>
       
   
      <Button title='Go to Home' onPress={()=>navigation.navigate("Home")}/>
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
