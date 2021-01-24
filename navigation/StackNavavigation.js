import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./BottomTab";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
const Stack = createStackNavigator();
const StackNav = () => {
    return (
       <Stack.Navigator 
        screenOptions = {{
            headerShown: false,
        }}
      initialRouteName={'Login'}
       >
           <Stack.Screen name = 'Home' component = {Home}/>
           <Stack.Screen name = 'Login' component = {Login}/>
           <Stack.Screen name = 'Signup' component = {Signup}/>
       </Stack.Navigator>
    )
}

export default StackNav
