import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const {width, height} = Dimensions.get('window')
const Profile = () => {

    const User = 
        {user: 'aqua.error',
        urlImage: 'https://instagram.fsgn7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136943338_390558105575066_810449655692537558_n.jpg?_nc_ht=instagram.fsgn7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=aYpgxP8RlPQAX_8tlLe&tp=1&oh=c1eaee838788257414bab88bca3d6c72&oe=602E527D',
        intro:
         `📱|𝑾𝒐𝒓𝒌 𝑶𝒏 𝑴𝒐𝒃𝒊𝒍𝒆\n💰|𝑭𝒓𝒆𝒆 𝑾𝒐𝒓𝒌\n⭐|𝑪𝒐𝒎𝒎𝒊𝒔𝒔𝒊𝒐𝒏𝒊 𝑨𝒑𝒆𝒓𝒕𝒆`,
        post: 52,
        follow: ['mmyyxx',  'miu.1301', 'svg'],
        follwing: ['mmyyxx', 'rena', 'sena']
    }
    

    renderHeader = () =>{
        return(
            <View style = {styles.containerHeader}>
                <View style = {{flexDirection:'row', justifyContent:'center'}}>
                    <Text style = {styles.userName}>{User.user}</Text>
                    <Icon name = 'chevron-down' size = {26}  style = {{bottom: -2}}/>
                </View>
                <View style = {{flexDirection: 'row'}}>
                <Icon name = 'plus' size = {28} color = 'black' style = {{marginEnd: 12}} />
                    <Icon name = 'menu' size = {28} color = 'black' />
                </View>
            </View>
        )
    } 
    
   const renderInfo = () => {
        return (
          <View style={styles.containerInfo}>
            {/* header */}
            <View style={styles.headerInfo}>
              <View
                style={{                
                  width: width / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: User.urlImage}}
                  style={{width: 90, height: 90, borderRadius: 45}}
                />
              </View>
             <View style = {{flexDirection: 'row', width: width -width /3, paddingEnd: 4}}>
             <View
                style={{                
                     flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 2
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>52</Text>
                <Text>Bài viết</Text>
              </View>
              <View
                style={{                
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 2
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{User.follow.length}</Text>
                <Text numberOfLines = {1}>Người theo dõi</Text>
              </View>
              <View
                style={{              
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 2
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{User.follwing.length}</Text>
                <Text numberOfLines = {1}>Đang theo dõi</Text>
              </View>
             </View>
            </View>
            {/* intro */}
            <Text  numberOfLines = {4} style = {{marginHorizontal: 32, alignContent: 'center',  height: 60}}>
                {User.intro}
            </Text>
          </View>
        );
    }

    return (
        <View>
           <ScrollView>
           {renderHeader()}
            {renderInfo()}
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerHeader: {
        flexDirection: 'row',
        height: 40,
        width: width,        
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 12,
        borderBottomWidth: 0.4,
        borderColor:'gray',
    },
    containerInfo: {
        width: width,
        height: 160,            
    },
    headerInfo: {
        flexDirection: 'row',
        height: 100
    },
    userName :{
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default Profile
