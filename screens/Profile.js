import React, {useRef, useState} from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, Animated, FlatList, SafeAreaView } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Swipeable from "react-native-gesture-handler/Swipeable";
import tab from '../components/tab'
import TopTab from "../navigation/TopTabNavigation";
import FImage from 'react-native-fast-image';
const Tab = createMaterialTopTabNavigator();
const {width, height} = Dimensions.get('window');

const Profile = () => {
 
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
    const User = 
        {user: 'aqua.error',
        urlImage: 'https://instagram.fsgn7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/136943338_390558105575066_810449655692537558_n.jpg?_nc_ht=instagram.fsgn7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=aYpgxP8RlPQAX_8tlLe&tp=1&oh=c1eaee838788257414bab88bca3d6c72&oe=602E527D',
        intro:
         `📱|𝑾𝒐𝒓𝒌 𝑶𝒏 𝑴𝒐𝒃𝒊𝒍𝒆\n💰|𝑭𝒓𝒆𝒆 𝑾𝒐𝒓𝒌\n⭐|𝑪𝒐𝒎𝒎𝒊𝒔𝒔𝒊𝒐𝒏𝒊 𝑨𝒑𝒆𝒓𝒕𝒆`,
        post: 52,
        follow: ['mmyyxx',  'miu.1301', 'svg'],
        follwing: ['mmyyxx', 'rena', 'sena']
    }

    const scrollY = useRef(new Animated.Value(0)).current; 
    
     const maxTop = 40;
     const minTop = -245;
     const topScroll = scrollY.interpolate({
       inputRange: [0,  maxTop - minTop],
       outputRange: [maxTop, minTop + 40 + 40 ], //header + tab 
       extrapolate: 'clamp'
     })

    renderHeader = () =>{
        return(
            <View style = {styles.containerHeader}>
                <View style = {{flexDirection:'row', justifyContent:'center'}}>
                    <Text style = {styles.userName}>{User.user}</Text>
                    <Icon name = 'chevron-down' size = {26}  style = {{bottom: -2}}/>
                </View>
                <View style = {{flexDirection: 'row'}}>
                <Icon name = 'plus' size = {28} color = 'black' style = {{marginEnd: 12}} />
                    <Icon name = 'menu' size = {28} color = 'black' />
                </View>
            </View>
        )
    } 
  
    
   const renderInfo = () => { //heigh: 255
        return (
          <Animated.View style={[styles.containerInfo, {top: topScroll}]}>
            {/* header */}
            <View style={styles.headerInfo}>
              <View
                style={{                
                  width: width / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: User.urlImage}}
                  style={{width: 90, height: 90, borderRadius: 45}}
                />
              </View>
             <View style = {{flexDirection: 'row', width: width -width /3, paddingEnd: 4}}>
             <View
                style={{                
                     flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 2
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>52</Text>
                <Text>Bài viết</Text>
              </View>
              <View
                style={{                
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 2
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{User.follow.length}</Text>
                <Text numberOfLines = {1}>Người theo dõi</Text>
              </View>
              <View
                style={{              
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 2
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{User.follwing.length}</Text>
                <Text numberOfLines = {1}>Đang theo dõi</Text>
              </View>
             </View>
            </View>
            {/* intro */}
            <Text  numberOfLines = {3} style = {{marginHorizontal: 30, alignContent: 'center',  height: 60, }}>
                {User.intro}
            </Text>
           <View style = {{}}>
           <TouchableOpacity style = {{height: 25, width: '70%', borderWidth: 1, borderColor: 'gray',  backgroundColor:'#fff',   borderRadius: 3, justifyContent:'center', alignItems:'center', alignSelf:'center', marginBottom: 20}}> 
                  <Text>Chỉnh sửa trang cá nhân</Text>
            </TouchableOpacity>
           </View>
         
           <View>
           <View style = {{flexDirection:'row', alignItems:'flex-end', height: 40}}>
              <TouchableOpacity style = {{justifyContent:'center', alignItems:'center', height: 40, backgroundColor: '#fff', width: width/2,}}>
                  <Icon name = 'view-dashboard-outline' size = {26} />                              
              </TouchableOpacity>
              <TouchableOpacity style = {{justifyContent:'center', alignItems:'center', height: 40, backgroundColor: '#fff', width: width/2}}>
                <Icon name = 'contacts-outline' size = {26} />
              </TouchableOpacity>
            </View>
           </View>
           
          </Animated.View>
        );
    }
    function renderitem({item}){
      return(
        <TouchableOpacity

        // onLongPress={() => {
        //   setItemPost(item);
        //   setvisible(true);
        // }}
        activeOpacity={0.9}
        style={{}}>
          {/* <View style = {{width: width/3, height: height/3}}></View> */}
        <FImage
         
         style={{ width: width/3, height: width/3 }}
        source={{
            uri: item.urlImage,
            headers: { Authorization: 'someAuthToken' },
            priority: FImage.priority.normal,
        }}
        resizeMode={FImage.resizeMode.cover}
        />
      </TouchableOpacity>
      )
    }
  const  renderRightActions = (progress, dragX) =>{

    
    const scale = dragX.interpolate({
      inputRange: [-250, -150, -50, 0],
      outputRange:[1, 0.7, 0.3, 0],
      extrapolate:'clamp'
    })
      return(
        <Animated.View style = {{transform: [{scale: scale}]}}>
          <FlatList 
          removeClippedSubviews
          disableVirtualization
        scrollsToTop = {true}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        data = {Posts}
        numColumns = {3}
        onScroll={Animated.event([
      { nativeEvent: { contentOffset: { y: scrollY } } }
    ])}
      scrollEventThrottle={16}
      style = {{paddingTop: -minTop   }} 
     
     renderItem = {(item)=>renderitem(item)}
     />
        </Animated.View>
      )
    }
    return (
        <SafeAreaView style = {{flex :1}}> 
            {renderHeader()}
            {renderInfo()}     
            <ScrollView  onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}        
            scrollEventThrottle={16}
            style = {{  zIndex: 0,}}  
           >
             <Swipeable renderRightActions = {renderRightActions}  >
             <FlatList
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
              data = {Posts}
              numColumns = {3}
              onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}
            scrollEventThrottle={16}
            style = {{paddingTop: -minTop   }} 
           
           renderItem = {(item)=>renderitem(item)}
           />
             </Swipeable>
    
                   </ScrollView> 
                   
          
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerHeader: {
        flexDirection: 'row',
        height: 40,
        width: width,        
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 12,
        borderBottomWidth: 0.4,
        borderColor:'gray',
        backgroundColor:'#ffff',
        zIndex: 2
       
    },
    containerInfo: {
        position:'absolute',
        width: width,       
        zIndex: 1  , 
        backgroundColor:'#fff'      
    },
    headerInfo: {
        flexDirection: 'row',
        height: 100,       
    },
    userName :{
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default Profile
