import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import tab from '../components/tab'
const Tab = createMaterialTopTabNavigator()
const TopTabNavigation = () => {
    return (
      
           <Tab.Navigator>
               <Tab.Screen name  = 'tab' component = {tab} />
               <Tab.Screen name  = 'tab2' component = {tab} />
           </Tab.Navigator>

       
    )
}

export default TopTabNavigation
