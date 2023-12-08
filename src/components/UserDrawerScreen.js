import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Iconify } from 'react-native-iconify';
import { USER } from '../api/User';

const UserDrawerScreen = (props) => {

  const navigation = useNavigation()

  const DrawerPageItems = [
    {
      name: 'Profile',
      navigateTo: 'Profile',
      icon: <Iconify icon='solar:user-linear' size={24} />
    },
    {
      name: 'Premium',
      navigateTo: 'Premium',
      icon: <Iconify icon='pajamas:x' size={24} />
    },
    {
      name: 'Bookmarks',
      navigateTo: 'Bookmarks',
      icon: <Iconify icon='solar:bookmark-linear' size={24} />
    },
    {
      name: 'Lists',
      navigateTo: 'Lists',
      icon: <Iconify icon='solar:document-text-linear' size={24} />
    },
    {
      name: 'Spaces',
      navigateTo: 'Spaces',
      icon: <Iconify icon='solar:microphone-large-linear' size={24} />
    },
    {
      name: 'Monetization',
      navigateTo: 'Monetization',
      icon: <Iconify icon='fluent-mdl2:money' size={24} />
    }
  ]

  const DrawerPageOption = [
    {
      name: 'Professional Tool'
    },
    {
      name: 'Settings & Support'
    },
  ]

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} style={{ flex: 1, position: 'relative', paddingHorizontal: 30 }}>
        <View style={{ borderBottomWidth: 1, borderColor: '#efefef', paddingVertical: 25, gap: 12 }}>
          <View style={{}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={{ uri: USER.image }}
                style={{ width: 45, height: 45, borderRadius: 50, }}
              />
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={{ fontSize: 18, fontWeight: '700' }}>{USER.name}</Text>
              <Text style={{ fontSize: 14, color: '#888' }}>@{USER.username}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={{ fontSize: 14, color: '#888' }}>
                <Text style={{ color: '#333' }}>{USER.followings} </Text>Following
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={{ fontSize: 14, color: '#888' }}>
                <Text style={{ color: '#333' }}>{USER.followers} </Text>Followers
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: '#efefef', paddingVertical: 30 }}>
          {DrawerPageItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => navigation.navigate(item.navigateTo)} activeOpacity={0.6}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 25, paddingVertical: 13 }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>{item.icon}</View>
                  <Text style={{ fontSize: 20, fontWeight: '700' }}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
        <View style={{ paddingVertical: 30 }}>
          {DrawerPageOption.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 25, paddingVertical: 13, justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Iconify icon='solar:alt-arrow-down-linear' size={24} />
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default UserDrawerScreen