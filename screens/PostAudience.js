import React, {useState, useEffect} from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
// import {useNavigation, useBackButton} from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
import CheckBox from 'react-native-checkbox';

const {width, height} = Dimensions.get('window');

const PostAudience = ({ route, navigation}) => {
    // const navigation = useNavigation();
    const [audienceSelected, setAudienceSelected] = useState(route.params.PostAudience);
    const audiences = [
        {
            name:  'Public', 
            icon: 'earth',
            content: 'Anyone on or off SN'
        },
        {
            name:  'Friend', 
            icon: 'account-group',
            content: 'Your friends on SN'
        },
        // {
        //     name:  'Friend Except', 
        //     icon: 'account-multiple-minus',
        //     content: `Don't show to some friends`
        // },
        // {
        //     name:  'Specific Friends', 
        //     icon: 'account-star-outline',
        //     content:'Show to specific friends'
        // },
        {
            name:  'Only Me', 
            icon: 'shield-lock-outline',
            content:'Only you, true....you so alone :('
        },             
    ]

   
    const renderHeader = () =>{
        return(
            <View style = {{height: 42, width: width, justifyContent:'flex-start', alignItems:'center', flexDirection:'row', marginStart: 8, marginBottom: 10}}>
                <Icon name  = 'chevron-left' size = {32} color = 'black' onPress = {()=>{
                    firestore().collection('Users').doc(auth().currentUser.uid).update({
                        PostAudience: audienceSelected
                    })
                    navigation.goBack();
                    } } />
                <Text style = {{fontSize: 18, fontWeight: '400', marginStart: 8}}>Đối Tượng</Text>
            </View>

        )
    }
    const renderItemAudience = ({item}) =>{
        return(
          <TouchableOpacity
          activeOpacity = {0.8}
          style={styles.containerItem} onPress = {()=>{
            setAudienceSelected(item.name);
            item.name === 'Friend Except' ||item.name === 'Specific Friends' ?  {
                // open the list user fiends 
            }:null
          }}>
              <Icon name = {audienceSelected === item.name ? 'check-circle-outline':'radiobox-blank' }  color = { audienceSelected === item.name ? 'red':'gray' }  size = {24} style = {{marginHorizontal: 12}} />
              <Icon name = {item.icon}  color = 'gray' size  = {30} style = {{marginEnd: 12}}/>
              <View >
                    <Text style = {{}}>{item.name}</Text>
                    <Text style = {{fontSize: 12, color:'gray'}}>{item.content}</Text>
              </View>
            {item.name === 'Friend Except' ||item.name === 'Specific Friends' ?
                <Icon name  = 'chevron-right' size = {26} color = 'gray' style = {{position:'absolute', end: 8}} onPress = {()=>navigation.goBack()} />
            :null}
          </TouchableOpacity>
        )
    }
    return (
        <View style = {{flex: 1}}>
          {renderHeader()}
          <Text style = {{fontWeight: 'bold', marginStart: 12, fontSize: 16}}>Who can see your post??</Text>
            <FlatList
                data = {audiences}
                renderItem = {(item)=>renderItemAudience(item)}                
            />
        </View>
    )
}
const styles = StyleSheet.create({
    containerItem:{
        height: 50,
        width: width,
        flexDirection: 'row',       
        borderBottomWidth: 0.5,
        borderBottomColor:'gray',
        alignItems:'center'
    }
    ,containerItem1:{
        flexDirection: 'row'
    }
})

export default PostAudience
