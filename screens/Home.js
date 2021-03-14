import React, {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PushNotification from 'react-native-push-notification'
import Story from '../components/StoryComponent';
import Post from '../components/PostComponent';

const Home = () => {
  useEffect(() => {
  
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
    testPush()
  }, [])
  
  const testPush = () => {
    //alert('f')
    PushNotification.localNotification({
     
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
     
    });
  }
  return (
    //  <StatusBar barStyle ='dark-content'>
    <SafeAreaView style={{flex: 1}}>
      {renderHeader()}

      <ScrollView maximumZoomScale={5} showsVerticalScrollIndicator = {false}>
        {renderStories()}
        <Post item={posts[0]} />
        <Post item={posts[1]} />
        <Post item={posts[2]} />
        <Post item={posts[3]} />        
      </ScrollView>
    </SafeAreaView>
    //  </StatusBar>
  );
};
renderPost = () => {};
renderHeader = () => {
  return (
    <View style={styles.containerHeader}>
      <Image
        source={require('../assets/images/logo3.png')}
        style={styles.logo}
        resizeMode="stretch"
      />
      <Icon name="send" size={26} color="gray" />
    </View>
  );
};
renderStories = () => {
  return (
    <FlatList
      style={{marginTop: 8}}
      data={user}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={user.name}
      renderItem={(item) => Story(item)}
    />
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 2,
    borderBottomWidth: 0.2,

    borderColor: 'gray',
  },
  logo: {
    width: 130,
    height: 30,
  },
});
const user = [
  {
    name: 'Marry',
    image: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/155806873_150481760168912_6301902805152248664_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=QI2wlTvL2KwAX9eo0s0&oh=300a0661bee6314aa8b6edbc7c5e28e3&oe=606A995C',
    ],
  },
  {
    name: 'mmyyxx',
    image: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/156401037_146089710618463_4999696311250436476_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=n9wiTFYdgDcAX_aLbQa&oh=0dfe118d5b1ecca0dd399fa06f050309&oe=606A0AC5',
    ],
  },
  {
    name: 'Kieu',
    image: [
      'https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/155907296_1345080935856441_2271993443001217013_n.jpg?tp=1&_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=p_6dXT33u8QAX_8lRzh&oh=8d071ba94d9c0bf8e4c0bea2429f3638&oe=606A3148',
    ],
  },
  {
    name: 'Luxy',
    image: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/156298993_283556740016381_1344130950368688767_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=105&_nc_ohc=138g5FG9r0UAX8s5FXg&oh=df5b43f8a7ebb2758988466676fbe668&oe=6068FBAA',
    ],
  },
  {
    name: 'Trang',
    image: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/155925126_521504002170696_2888709443077167427_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=jBXLz6BzjKAAX_CAtak&oh=43c7d2cbb0c6a0e478a25f9784553403&oe=606C5300',
    ],
  },
  {
    name: 'Kery',
    image: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/156264101_429519671462251_5052499891791548361_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=yhRPuJt6crQAX_4eLTJ&oh=4b163e7d1599c3074e86b613bf460b36&oe=606B59FE',
    ],
  },
  {
    name: 'BeDauTay',
    image: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/154935482_270019247867166_5229810550483963569_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=IjsTrkwMkWUAX-5Q6QY&oh=99700688495c5c0b887e04ee75e628be&oe=6068CC37',
    ],
  },
];
const posts = [
  {
    user: 'mmyyxx',
    avatar:
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/156401037_146089710618463_4999696311250436476_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=n9wiTFYdgDcAX_aLbQa&oh=0dfe118d5b1ecca0dd399fa06f050309&oe=606A0AC5',
    content: ' Vitamin ngủ ngonnn 😍🌹❤️',
    like: 903,
    time: '9p',
    images: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/155914718_433155937770444_4664812381683004961_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=3Ca3PWZ_70cAX9C_ka_&oh=2bfcf0ba6d316eea3ac254811cda1b70&oe=60698BB6',
    ],
  },
  {
    user: 'aqua.52',
    avatar:
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/156259327_495587185179156_8425616987003641997_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=DKABiTL5yx8AX905CHu&oh=2249aa5c528ca5dfbb9eda3bcdf4ed0a&oe=6069020C',
    content:
      'Hết noel rồi ... đã bảo k thích noel rồi ý ... khộ ghê ... đã bảo k thích rùi ý ... mệt lém í ... 😆😆😆',
    like: 903,
    time: '9p',
    images: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/156259327_495587185179156_8425616987003641997_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=DKABiTL5yx8AX905CHu&oh=2249aa5c528ca5dfbb9eda3bcdf4ed0a&oe=6069020C',
    ],
  },
  {
    user: 'aqua.52',
    avatar:
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/155873141_824416265084441_4839298820090551813_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=105&_nc_ohc=khPh5wZrX0oAX8kX1ZT&oh=11c2c295b9765e8e571af037261a449e&oe=606939CE',
    content:
      'Hết noel rồi ... đã bảo k thích noel rồi ý ... khộ ghê ... đã bảo k thích rùi ý ... mệt lém í ... 😆😆😆',
    like: 903,
    time: '9p',
    images: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/155873141_824416265084441_4839298820090551813_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=105&_nc_ohc=khPh5wZrX0oAX8kX1ZT&oh=11c2c295b9765e8e571af037261a449e&oe=606939CE',
    ],
  },
  {
    user: 'aqua.52',
    avatar:
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/156778283_865575777627048_1488012417894927812_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=BARP8hBqweIAX-DRvVP&oh=09c7bae8921b615288fc24229a8ab1ec&oe=606A4972',
    content:
      'Hết noel rồi ... đã bảo k thích noel rồi ý ... khộ ghê ... đã bảo k thích rùi ý ... mệt lém í ... 😆😆😆',
    like: 903,
    time: '9p',
    images: [
      'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/156778283_865575777627048_1488012417894927812_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=BARP8hBqweIAX-DRvVP&oh=09c7bae8921b615288fc24229a8ab1ec&oe=606A4972',
    ],
  },

];
export default Home;
