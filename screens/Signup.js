import React, {useRef, useState} from 'react';
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
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import auth, { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
const {width, height} = Dimensions.get('window');

//test call native module
//import { NativeModules } from "react-native";
//const {ToastModule} = NativeModules;


const Signup = () => {
   
    const navigation = useNavigation();
    const refPassword = useRef(null);
    const refName = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [visible, setVisible] = useState('');
    const [success, setSuccess] = useState(false);
    const [alertContent, SetAlertContent] = useState('');
    
    const customAlert = () =>{
        return (
          <Modal visible={visible} transparent animationType="slide">
            <View
              style={styles.containerModal}>
              <Image
                source={
                  success
                    ? require('../assets/images/capoo-funny2.gif')
                    : require('../assets/images/capoo-sad.gif')
                }
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
                  if (success) navigation.navigate('Login');
                }}>
                <Text style={{fontSize: 26, color: '#fff', fontWeight: 'bold'}}>0K</Text>
                {/* 0411001094225 */}
              </TouchableOpacity>
            </View>
          </Modal>
        );
    }
    const onSignup =() =>{
        auth().createUserWithEmailAndPassword(email, password).then(()=>{
            SetAlertContent('Congratulations! your account has been created.');
            setSuccess(true);
            setVisible(true);
            firestore().collection('Users').doc(auth().currentUser.uid).set({
              name: name,
              time: firebase.firestore.FieldValue.serverTimestamp()
            })
            
        }).catch(error=>{
          setSuccess(false);          
          if (error.code === 'auth/email-already-in-use') {           
            SetAlertContent('User/email-already-in-use! :(')                       
          }      
          if (error.code === 'auth/invalid-email') {           
            SetAlertContent('That email address is invalid! :(');           
          }
          else
          SetAlertContent(error.code)         
          setEmail('');
          setName('');
          setPassword('');
          setVisible(true);         
        })
    }
    
   
  return (
    <SafeAreaView style={styles.container}>
   
      <LinearGradient
        colors={['#833AB4', '#C13584', '#E1306C']}
        style={styles.gradient}>
           
      <KeyboardAwareScrollView      
      contentContainerStyle = {styles.KeyboardAwareScrollView}
      showsVerticalScrollIndicator = {false}>    
    {customAlert()}   
      <Image  
            style={styles.logo}
            source={require('../assets/images/logo7.png')}
          />
         
        <View style = {styles.containerLoginForm}>
        <TextInput
            style={[styles.textInput, {marginBottom: 8}]}
            placeholder="Number, username or email"
            placeholderTextColor = '#546e7a'
            keyboardType  = 'email-address'
            returnKeyType = 'next'
            onChangeText = {value=>setEmail(value)}
            onSubmitEditing = {()=>refName.current.focus()}
            value = {email}
          />
          <TextInput
            style={[styles.textInput, {marginBottom: 8}]}
            placeholder="Your name"
            placeholderTextColor = '#546e7a'           
            returnKeyType = 'next'       
            ref = {refName}    
            onChangeText = {value=>setName(value)}       
            onSubmitEditing = {()=>refPassword.current.focus()}
            value = {name}
          />
          
          <TextInput
            style={[styles.textInput, {marginBottom: 6}]}
            placeholder="Your password"
            placeholderTextColor = '#546e7a'
            secureTextEntry
            returnKeyType = 'done'
            onChangeText = {value=>setPassword(value)}
            ref = {refPassword}           
            onSubmitEditing = {()=>onSignup()}
            value = {password}
          />          
          <TouchableOpacity
          disabled = {(email == '' || password == '' || name == '')? true: false}
          onPress = {()=>onSignup()}
          activeOpacity={0.8} style={[styles.buttonLogin, {backgroundColor: (email == '' || password == '' || name == '') ? 'gray': '#00A3FF' }]   }  
        >
            <Text style = {{color: '#fff', fontSize: 18}}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {()=>navigation.navigate('Login')} activeOpacity={0.8} style={styles.buttonFB}>
            <Icon
              name="facebook"
              size={22}
              color="#ffff"
              style={{marginEnd: 6}}
            />
            <Text style={styles.textLogin}>
              Have an account? Login now
            </Text>           
          </TouchableOpacity>

        </View>      
      </KeyboardAwareScrollView>
   
    
    
      </LinearGradient>
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,   
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
  }
});
export default Signup;
