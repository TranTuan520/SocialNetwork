import React from 'react'
import { View, Text, StatusBar, SafeAreaView ,
StyleSheet,
FlatList,
Image,
ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Story from '../components/StoryComponent';
import Post from '../components/PostComponent';
const user = [
        {
            name: 'Marry',
            image: ['https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/137525778_3715474288512867_8204082987338777527_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=q6oqjgVGROAAX8FX-2J&tp=1&oh=f923bbbf9e8c626d5ea9c9817fe8a812&oe=602D6359&ig_cache_key=MjQ4NTczMzYxMTIyODU2NjgzMw%3D%3D.2', 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/134406424_861768074597530_6386055446260632525_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=609UwbZCnmwAX-D-Zjb&tp=1&oh=bde4c21112bc9004752d57a1aad328dc&oe=602CB43C']
        },
        {
            name: 'mmyyxx',
            image:[ 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF', 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/128002872_191405115910836_822736510377552316_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=0cmd7HasooYAX893hZy&tp=1&oh=c5e764501abaa5bfff4267d28908673a&oe=602B6680']
        },
        {
            name: 'Kieu',
            image:[ 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/128002872_191405115910836_822736510377552316_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=0cmd7HasooYAX893hZy&tp=1&oh=c5e764501abaa5bfff4267d28908673a&oe=602B6680']
        },
        {
            name: 'Luxy',
            image:[ 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138425911_320760755867046_5679684663346968231_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FKL129zHRxgAX-drWhH&tp=1&oh=a61f71ecd11c3bf3ac790b5b5ade9e0b&oe=602C9FC2',]
        },
        {
            name: 'Trang',
            image:[ 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/138342164_425520808652373_9220565189668521573_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=XEd5nsfwYccAX_UPfxY&tp=1&oh=65d1b4a17cd3457e114c51540b0b8bba&oe=602CB890&ig_cache_key=MjQ4NjM0MjI1NjY0NzQ0NTI1OQ%3D%3D.2',]
        },
        {
            name: 'Kery',
            image:[  'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136991524_1151790858588325_3895015240353904010_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=cwE8VEBJbLcAX_9DuoK&tp=1&oh=090033c4a65b190b7e8f31325ef4974c&oe=602B985D']
        },
        {
            name: 'BeDauTay',
            image:[ 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/136650117_812277856296427_554900269540695418_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=SVyoBdcpTjcAX9X91Ld&tp=1&oh=2e0f823a570925b90404e6894302a16e&oe=602C5CF9&ig_cache_key=MjQ4MzQxNTE1OTY3MTA3MTE0NA%3D%3D.2']
        },

    ]
   const posts = [
       {
           user: 'mmyyxx',
           avatar: 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
           content: ' Vitamin ngủ ngonnn 😍🌹❤️',
           like: 903,
           time: '9p',
           images:[
               'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
               'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
               'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139127587_747476652849152_6431918335175206230_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BMfZH32H1PIAX-A2gL5&tp=1&oh=f67a5f82294c1a79c0ecad4ab69016f4&oe=602C7426',
               'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139820169_405322113907434_2432043208623205274_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6RVS_oTqMQMAX_dOw8h&tp=1&oh=96bfe0ca20c1c13f297cfc44c97f51ff&oe=602DCCD6',

           ]
       },
       {
        user: 'aqua.52',
        avatar: 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
        content: 'Hết noel rồi ... đã bảo k thích noel rồi ý ... khộ ghê ... đã bảo k thích rùi ý ... mệt lém í ... 😆😆😆',
        like: 903,
        time: '9p',
        images:[
            'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139027024_1589069887957754_7595135526030898728_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=NEzcA0W21vAAX-wivz3&tp=1&oh=0744e23d2e221986d0de01140ae64415&oe=602B8C1C',
            'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
            'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139127587_747476652849152_6431918335175206230_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BMfZH32H1PIAX-A2gL5&tp=1&oh=f67a5f82294c1a79c0ecad4ab69016f4&oe=602C7426',
            'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139820169_405322113907434_2432043208623205274_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6RVS_oTqMQMAX_dOw8h&tp=1&oh=96bfe0ca20c1c13f297cfc44c97f51ff&oe=602DCCD6',

        ]
    }
    ,
       {
        user: 'aqua.52',
        avatar: 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
        content: 'Hết noel rồi ... đã bảo k thích noel rồi ý ... khộ ghê ... đã bảo k thích rùi ý ... mệt lém í ... 😆😆😆',
        like: 903,
        time: '9p',
        images:[
            'https://instagram.fsgn7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136943338_390558105575066_810449655692537558_n.jpg?_nc_ht=instagram.fsgn7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=aYpgxP8RlPQAX_8tlLe&tp=1&oh=c1eaee838788257414bab88bca3d6c72&oe=602E527D',
            'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
            'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139127587_747476652849152_6431918335175206230_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BMfZH32H1PIAX-A2gL5&tp=1&oh=f67a5f82294c1a79c0ecad4ab69016f4&oe=602C7426',
            'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139820169_405322113907434_2432043208623205274_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6RVS_oTqMQMAX_dOw8h&tp=1&oh=96bfe0ca20c1c13f297cfc44c97f51ff&oe=602DCCD6',

        ]
    },
    {
     user: 'aqua.52',
     avatar: 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
     content: 'Hết noel rồi ... đã bảo k thích noel rồi ý ... khộ ghê ... đã bảo k thích rùi ý ... mệt lém í ... 😆😆😆',
     like: 903,
     time: '9p',
     images:[
         'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/137525778_3715474288512867_8204082987338777527_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=q6oqjgVGROAAX8FX-2J&tp=1&oh=f923bbbf9e8c626d5ea9c9817fe8a812&oe=602D6359&ig_cache_key=MjQ4NTczMzYxMTIyODU2NjgzMw%3D%3D.2',
         'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
         'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139127587_747476652849152_6431918335175206230_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BMfZH32H1PIAX-A2gL5&tp=1&oh=f67a5f82294c1a79c0ecad4ab69016f4&oe=602C7426',
         'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139820169_405322113907434_2432043208623205274_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6RVS_oTqMQMAX_dOw8h&tp=1&oh=96bfe0ca20c1c13f297cfc44c97f51ff&oe=602DCCD6',

     ]
 },
 {
  user: 'aqua.52',
  avatar: 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
  content: 'Hết noel rồi ... đã bảo k thích noel rồi ý ... khộ ghê ... đã bảo k thích rùi ý ... mệt lém í ... 😆😆😆',
  like: 903,
  time: '9p',
  images:[
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/138342164_425520808652373_9220565189668521573_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=XEd5nsfwYccAX_UPfxY&tp=1&oh=65d1b4a17cd3457e114c51540b0b8bba&oe=602CB890&ig_cache_key=MjQ4NjM0MjI1NjY0NzQ0NTI1OQ%3D%3D.2',
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139127587_747476652849152_6431918335175206230_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BMfZH32H1PIAX-A2gL5&tp=1&oh=f67a5f82294c1a79c0ecad4ab69016f4&oe=602C7426',
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139820169_405322113907434_2432043208623205274_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6RVS_oTqMQMAX_dOw8h&tp=1&oh=96bfe0ca20c1c13f297cfc44c97f51ff&oe=602DCCD6',

  ]
},
{
 user: 'aqua.52',
 avatar: 'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
 content: 'Hết noel rồi ... đã bảo k thích noel rồi ý ... khộ ghê ... đã bảo k thích rùi ý ... mệt lém í ... 😆😆😆',
 like: 903,
 time: '9p',
 images:[
     'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
     'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
     'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139127587_747476652849152_6431918335175206230_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BMfZH32H1PIAX-A2gL5&tp=1&oh=f67a5f82294c1a79c0ecad4ab69016f4&oe=602C7426',
     'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139820169_405322113907434_2432043208623205274_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6RVS_oTqMQMAX_dOw8h&tp=1&oh=96bfe0ca20c1c13f297cfc44c97f51ff&oe=602DCCD6',

 ]
}
   ] 
const Home = () => {
    
    return (
     //  <StatusBar barStyle ='dark-content'>
           <SafeAreaView  style = {{flex: 1}}>
               {renderHeader()}     
              
               <ScrollView>
               {renderStories()}
                <Post item = {posts[0]} />
                <Post item = {posts[1]} />
                <Post item = {posts[2]} />
                <Post item = {posts[3]} />
                <Post item = {posts[4]} />
                <Post item = {posts[5]} />                
               </ScrollView>

           </SafeAreaView>
     //  </StatusBar>
    )
}
renderPost=()=>{

}
renderHeader = () => {    
    return(
        <View style = {styles.containerHeader} >
            <Image  source = {require('../assets/images/logo3.png')} style = {styles.logo} resizeMode = 'stretch'  />
            <Icon name = 'send' size  = {26} color = 'gray' />
        </View>
    )
}
renderStories = () =>{
    return(
        <FlatList
        style = {{marginTop: 8}}
         data = {user} 
         horizontal
         showsHorizontalScrollIndicator = {false}
         keyExtractor = {user.name}
         renderItem = {(item)=>Story(item) }/>
    )
}

const styles = StyleSheet.create({
    containerHeader:{              
        height: 40,      
        flexDirection:'row',
         justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal: 6,
        marginVertical: 2,
        borderBottomWidth: 0.2,
         
        borderColor:'gray'
    },
    logo:{
        width: 130,
        height: 30,
         
    }
})

export default Home
