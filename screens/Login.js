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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
const Login = () => {
    const refPassword = useRef(null);
    focusPassword =  ()=>{
        refPassword.current.focus()
    }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#833AB4', '#C13584', '#E1306C']}
        style={styles.gradient}>
        <KeyboardAvoidingView style={styles.containerLoginForm}>
          <Image  
            style={{width: 150, height: 150, margin: 6, marginVertical: 32}}
            source={require('../assets/images/logo4.png')}
          />
          <TextInput
            style={[styles.textInput, {marginBottom: 20}]}
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
          />
          <TouchableOpacity activeOpacity={0.8} style = {{alignSelf:'flex-end'}}>
            <Text style={styles.textForgotPassword}>Forgot your password</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonLogin}>
            <Text style = {{color: '#fff', fontSize: 18}}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonFB}>
            <Icon
              name="facebook"
              size={22}
              color="#ffff"
              style={{marginEnd: 6}}
            />
            <Text style={styles.textForgotPassword}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 4,
    marginHorizontal: 32,
  
    
  },
  textForgotPassword: {
    color: '#fff',    
    fontSize: 12   
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
  }
});
export default Login;
