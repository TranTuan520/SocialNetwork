import React from 'react'
import { View, Text, StyleSheet, Image , Dimensions, TouchableOpacity, TextInput  } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
console.disableYellowBox = true
const {width, heigh} = Dimensions.get('window');
const PostComponent = ({item}) => {
    return (
        <View style = {styles.containerPost}>
            <View style = {styles.headerPost}>
               <View style = {{flexDirection:'row', alignItems:'center'}}>
               {renderAvatar(item.avatar)}
               <Text style = {styles.name}>{item.user}</Text>
               </View>
                <Icon name = 'dots-vertical' size = {26} color = 'black'/>
            </View>
            <Image source = {{uri: item.images[0]}} style = {{width: width, height: 400, backgroundColor: '#ffff'}}/>
            {renderFooter({item})}
        </View>
    )
}
const renderFooter = ({item}) => {
    return(
        <View style = {styles.containerFooter}>
            <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                <View style = {{flexDirection:'row'}}> 
                    <Icon name = 'heart-outline' color = 'black' size = {26} style = {{marginEnd: 10}} />
                    <Icon name = 'chat-outline' color = 'black' size = {26} style = {{marginEnd: 10}} />
                    <Icon name = 'message-outline' color = 'black' size = {26} style = {{marginEnd: 10}} />
                </View>
                <Icon name = 'bookmark-outline' size = {26} color = 'black' />
            </View>
            <Text style = {{fontWeight:'bold'}}>{item.like} lượt thích</Text>     
            <Text numberOfLines = {3}>{username({item})}  {` ${item.content}` }</Text>   
            <Text style = {{color:'gray', marginTop: 4}}>xem tất cả 20 bình luận</Text>      
            {renderMyComment()}         
        </View>

    )
}
renderMyComment = () =>{
    return(
        <View style = {{ flexDirection:'row', alignItems:'center'}}>
            <Image source = {{uri: 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/137525778_3715474288512867_8204082987338777527_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=q6oqjgVGROAAX8FX-2J&tp=1&oh=f923bbbf9e8c626d5ea9c9817fe8a812&oe=602D6359&ig_cache_key=MjQ4NTczMzYxMTIyODU2NjgzMw%3D%3D.2'}} style = {{width: 20, height: 20, borderRadius: 10,marginEnd: 8}}  />
            <TextInput placeholder = 'Thêm bình luận...' />
        </View>
    )
}
const username =  ({item}) =>{ 
    return(
        <Text style = {{fontWeight:'bold'}}>{item.user}</Text>
    )
}
const renderAvatar = (imgLink) => {
    return (     
          <LinearGradient
        colors={['#F77737', '#8a3ab9', '#C13584', '#5851DB', '#FD1D1D']}        
        style={styles.gradient}>
        <Image
          style={styles.imageAvatar}
          source={{uri: imgLink}}
        />
      </LinearGradient>   
    );
  };
const styles = StyleSheet.create({
    containerPost:{
        width: width,
        height: 600,
        marginTop: 8,       
    },
    headerPost:{
        flexDirection:'row',
        justifyContent:'space-between',        
        marginHorizontal: 4,
        marginVertical: 6, 
        alignItems:'center'
    },
    containerAvatar:{ 
        alignItems:'center'    
    },
    containerFooter:{
        marginVertical: 8,
        marginHorizontal: 12
    },


  gradient: {
    
        height: 38,
        width: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        marginHorizontal: 6,
      
  },
  imageAvatar:{
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#fff',
  },
  name:{
      color:'#23395d'
  }
     
})

export default PostComponent
