import React, {useRef} from 'react';
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
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
const {width, height} = Dimensions.get('window');
const Login = () => {
    const navigation = useNavigation();
    const refPassword = useRef(null);
   
  return (
    <SafeAreaView style={styles.container}>
     
      <LinearGradient
        colors={['#833AB4', '#C13584', '#E1306C']}
        style={styles.gradient}>
      <KeyboardAwareScrollView      
      contentContainerStyle = {styles.KeyboardAwareScrollView}
      showsVerticalScrollIndicator = {false}>         
      <Image  
            style={styles.logo}
            source={require('../assets/images/logo4.png')}
          />
         
        <View style = {styles.containerLoginForm}>
        <TextInput
            style={[styles.textInput, {marginBottom: 8}]}
            placeholder="Number, username or email"
            placeholderTextColor = '#546e7a'
            keyboardType  = 'email-address'
            returnKeyType = 'next'
            onSubmitEditing = {()=>refPassword.current.focus()}
          />
          <TextInput
            style={[styles.textInput, {marginBottom: 6}]}
            placeholder="Your password"
            placeholderTextColor = '#546e7a'
            secureTextEntry
            returnKeyType = 'done'
       
            ref = {refPassword}           
            onSubmitEditing = {()=>navigation.navigate('Home')}
          />
          <TouchableOpacity activeOpacity={0.8} style = {{alignSelf:'flex-end'}}>
            <Text style={styles.textForgotPassword}>Forgot your password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {()=>navigation.navigate('Home')}
          activeOpacity={0.8} style={styles.buttonLogin      }  
        >
            <Text style = {{color: '#fff', fontSize: 18}}>Log In</Text>
          </TouchableOpacity>
        
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonFB}>
            <Icon
              name="facebook"
              size={22}
              color="#ffff"
              style={{marginEnd: 6}}
            />
            <Text style={styles.textLogin}>
              Continue with Facebook
            </Text>           
          </TouchableOpacity>
          <Text style={{color:'#c4c4c4c4'}}>
              Or
            </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonFB}>           
            <Text style={styles.textLogin}>
              Sign Up
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
    backgroundColor: '#00A3FF',
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
  }
});
export default Login;
