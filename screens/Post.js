import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Animated,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import * as Progress from 'react-native-progress';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
const Post = () => {
  const btRef = useRef(null);
  const navigation = useNavigation();
  const [isOpen, setisOpen] = useState(true);
  const [transferred, setTransferred] = useState(0);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [keyPost, setKeyPost] = useState('');
  const [imagesUri, setImagesUri] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [albums, setAlbums] = useState([]);
  const [felling, setFelling] = useState([]);
  const [user, setUser] = useState(Object);
  const [tagFriends, setTagFriends] = useState([]);
  const [toAlubum, setToAlbum] = useState('');

  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .onSnapshot((snap) => {
        setUser(snap.data());
        // alert(JSON.stringify(user))
      });
  }, []);
  // alert(JSON.stringify(currentUser))
  const uploadImages = async () => {
    setTransferred(0);
    setIsUploading(true);
    //
    var fileName = '';
    const Images = [];
    for (const i of images) {
      fileName = i.substring(i.lastIndexOf('/') + 1);
      const task = storage()
        .ref(`ImagesPost/${auth().currentUser.uid}/${keyPost}/${fileName}`)
        .putFile(i);
      task.on('state_changed', (snapshot) => {
        // setTransferred(
        //   transferred +
        //     (Math.round(snapshot.bytesTransferred / snapshot.totalBytes) *
        //       10000 *
        //       100) /
        //       images.length,
        // );
        console.log(transferred);
      });
      try {
        console.log('start task');
        await task;
        console.log('end task');
      } catch (e) {
        console.log(e);
      }
      //console.log('start push');
     await Images.push(
        await storage()
          .ref(`ImagesPost/${auth().currentUser.uid}/${keyPost}/${fileName}`)
          .getDownloadURL(),
      );
    }
    console.log('start update');
    firestore().collection('Posts').doc(keyPost).update({
      Images: Images,
    });
    console.log('end update');
    setIsUploading(false);
    clearContent();
  };
  const clearContent = () => {
    alert(`xong òy nè :3`);
    setImages([]);
    setPostContent('');
    navigation.navigate('Home');
  };
  const onPost = async () => {
    firestore()
      .collection('Posts')
      .add({
        User: auth().currentUser.uid,
        Time: firestore.FieldValue.serverTimestamp(),
        PostAudience: user.PostAudience,
        Felling: felling,
        Content: postContent,
        Images: imagesUri,
        Album: toAlubum,
        TagFriends: tagFriends,
        Like: 0,
        Comments: '',
        Share: 0,
      })
      .then((post) => {       
        setKeyPost(post.id);
        // upload image
        images.length === 0 ? clearContent() : uploadImages();
      });
  };

  const renderVerticalBottomSheet = () => {
    return (
      <ScrollView
        nestedScrollEnabled
        style={{
          backgroundColor: 'white',
          height: 200,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            borderTopWidth: 0.5,
            alignItems: 'center',
            height: 40,
          }}
          onPress={() => openPicker()}>
          <Icon
            name="image-plus"
            size={24}
            color="#66bb6a"
            style={{marginHorizontal: 16}}
          />
          <Text>Thêm ảnh/video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            borderTopWidth: 0.5,
            alignItems: 'center',
            height: 40,
          }}
          onPress={() => openCamera()}>
          <Icon
            name="account-multiple-plus"
            size={24}
            color="#2196f3"
            style={{marginHorizontal: 16}}
          />
          <Text>Gắn thẻ bạn bè</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            borderTopWidth: 0.5,
            alignItems: 'center',
            height: 40,
          }}>
          <Icon
            name="emoticon-kiss-outline"
            size={24}
            color="#f57f17"
            style={{marginHorizontal: 16}}
          />
          <Text>Cảm xúc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            borderTopWidth: 0.5,
            alignItems: 'center',
            height: 40,
          }}>
          <Icon
            name="map-marker-plus"
            size={24}
            color="#ef5350"
            style={{marginHorizontal: 16}}
          />
          <Text>Check in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            borderTopWidth: 0.5,
            alignItems: 'center',
            height: 40,
            borderBottomWidth: 0.5,
          }}
          onPress={() => openCamera()}>
          <Icon
            name="camera"
            size={24}
            color="#6ec6ff"
            style={{marginHorizontal: 16}}
          />
          <Text>Camera</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  const progress = () => {
    return (
      <View style={{height: 42, justifyContent: 'center'}}>
        <Progress.CircleSnail color={['red', 'green', 'blue']} size={25} />
      </View>
    );
  };
  const renderHorizontalBottomSheet = () => {
    return (
      <TouchableOpacity
        onPress={() => btRef.current.snapTo(0)}
        style={{
          padding: 16,
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 0.5,
          borderTopColor: 'gray',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
        }}>
        <Text>Thêm vào bài viết của bạn</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon
            name="image-plus"
            size={24}
            color="#66bb6a"
            style={{marginHorizontal: 8}}
          />
          <Icon
            name="account-multiple-plus"
            size={24}
            color="#2196f3"
            style={{marginHorizontal: 8}}
          />
          <Icon
            name="emoticon-kiss-outline"
            size={24}
            color="#f57f17"
            style={{marginHorizontal: 8}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const ButtonPost = () => {
    return (
      <TouchableOpacity
        onPress={() => onPost()}
        activeOpacity={0.7}
        style={{
          height: 25,
          width: 75,
          borderRadius: 4,
          backgroundColor:
            postContent === '' && images.length === 0
              ? 'rgba(0,0,0,0.2)'
              : '#0277bd',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: postContent === '' && images.length === 0 ? 'gray' : '#fff',
          }}>
          Post
        </Text>
      </TouchableOpacity>
    );
  };
  const renderHeader = () => {
    return (
      <View
        style={{
          height: 42,
          justifyContent: 'space-between',
          paddingHorizontal: 8,
          borderWidth: 0.3,
          borderBottomColor: 'gray',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold'}}>Tạo bài viết</Text>
        {isUploading ? progress() : ButtonPost()}
      </View>
    );
  };
  const renderInfo = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          alignItems: 'center',
          paddingStart: 10,
        }}>
        <Image
          source={{
            uri:
              'https://scontent-hkt1-2.cdninstagram.com/v/t51.2885-15/e35/155170766_5766480330090559_8803956919614518998_n.jpg?tp=1&_nc_ht=scontent-hkt1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=ZUuQB5sOrnAAX-aE_hw&oh=d1f70358e582c9add56805271c9f7ea4&oe=606962F5',
          }}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
        <View style={{height: 50, marginStart: 8}}>
          <Text style={{fontWeight: 'bold'}}>{user.Name}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate('PostAudience', {
                  PostAudience: user.PostAudience,
                });
              }}
              style={{
                height: 20,
                borderWidth: 0.5,
                paddingHorizontal: 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                flexDirection: 'row',
                marginHorizontal: 4,
              }}>
              <Icon name="earth" size={10} color="gray" />
              <Text style={{fontSize: 10}}>{user.PostAudience}</Text>
              <Icon name="menu-down-outline" size={10} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 20,
                borderWidth: 0.5,
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                flexDirection: 'row',
              }}>
              <Icon name="plus" size={10} color="gray" />
              <Text style={{fontSize: 10}}>Album</Text>
              <Icon name="menu-down-outline" size={10} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const inputContent = () => {
    return (
      <TextInput
        onTouchStart={() => btRef.current.snapTo(2)}
        multiline
        placeholder="Anh đang nghĩ gì dọ?"
        value={postContent}
        style={{width: width, fontSize: postContent.length < 50 ? 32 : 16}}
        onChangeText={(value) => {
          setPostContent(value);
        }}
      />
    );
  };
  const openPicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    }).then((imagess) => {
      if (imagess) {
        const paths = [];
        imagess.map((i) => {
          paths.push(i.path);
        });
        setImages(paths);
        // alert(images);
      }
    });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      includeExif: true,
    })
      .then((image) => {
        console.log('received image', image);
      })
      .catch((e) => alert(e));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {renderHeader()}
        <ScrollView style={{marginBottom: 90}}>
          {renderInfo()}
          {inputContent()}
          {images.map((i) => {
            return (
              <Image
                source={{uri: i}}
                style={{
                  width: width,
                  height: height / 2,
                  marginTop: 40,
                  marginBottom: 4,
                }}
                resizeMode="cover"
              />
            );
          })}
        </ScrollView>
      </ScrollView>
      <BottomSheet
        ref={btRef}
        onCloseEnd={() => setisOpen(false)}
        onOpenStart={() => setisOpen(true)}
        snapPoints={[200, 200, 40]}
        renderContent={
          isOpen ? renderVerticalBottomSheet : renderHorizontalBottomSheet
        }></BottomSheet>
    </SafeAreaView>
  );
};

export default Post;
