import React,{ useState } from 'react';
import { StyleSheet, TextInput, Button,View } from 'react-native';


export default function AddTodo({submitHandler}){

      const [newTodo,SetNewTodo] = useState("")

      const changeHandler = (val)=>{
            SetNewTodo(val)
      }
      return(
            <View>
                  <TextInput
                  style={styles.input}
                        placeholder="new todo..."
                        onChangeText={changeHandler}
                        value={newTodo}
                  />
                  <Button onPress={()=> {
                        submitHandler(newTodo)
                        }} 
                        title="Add Todo" 
                        color="coral"
                  />
            </View>
      )
}

const styles = StyleSheet.create({
      input:{
            marginBottom:10,
            paddingHorizontal:8,
            paddingVertical:6,
            borderBottomWidth:1,
            borderBottomColor:"#ddd"
      }
})