import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import Stack from './navigation/StackNavavigation'
const App = () => {
  return (
    <NavigationContainer>
      <Stack />    
    </NavigationContainer>

  )
}

export default App
