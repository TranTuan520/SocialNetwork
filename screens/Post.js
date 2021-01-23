import React, {useRef, useState} from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Dimensions, Animated } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-crop-picker'

const {width, height} = Dimensions.get('window');
const Post = () => {
   

    
    const btRef = useRef(null);   
    const [isOpen, setisOpen] = useState(true)    
    const [contentValue, setContentValue] = useState('');   
    const [images, setImages] = useState([]);
    const renderVerticalBottomSheet =()=>{
        return(
            <ScrollView
            nestedScrollEnabled
      style={{
        backgroundColor: 'white',       
        height: 200,
      }}
    >     
      <TouchableOpacity activeOpacity = {0.7} style = {{flexDirection: 'row', borderColor: 'gray', borderTopWidth: 0.5, alignItems:'center', height: 40}} onPress = {()=>openPicker()}> 
        <Icon name = 'image-plus' size = {24} color = '#66bb6a' style = {{marginHorizontal: 16}}/>
        <Text>Thêm ảnh/video</Text>
      </TouchableOpacity>
      <TouchableOpacity  activeOpacity = {0.7} style = {{flexDirection: 'row', borderColor: 'gray', borderTopWidth: 0.5, alignItems:'center', height: 40}} onPress = {()=>openCamera()}> 
        <Icon name = 'account-multiple-plus' size = {24} color = '#2196f3' style = {{marginHorizontal: 16}}/>
        <Text>Gắn thẻ bạn bè</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = {0.7} style = {{flexDirection: 'row', borderColor: 'gray', borderTopWidth: 0.5, alignItems:'center', height: 40}}> 
        <Icon name = 'emoticon-kiss-outline' size = {24} color = '#f57f17' style = {{marginHorizontal: 16}}/>
        <Text>Cảm xúc</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = {0.7} style = {{flexDirection: 'row', borderColor: 'gray', borderTopWidth: 0.5, alignItems:'center', height: 40}}> 
        <Icon name = 'map-marker-plus' size = {24} color = '#ef5350' style = {{marginHorizontal: 16}}/>
        <Text>Check in</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity = {0.7} style = {{flexDirection: 'row', borderColor: 'gray', borderTopWidth: 0.5, alignItems:'center', height: 40, borderBottomWidth: 0.5}}  onPress = {()=>openCamera()}> 
        <Icon name = 'camera' size = {24} color = '#6ec6ff' style = {{marginHorizontal: 16}}/>
        <Text>Camera</Text>
      </TouchableOpacity> 
      
      
    

    </ScrollView>
        )
    }
    const renderHorizontalBottomSheet =()=>{
        return(
            <TouchableOpacity
            onPress = {()=>btRef.current.snapTo(0)}
      style={{      
        padding: 16,
        height: 40,
        flexDirection: 'row',
        alignItems:'center',
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
        backgroundColor:'#fff',
        justifyContent:'space-between'
          }}
    >
      <Text>Thêm vào bài viết của bạn</Text>
      <View style = {{flexDirection: 'row', justifyContent:'center'}}>
      <Icon name = 'image-plus' size = {24} color = '#66bb6a' style = {{marginHorizontal: 8}}/>
      <Icon name = 'account-multiple-plus' size = {24} color = '#2196f3' style = {{marginHorizontal: 8}}/>
      <Icon name = 'emoticon-kiss-outline' size = {24} color = '#f57f17' style = {{marginHorizontal: 8}}/>
      </View>
    </TouchableOpacity>
        )
    }
    const renderHeader = () =>{
        return(
            <View style = {{height: 42, justifyContent:'space-between', paddingHorizontal: 8, borderWidth: 0.3, borderBottomColor:'gray', flexDirection:'row', alignItems:'center'}}>
                <Text style = {{fontWeight: 'bold'}}>Tạo bài viết</Text>
               <TouchableOpacity style = {{height: 25, width: 75, borderRadius: 4, backgroundColor:'rgba(0,0,0,0.2)', justifyContent:'center', alignItems:'center'}}>
                  <Text style = {{color:'gray'}}>Đăng</Text>
               </TouchableOpacity>
            </View>
        )
    }
    const renderInfo = () => {
        return(
            <View  style = {{flexDirection:'row', height: 70, alignItems:'center', paddingStart: 10}}>
                <Image source = {{uri: 'https://instagram.fsgn7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136943338_390558105575066_810449655692537558_n.jpg?_nc_ht=instagram.fsgn7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=aYpgxP8RlPQAX_8tlLe&tp=1&oh=c1eaee838788257414bab88bca3d6c72&oe=602E527D'}} style = {{width: 50, height: 50, borderRadius: 25}} />
                <View style = {{height: 50, marginStart: 8}}>
                    <Text style = {{fontWeight:'bold'}}>Trần Tuấn dz</Text>
                    <View style = {{flexDirection:'row'}}>
                    <TouchableOpacity style = {{height: 20, borderWidth: 0.5, width: 70, justifyContent:'center', alignItems:'center', borderRadius: 2, flexDirection:'row', marginHorizontal: 4}}>
                    <Icon name = 'earth' size = {10} color = 'gray' />
                        <Text style = {{fontSize: 10}}>Công khai</Text>
                        <Icon name = 'menu-down-outline' size = {10} color = 'gray' />
                    </TouchableOpacity>

                    <TouchableOpacity style = {{height: 20, borderWidth: 0.5, width: 55, justifyContent:'center', alignItems:'center', borderRadius: 2, flexDirection:'row'}}>
                    <Icon name = 'plus' size = {10} color = 'gray' />
                        <Text style = {{fontSize: 10}}>Album</Text>
                        <Icon name = 'menu-down-outline' size = {10} color = 'gray' />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    const inputContent = () =>{     
      return (
        <TextInput
          onTouchStart={() => btRef.current.snapTo(2)}
          multiline
          placeholder="Anh đang nghĩ gì dọ?"
          value = {contentValue}
          style={{width:width, fontSize: contentValue.length < 50 ? 32: 16}}         
          onChangeText={(value) => {
            setContentValue(value);
            
          }}
        />
      );
    }
    const openPicker = () =>{
      ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    }).then(images => {
        if (images)
            {
              const path = [];
              images.map(i=>{
                path.push(i.path);
              })
              setImages(path);
            }
    })
    }
    const openCamera = () =>{
      ImagePicker.openCamera({        
        width: 500,
        height: 500,
        includeExif: true,       
      })
        .then((image) => {
          console.log('received image', image);
          
        })
        .catch((e) => alert(e));
    }
    
    return (
       <SafeAreaView style  = {{flex: 1}}>
            <View>
               {renderHeader()}
               <ScrollView style = {{marginBottom: 90}}>
               {renderInfo()}
               {inputContent()}          
               {
                 images.map(i=>{
                    
                  return(
                    <Image source = {{uri: i}} style = {{width: width , height: height/2, marginTop: 40, marginBottom: 4}} resizeMode = 'cover'  />
                  )
                   
                 })
               }
               </ScrollView>
            </View>
            <BottomSheet                      
            ref = {btRef}
            onCloseEnd = {()=>setisOpen(false)}
            onOpenStart = {()=>setisOpen(true)}
             snapPoints={[200, 200, 40]}      
             renderContent={isOpen? renderVerticalBottomSheet: renderHorizontalBottomSheet}
             >
            
            </BottomSheet >
       </SafeAreaView>

    )
}

export default Post
