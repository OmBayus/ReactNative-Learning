import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading"
import Navigator from "./routes/drawer"

export default function App() {

  let [fontsLoaded] = useFonts({
    'nunito-regural': require("./assets/fonts/Nunito-Regular.ttf"),
    'nunito-bold': require("./assets/fonts/Nunito-Bold.ttf")
  });

  if(fontsLoaded){
    return (
      <Navigator/>
    )
  }
  else{
    return(
      <AppLoading />
    )
  }
}