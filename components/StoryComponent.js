import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const StoryComponent = ({item}) => {
  return (
   <View style = {styles.container}>
        <LinearGradient
      colors={['#F77737', '#8a3ab9', '#C13584', '#5851DB', '#FD1D1D']}
      
      style={styles.gradient}>
      <Image
        style={styles.image}
        source={{uri: item.image[0]}}
      />
    </LinearGradient>
    <Text style = {styles.name}>{item.name}</Text>
   </View>
  );
};
const styles = StyleSheet.create({
    container:{ 
        alignItems:'center'    
    },
  gradient: {
    
        height: 62,
        width: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 31,
        marginHorizontal: 6,
      
  },
  image:{
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name:{
      color:'#23395d'
  }
});

export default StoryComponent;
