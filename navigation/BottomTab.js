import React from 'react'
import { View, Text, } from 'react-native'
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
               activeTintColor:'#E1306C',   
               style :{}     ,
                keyboardHidesTabBar: true
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
               tabBarIcon: ({color})=>(
                //    <View style = {{height: 50, width: 50, justifyContent:'center', alignItems:'center', backgroundColor: '#fff', borderRadius: 25, top: -15, elevation: 4, shadowColor: '#E1306C'}}>
                       <Icon name = 'plus-box-outline' color  = {color} size  = {26}/> 
                   //</View>
               )
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
