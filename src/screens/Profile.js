import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StatusBar } from 'expo-status-bar'
import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, StatusBar as StatusBarNative, ScrollView, Image, Dimensions } from 'react-native'
import { Iconify } from 'react-native-iconify'
import UserPosts from '../components/UserPosts'
import { USER } from './../api/User';

const ISUSER = true

const Tab = createMaterialTopTabNavigator();

const Profile = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#0000', flex: 1 }}>
      <StatusBar style='inverted' backgroundColor={'#000'} />
      {/*
    */}
      <View style={{ borderWidth: 0, backgroundColor: '#0000', padding: 10, paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', top: StatusBarNative.currentHeight, left: 0, zIndex: 1, }}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#1118', width: 30, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: 'center', }}>
            <Iconify icon='majesticons:arrow-left' color={'#FFF'} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ backgroundColor: '#1118', width: 30, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: 'center', }}>
            <Iconify icon='majesticons:search-line' color={'#FFF'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#1118', width: 30, height: 30, borderRadius: 30, alignItems: 'center', justifyContent: 'center', }}>
            <Iconify icon='iconamoon:menu-kebab-vertical-bold' color={'#FFF'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, top: StatusBarNative.currentHeight }}>
        <View style={{ backgroundColor: '#FFF', paddingBottom: 15 }}>
          <View>
            <View>
              <Image source={{ uri: USER.banner }}
                style={{ width: '100%', height: 'auto', aspectRatio: 3 / 1, }}
              />
            </View>
            <View style={{ position: 'relative' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 7, paddingTop: 10, paddingRight: 10 }}>
                {ISUSER ?
                  <TouchableOpacity style={{ height: 33, width: 100, borderRadius: 50, fontWeight: '700', borderWidth: 1, borderColor: '#AAAA', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: '600', }}>Edit Profile</Text>
                  </TouchableOpacity>
                  :
                  <View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#BBB', width: 35, height: 35, borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
                      <Iconify icon='mingcute:mail-line' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#BBB', width: 35, height: 35, borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
                      <Iconify icon='mingcute:notification-line' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 33, width: 100, borderRadius: 50, fontWeight: '700', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontWeight: '700', color: '#FFF' }}>Follow</Text>
                    </TouchableOpacity>
                  </View>
                }
              </View>
              <View style={{
                top: -40,
                position: 'absolute',
                paddingLeft: 15, flexDirection: 'row'
              }}>
                <View style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 5, borderColor: '#FFF', overflow: 'hidden' }}>
                  <Image source={{ uri: USER.image }}
                    style={{ width: 70, height: 70 }}
                  />
                </View>
              </View>
            </View>
            <View style={{ paddingHorizontal: 10, gap: 12, paddingVertical: 5 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={{ fontSize: 26, fontWeight: '700' }}>{USER.name}</Text>
                <Text style={{ fontSize: 14, color: '#45535d' }}>@{USER.username}</Text>
              </TouchableOpacity>
              <View>
                <Text style={{ fontSize: 15 }}>{USER.bio}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
                <Iconify icon='solar:calendar-linear' size={14} color={'#45535d'} />
                <Text style={{ color: '#45535d' }}>Joined {USER.joined}</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <Text style={{ fontSize: 14, color: '#45535d' }}>
                    <Text style={{ color: '#333', fontWeight: '700' }}>{USER.followings} </Text>Following
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <Text style={{ fontSize: 14, color: '#45535d' }}>
                    <Text style={{ color: '#333', fontWeight: '700' }}>{USER.followers} </Text>Followers
                  </Text>
                </TouchableOpacity>
              </View>
              {/**
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 7 }}>
                <Text style={{ color: '#45535d', fontSize: 13 }}>Not followed by anyone you're following</Text>
              </View>
             */}
            </View>
          </View>
        </View>

        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { elevation: 0 },
            tabBarLabelStyle: { textTransform: 'capitalize', fontWeight: '700' },
            tabBarIndicatorContainerStyle: { borderBottomWidth: .5, borderBottomColor: '#8599a9' },
            tabBarIndicatorStyle: { height: 5, borderRadius: 100, bottom: -3 },
            tabBarScrollEnabled: true,
            tabBarItemStyle: { width: 100},
          }}
          overScrollMode={'never'}
        >
          <Tab.Screen name="Posts" component={UserPosts} />
          <Tab.Screen name="Replies" component={UserPosts} />
          <Tab.Screen name="Highlights" component={UserPosts} />
          <Tab.Screen name="Media" component={UserPosts} />
          <Tab.Screen name="Likes" component={UserPosts} />
        </Tab.Navigator>
      </View>

    </View>
  )
}

export default Profile