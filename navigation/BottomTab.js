import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
 import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Post from "../screens/Post";
import Follow from "../screens/Follow";
import Profile from "../screens/Profile";

const bottomTab = createBottomTabNavigator ();
const BottomTab = () => {
    return (
       <bottomTab.Navigator
           tabBarOptions = {{
               activeTintColor:'black',                                            
           }}           
       >
           <bottomTab.Screen name = 'Home' component = {Home} options = {{              
               tabBarLabel: ()=>{return null},     
               tabBarIcon: ({color})=>(<Icon name = 'home-outline' color  = {color} size  = {26} />)
           }}  />
             <bottomTab.Screen name = 'Search' component = {Search} options = {{
                  tabBarLabel: ()=>{return null} ,
               tabBarIcon: ({color})=>(<Icon name = 'magnify' color  = {color} size  = {26}/>)
           }}  />
             <bottomTab.Screen name = 'Post' component = {Post} options = {{
                  tabBarLabel: ()=>{return null} ,
               tabBarIcon: ({color})=>(<Icon name = 'plus-box-outline' color  = {color} size  = {26}/>)
           }}  />
             <bottomTab.Screen name = 'Follow' component = {Follow} options = {{
                  tabBarLabel: ()=>{return null} ,      
               tabBarIcon: ({color})=>(<Icon name = 'heart-outline' color  = {color} size  = {26}/>)
           }}  />
             <bottomTab.Screen name = 'Profile' component = {Profile} options = {{
                  tabBarLabel: ()=>{return null} ,
               tabBarIcon: ({color})=><Icon name = 'account-outline' color  = {color} size  = {26}/>
           }}  />
       </bottomTab.Navigator>
    )
}

export default BottomTab
