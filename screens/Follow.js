import React,{useRef} from 'react'
import { View, Text, ScrollView, FlatList, Image, Animated } from 'react-native'

const Follow = () => {
  const maxHeigh = 200;
  const minHeigh = 50;
  const scrollDistance = maxHeigh - minHeigh;
  const scrollY = useRef(new Animated.Value(0)).current; 

  const headerScrollHeight = scrollY.interpolate({
    inputRange: [0, scrollDistance],
    outputRange: [maxHeigh, minHeigh],
    extrapolate: "clamp"
});
  return (
    <View style = {{flex: 1}}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: headerScrollHeight,
          backgroundColor: 'red',
          overflow: 'hidden',     
          zIndex: 1,
        }}></Animated.View>

<ScrollView 
        onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}
        scrollEventThrottle={16}
      >
        <View style={{ paddingTop: maxHeigh }}>
          {/** Page contant goes here **/}

          <View style={{ padding: 20 }}>
            <Text>React Native Collapsible Header</Text>
          </View>

          <View style={{ padding: 20, height: 200, backgroundColor: "red" }}>
            <Text>View 1</Text>
          </View>

          <View style={{ padding: 20, height: 200, backgroundColor: "yellow" }}>
            <Text>View 1</Text>
          </View>

          <View style={{ padding: 20, height: 200, backgroundColor: "green" }}>
            <Text>View 1</Text>
          </View>
        </View>
      </ScrollView>

    </View>        
  );
}

export default Follow
