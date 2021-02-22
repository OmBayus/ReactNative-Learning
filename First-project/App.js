import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet as sa, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum <Text>test</Text> dolor sit amet.</Text>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </View>
    </View>
  );
}

const styles = sa.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20
  },
  boldText:{
    fontWeight:"bold"
  },
  body:{
    backgroundColor:"yellow",
    padding:20
  }
});
