import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name,setName] = useState('Omer')

  const pressHandler = ()=>{
    setName("Omer")
  }

  const handleChange = (val)=>{
    setName(val)
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <TextInput 
      style={styles.input}
      placeholder="Write your name" 
      onChangeText={handleChange}
      />
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={pressHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:20
  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:10,
    width: 200
  }
});
