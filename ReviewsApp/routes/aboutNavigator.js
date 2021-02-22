import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import About from "../screens/about"

const { Navigator, Screen } = createStackNavigator();

export const AboutNavigator = () => (
      <Navigator 
      initialRouteName="About" 
      screenOptions={{
            headerStyle:{backgroundColor:"#eee",height:60},
            headerTintColor:'#444'
            }}
      >
            <Screen 
                  name="About" 
                  options={{
                        headerStyle:{backgroundColor:"#eee"}
                  }} 
                  component={About} 
            />
      </Navigator>
);



