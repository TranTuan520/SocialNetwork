import { useBackButton } from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  BackHandler,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
const categories = [
  {
    category: 'IGTV',
  },
  {
    category: 'Du Lịch',
  },
  {
    category: 'Kiến Trúc',
  },
  {
    category: 'Trang Trí',
  },
  {
    category: 'Phong Cách',
  },
  {
    category: 'Nghệ Thuật',
  },
  {
    category: 'Tự Tay Làm',
  },
  {
    category: 'Làm Đẹp',
  },
  {
    category: 'TV Và Phim Ảnh',
  },
  {
    category: 'Thể Thao',
  },
  {
    category: 'Truyện Tranh',
  },
];
const Posts = [
  {
    user: 'mmyyxx',
    urlImage:
      'https://instagram.fsgn7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136943338_390558105575066_810449655692537558_n.jpg?_nc_ht=instagram.fsgn7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=aYpgxP8RlPQAX_8tlLe&tp=1&oh=c1eaee838788257414bab88bca3d6c72&oe=602E527D',
    like: 99,
  },
  {
    user: 'rena',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139027024_1589069887957754_7595135526030898728_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=NEzcA0W21vAAX-wivz3&tp=1&oh=0744e23d2e221986d0de01140ae64415&oe=602B8C1C',
    like: 99,
  },
  {
    user: 'airi',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
    like: 99,
  },
  {
    user: 'sena',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/137525778_3715474288512867_8204082987338777527_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=q6oqjgVGROAAX8FX-2J&tp=1&oh=f923bbbf9e8c626d5ea9c9817fe8a812&oe=602D6359&ig_cache_key=MjQ4NTczMzYxMTIyODU2NjgzMw%3D%3D.2',
    like: 99,
  },
  {
    user: 'airi',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/134406424_861768074597530_6386055446260632525_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=609UwbZCnmwAX-D-Zjb&tp=1&oh=bde4c21112bc9004752d57a1aad328dc&oe=602CB43C',
    like: 99,
  },
  {
    user: 'riki',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
    like: 99,
  },
  {
    user: 'ribi',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/128002872_191405115910836_822736510377552316_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=0cmd7HasooYAX893hZy&tp=1&oh=c5e764501abaa5bfff4267d28908673a&oe=602B6680',
    like: 99,
  },
  {
    user: 'hasagy',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138425911_320760755867046_5679684663346968231_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FKL129zHRxgAX-drWhH&tp=1&oh=a61f71ecd11c3bf3ac790b5b5ade9e0b&oe=602C9FC2',
    like: 99,
  },
  {
    user: 'mlemmlem',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/138342164_425520808652373_9220565189668521573_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=XEd5nsfwYccAX_UPfxY&tp=1&oh=65d1b4a17cd3457e114c51540b0b8bba&oe=602CB890&ig_cache_key=MjQ4NjM0MjI1NjY0NzQ0NTI1OQ%3D%3D.2',
    like: 99,
  },
  {
    user: 'zzzz',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136991524_1151790858588325_3895015240353904010_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=cwE8VEBJbLcAX_9DuoK&tp=1&oh=090033c4a65b190b7e8f31325ef4974c&oe=602B985D',
    like: 99,
  },
  {
    user: 'aduDảkWá',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/136650117_812277856296427_554900269540695418_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=SVyoBdcpTjcAX9X91Ld&tp=1&oh=2e0f823a570925b90404e6894302a16e&oe=602C5CF9&ig_cache_key=MjQ4MzQxNTE1OTY3MTA3MTE0NA%3D%3D.2',
    like: 99,
  },
  {
    user: 'sparklegirls__',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/139719443_468905344512875_4425224156134676043_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=7jIb7_ahqhIAX88IN8F&tp=1&oh=9bb9d1cd21d7a1e492766be16535aeeb&oe=602F63C2',
    like: 99,
  },
  {
    user: 'miu.1301',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139459279_249195700092187_7785132942267096475_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=o0mo9qTujYEAX9M_n_I&tp=1&oh=aff0e66a3eccb34924d957fa415a0ecb&oe=602D03F8',
    like: 99,
  },
  {
    user: 'xiaohetongxue.yo',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/139810281_244083657114665_7074834471165325517_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4E287HTfgj4AX_GTuFc&tp=1&oh=7c1665ff1491b1f82040df5efc281317&oe=6030484E',
    like: 99,
  },
  {
    user: 'xiaohetongxue.yo',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/140176427_217691299990396_5112242230946903840_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=-DVvIbk-psMAX_Wytbq&tp=1&oh=e46d879fbcb9d9ca55e192887ed7431f&oe=602FAA87',
    like: 99,
  },
  {
    user: 'sparklegirls__',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/140249674_157665365913966_3499535453396015560_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=O4_YPNhEKEQAX_W0NmI&tp=1&oh=e8d490099837fef19b7ba2005b6e237f&oe=60301294',
    like: 99,
  },
  {
    user: 'sparklegirls__',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139097972_478267369829570_9165295434734933175_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=CD7VfAOYVBIAX9T88Ku&tp=1&oh=c29ab25595c8c2144b819c282d38c864&oe=60306EFC',
    like: 99,
  },
  {
    user: 'ulzzangg_pretty',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139254897_343521766627491_7385440136704095156_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=FQZjdnLrGb4AX9muIA-&tp=1&oh=148cab9a1421d04ce86c88942ba8d3b6&oe=602E0279',
    like: 99,
  },
  {
    user: 'makenzie_raine',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/140008156_460225408337880_2125780460053502375_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=X3ZQ98kK_zEAX8MJ4RJ&tp=1&oh=4615e2b1106555a2e272e2273cd58a1d&oe=603054EB',
    like: 99,
  },
  {
    user: 'sparklegirls__',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139027024_1589069887957754_7595135526030898728_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=AjiLEiYc8YUAX-lyiFd&tp=1&oh=29dd8d8ac900af00344ff79f52bbb258&oe=602F809C',
    like: 99,
  },
  {
    user: 'mmyyxx',
    urlImage:
      'https://instagram.fsgn7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136943338_390558105575066_810449655692537558_n.jpg?_nc_ht=instagram.fsgn7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=aYpgxP8RlPQAX_8tlLe&tp=1&oh=c1eaee838788257414bab88bca3d6c72&oe=602E527D',
    like: 99,
  },
  {
    user: 'rena',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139027024_1589069887957754_7595135526030898728_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=NEzcA0W21vAAX-wivz3&tp=1&oh=0744e23d2e221986d0de01140ae64415&oe=602B8C1C',
    like: 99,
  },
  {
    user: 'airi',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138933677_868087293975928_4276258689558708869_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RXR-h6nXrioAX9JkXPz&tp=1&oh=aa4eedd85e1ef0f5efa244a0a2c2e6fa&oe=602CE4FD',
    like: 99,
  },
  {
    user: 'sena',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/137525778_3715474288512867_8204082987338777527_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=q6oqjgVGROAAX8FX-2J&tp=1&oh=f923bbbf9e8c626d5ea9c9817fe8a812&oe=602D6359&ig_cache_key=MjQ4NTczMzYxMTIyODU2NjgzMw%3D%3D.2',
    like: 99,
  },
  {
    user: 'airi',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/134406424_861768074597530_6386055446260632525_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=609UwbZCnmwAX-D-Zjb&tp=1&oh=bde4c21112bc9004752d57a1aad328dc&oe=602CB43C',
    like: 99,
  },
  {
    user: 'riki',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/125318130_407067327134426_5140667209929164754_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5u8H3YoPI7IAX-pk0v3&tp=1&oh=02908e2d4656188afc8eddad5eec3ea9&oe=602C6BCF',
    like: 99,
  },
  {
    user: 'ribi',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/128002872_191405115910836_822736510377552316_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=0cmd7HasooYAX893hZy&tp=1&oh=c5e764501abaa5bfff4267d28908673a&oe=602B6680',
    like: 99,
  },
  {
    user: 'hasagy',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/138425911_320760755867046_5679684663346968231_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FKL129zHRxgAX-drWhH&tp=1&oh=a61f71ecd11c3bf3ac790b5b5ade9e0b&oe=602C9FC2',
    like: 99,
  },
  {
    user: 'mlemmlem',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/138342164_425520808652373_9220565189668521573_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=XEd5nsfwYccAX_UPfxY&tp=1&oh=65d1b4a17cd3457e114c51540b0b8bba&oe=602CB890&ig_cache_key=MjQ4NjM0MjI1NjY0NzQ0NTI1OQ%3D%3D.2',
    like: 99,
  },
  {
    user: 'zzzz',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136991524_1151790858588325_3895015240353904010_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=cwE8VEBJbLcAX_9DuoK&tp=1&oh=090033c4a65b190b7e8f31325ef4974c&oe=602B985D',
    like: 99,
  },
  {
    user: 'aduDảkWá',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/e35/136650117_812277856296427_554900269540695418_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=SVyoBdcpTjcAX9X91Ld&tp=1&oh=2e0f823a570925b90404e6894302a16e&oe=602C5CF9&ig_cache_key=MjQ4MzQxNTE1OTY3MTA3MTE0NA%3D%3D.2',
    like: 99,
  },
  {
    user: 'sparklegirls__',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/139719443_468905344512875_4425224156134676043_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=7jIb7_ahqhIAX88IN8F&tp=1&oh=9bb9d1cd21d7a1e492766be16535aeeb&oe=602F63C2',
    like: 99,
  },
  {
    user: 'miu.1301',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139459279_249195700092187_7785132942267096475_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=o0mo9qTujYEAX9M_n_I&tp=1&oh=aff0e66a3eccb34924d957fa415a0ecb&oe=602D03F8',
    like: 99,
  },
  {
    user: 'xiaohetongxue.yo',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/139810281_244083657114665_7074834471165325517_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4E287HTfgj4AX_GTuFc&tp=1&oh=7c1665ff1491b1f82040df5efc281317&oe=6030484E',
    like: 99,
  },
  {
    user: 'xiaohetongxue.yo',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/140176427_217691299990396_5112242230946903840_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=-DVvIbk-psMAX_Wytbq&tp=1&oh=e46d879fbcb9d9ca55e192887ed7431f&oe=602FAA87',
    like: 99,
  },
  {
    user: 'sparklegirls__',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/140249674_157665365913966_3499535453396015560_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=O4_YPNhEKEQAX_W0NmI&tp=1&oh=e8d490099837fef19b7ba2005b6e237f&oe=60301294',
    like: 99,
  },
  {
    user: 'sparklegirls__',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139097972_478267369829570_9165295434734933175_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=CD7VfAOYVBIAX9T88Ku&tp=1&oh=c29ab25595c8c2144b819c282d38c864&oe=60306EFC',
    like: 99,
  },
  {
    user: 'ulzzangg_pretty',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139254897_343521766627491_7385440136704095156_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=FQZjdnLrGb4AX9muIA-&tp=1&oh=148cab9a1421d04ce86c88942ba8d3b6&oe=602E0279',
    like: 99,
  },
  {
    user: 'makenzie_raine',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/140008156_460225408337880_2125780460053502375_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=X3ZQ98kK_zEAX8MJ4RJ&tp=1&oh=4615e2b1106555a2e272e2273cd58a1d&oe=603054EB',
    like: 99,
  },
  {
    user: 'sparklegirls__',
    urlImage:
      'https://instagram.fsgn10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/139027024_1589069887957754_7595135526030898728_n.jpg?_nc_ht=instagram.fsgn10-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=AjiLEiYc8YUAX-lyiFd&tp=1&oh=29dd8d8ac900af00344ff79f52bbb258&oe=602F809C',
    like: 99,
  },
];
 
 
const Search = () => { 
  const scalePost = useRef(new Animated.Value(0)).current;
  const [visible, setvisible] = useState(false);
  const [itemPost, setItemPost] = useState([]);
  const  renderPosts = () => {
    return (
      <FlatList
        bounces={false}
        scrollEventThrottle={false}
        numColumns={3}
        contentContainerStyle={{}}
        data={Posts}
        renderItem={(item, index) => renderItemPost(item, index)}
        showsVerticalScrollIndicator={false}
        extraData={Posts}
        keyExtractor={(item, index) => index}
      />
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderPosts()}
      {modalPost(itemPost)}
    </View>
  );

  function renderItemPost({item}) {
    return (
      <TouchableOpacity
      delayLongPress = {300}
        onLongPress={() => {
          ScalePost();
          setItemPost(item);
          setvisible(true);
        }}
        activeOpacity={0.9}
        style={{}}>
        <Image
          resizeMethod="resize"
          source={{uri: item.urlImage}}
          style={{
            width: width / 3,
            height: width / 3,
            maxWidth: 250,
            maxHeight: 250,
            borderWidth: 0.7,
            borderColor: '#fff',
          }}
        />
      </TouchableOpacity>
    );
  }
  function ScalePost  (){
    Animated.spring(scalePost, {
      toValue: 1, 
      friction: 7,
      useNativeDriver: true,
      tension: 70,
      
    }).start()
  }

  function modalPost(itemPost) {
   
    return (
      <Modal visible={visible} onRequestClose = {()=>setvisible(false)} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => {
          Animated.spring(scalePost, {
            toValue: 0, 
            friction: 100,    
            tension: 360,                       
            useNativeDriver: true,
            // restSpeedThreshold: 1,
          }).start(()=>{
            setvisible(!visible)
          });
        
        }}
          >
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.7)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
           <TouchableWithoutFeedback>
           <Animated.View
              activeOpacity={1}
              style={{
                width: width - 100,
                height: height - 200,
                maxHeight: 900,
                maxWidth: 700,
                transform: [{scale: scalePost}]
              }}>
              <View
                style={{
                  height: 50,
                  backgroundColor: '#fff',
                  borderTopStartRadius: 10,
                  borderTopEndRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={{uri: itemPost.urlImage}}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 19,
                    marginStart: 8,
                   
                  }}
                />
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, marginStart: 8}}>
                  {itemPost.user}
                </Text>
              </View>
              <Image
                source={{uri: itemPost.urlImage}}
                style={{
                  width: width - 100,
                  height: height - 300,
                  maxHeight: 900,
                  maxWidth: 700,
                }}
              />
              <View
                style={{
                  height: 50,
                  backgroundColor: '#fff',
                  borderBottomStartRadius: 10,
                  borderBottomEndRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 32,
                }}>
                <Icon name="heart-outline" size={28} />
                <Icon name="account-circle-outline" size={28} />
                <Icon name="share-outline" size={28} />
                <Icon name="dots-vertical" size={28} />
              </View>
            </Animated.View>
           </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
};

const renderHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.subContainer}>
        {searchView()}
        <Icon name="magnify-scan" size={28} color="black" />
      </View>
      {renderCategories()}
    </View>
  );
};
const searchView = () => {
  return (
    <TouchableOpacity activeOpacity = {0.7} style={styles.searchContainer}>
      <Icon
        name="magnify"
        size={24}
        color="gray"
        style={{marginHorizontal: 6}}
      />
      <Text style={{color: 'gray'}}>Tìm kiếm</Text>
    </TouchableOpacity>
  );
};
const renderCategories = () => {
  return (
    <FlatList
      contentContainerStyle={{marginHorizontal: 16, height: 40}}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={(item) => renderCategoryItem(item)}
    />
  );
};
const renderCategoryItem = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.categoryContainer}>
      <Text style={{fontWeight: 'bold'}}>{item.category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 14,
    height: 60,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#ECEFF1',
    borderRadius: 8,
    width: '90%',
    maxWidth: 340,
    height: 40,
    marginEnd: 14,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  categoryContainer: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 6,
    marginEnd: 6,
    padding: 4,
    paddingHorizontal: 18,
    backgroundColor: '#ffff',
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Search;
