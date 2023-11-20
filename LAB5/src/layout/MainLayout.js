import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import Footer from '../components/Footer';
const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;