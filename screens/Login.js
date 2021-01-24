import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import auth from '@react-native-firebase/auth';

import Home from '../navigation/BottomTab'

const {width, height} = Dimensions.get('window');


//test call native module
//import { NativeModules } from "react-native";
//const {ToastModule} = NativeModules;


const Login = () => {
    const navigation = useNavigation();
    const refPassword = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();
    const [initializing, setInitializing] = useState(true);
    const [visible, setVisible] = useState('');
    const [alertContent, SetAlertContent] = useState('');
    const onAuthStateChange = (user) =>{
      setUser(user);      
      if(initializing) setInitializing(false);
    }

    useEffect(()=>{
      const subscribe = auth().onAuthStateChanged(onAuthStateChange);      
      return subscribe;
    }, [])

    const onLogin = async() =>{
     await auth().signInWithEmailAndPassword(email, password).catch(error=>{        
          SetAlertContent(error.code);
          setVisible(true);        
          setPassword('');
      })
    }

    const customAlert = () =>{
      return (
        <Modal visible={visible} transparent animationType="slide">
          <View
            style={styles.containerModal}>
            <Image
              source={require('../assets/images/capoo-sad.gif')}
              resizeMode="contain"
              style={{width: width, height: 200}}
            />
            <Text
            textAlign = 'center'
            alignItems = 'center'
            numberOfLines = {2}
              style={styles.contentAlert}>
              {alertContent}
            </Text>             
            <TouchableOpacity
            activeOpacity = {0.7}
              style={styles.buttonOK}
              onPress={() => {
                setVisible(false);                
              }}>
              <Text style={{fontSize: 26, color: '#fff', fontWeight: 'bold'}}>0K</Text>
              {/* 0411001094225 */}
            </TouchableOpacity>
          </View>
        </Modal>
      );
  }

    
    if (initializing) return null;
    if(!user)
      return (
       <SafeAreaView style={styles.container}>
         {customAlert()}
         <LinearGradient
           colors={['#833AB4', '#C13584', '#E1306C']}
           style={styles.gradient}>
           <KeyboardAwareScrollView
             contentContainerStyle={styles.KeyboardAwareScrollView}
             showsVerticalScrollIndicator={false}>
             <Image
               style={styles.logo}
               source={require('../assets/images/logo7.png')}
             />

             <View style={styles.containerLoginForm}>
               <TextInput
                 style={[styles.textInput, {marginBottom: 8}]}
                 placeholder="Number, username or email"
                 placeholderTextColor="#546e7a"
                 keyboardType="email-address"
                 returnKeyType="next"
                 value = {email}
                 onChangeText = {(value)=>setEmail(value)}
                 onSubmitEditing={() => refPassword.current.focus()}
               />
               <TextInput
                 style={[styles.textInput, {marginBottom: 6}]}
                 placeholder="Your password"
                 placeholderTextColor="#546e7a"
                 secureTextEntry
                 returnKeyType="done"
                 ref={refPassword}
                 value = {password}
                 onChangeText = {(value)=>setPassword(value)}
                 onSubmitEditing={() => onLogin()}
               />
               <TouchableOpacity
                 activeOpacity={0.8}
                 style={{alignSelf: 'flex-end'}}>
                 <Text style={styles.textForgotPassword}>
                   Forgot your password
                 </Text>
               </TouchableOpacity>
               <TouchableOpacity
               onPress = {()=>onLogin()}
                disabled = {email === '' || password === '' ? true: false}
               
                 activeOpacity={0.8}
                 style={[styles.buttonLogin, {backgroundColor: email === '' || password === '' ? 'gray': '#00A3FF'}]}>
                 <Text style={{color: '#fff', fontSize: 18}}>Log In</Text>
               </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.8} style={styles.buttonFB}>
                 <Icon
                   name="facebook"
                   size={22}
                   color="#ffff"
                   style={{marginEnd: 6}}
                 />
                 <Text style={styles.textLogin}>Continue with Facebook</Text>
               </TouchableOpacity>
               <Text style={{color: '#c4c4c4c4'}}>Or</Text>
               <TouchableOpacity
                 onPress={() => {
                   navigation.navigate('Signup');
                 }}
                 activeOpacity={0.8}
                 style={styles.buttonFB}
                 //onPress = {()=>ToastModule.showText('this is a module from native', ToastModule.LENGTH_SHORT)}
               >
                 <Text style={styles.textLogin}>Sign Up</Text>
               </TouchableOpacity>
             </View>
           </KeyboardAwareScrollView>
         </LinearGradient>
       </SafeAreaView>
     );

  return <Home />
};
const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  KeyboardAwareScrollView:{width: width, alignItems:'center' },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  textInput: {
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 4,
    marginHorizontal: 32,  
  },
  logo:{
    width: 250,
     height: 250, 
     marginVertical: 64
    },
  textForgotPassword: {
    color: '#fff',    
    fontSize: 12  , 
  },
  buttonLogin: {
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 18,
    elevation: 4
  },
  buttonFB: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 14,
      elevation: 4
  },
  containerLoginForm:{
      width: 300,
      alignItems: 'center',   
      
  }, 
  textLogin:{
    fontSize: 16, color:'white'
  },
  containerModal: {
    width: width,
    height: 410,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    elevation: 8,
    alignItems: 'center',
    paddingTop: 10,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },
  buttonOK:{
    backgroundColor: '#E1306C',
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    position:'absolute',
    bottom: 40,
    elevation: 4,
    paddingVertical: 4
  },
  contentAlert:{
    fontSize: 22,                  
    textAlign: 'center',
    marginTop: 10,         
    backgroundColor:'#E1306C',
    marginHorizontal: 16,
    paddingHorizontal: 6,                  
    borderRadius: 4,
    paddingVertical: 8,
    color: '#fff',
    elevation: 2
  },
});
export default Login;
