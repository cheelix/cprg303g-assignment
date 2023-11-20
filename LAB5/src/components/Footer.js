import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 
export default function Footer( ) {

 

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Copy right to Cheelix (this is a Footer)</Text>
       
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
     
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  text:{
    fontSize:12,
    fontWeight:"bold",
    marginBottom:16,
  }



});
