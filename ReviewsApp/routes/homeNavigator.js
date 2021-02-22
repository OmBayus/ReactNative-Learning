import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetails"

const Stack = createStackNavigator();

export const HomeNavigator = () => (
      <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions={{
            headerStyle:{backgroundColor:"#eee",height:60},
            headerTintColor:'#444'
            }}
      >
            <Stack.Screen 
                  name="Home" 
                  options={{
                        headerStyle:{backgroundColor:"#eee"}
                  }} 
                  component={Home}
            />
            <Stack.Screen 
                  name="Details" 
                  component={ReviewDetails}
            />
      </Stack.Navigator>
);



