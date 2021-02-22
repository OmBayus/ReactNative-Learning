import React,{ useState } from 'react';
import { StyleSheet, View ,FlatList,Alert, TouchableWithoutFeedback , Keyboard} from 'react-native';


//Components
import Header from "./components/header"
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos,setTodos] = useState([
    {text:"create an todoapp",key:"1"},
    {text:"masanı düzenle",key:"2"},
    {text:"todolist yap",key:"3"},
  ])

  const pressHandler = (key)=>{
    setTodos(prevTodos=>{
      return( prevTodos.filter(todo => todo.key != key))
    })
  }
  const submitHandler = (newTodo)=>{

    if(newTodo.length>3){
      setTodos(prevTodos=>{
        return([...prevTodos,{text:newTodo,key:String(Math.random())}])
      })
    }
    else{
      Alert.alert("Error!","Todos must be over 3 chars long",[
        {text:"Understood",onPress: ()=> console.log("alert closed")}
      ])
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
      console.log("dismiss keyboard")
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding: 40,
    flex:1
  },
  list:{
    flex:1,
    marginTop:20
  }
});
