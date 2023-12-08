import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import Home from './../screens/Home';
import Community from './../screens/Community';
import Search from './../screens/Search';
import Notification from './../screens/Notification';
import Message from './../screens/Message';
import { Posts, USER } from '../api/User';

const Tab = createBottomTabNavigator()

const TabLayout = ({ navigation }) => {

  const { width } = Dimensions.get('screen')

  const TabOptions = { tabBarShowLabel: false, tabBarActiveTintColor: 'red', headerShadowVisible: false, tabBarStyle: { elevation: 0, height: 60 } }

  const headerLeft = () => (
    <View style={{ width: 35, height: 35, borderRadius: 50, alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#112233' }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={1}>
        <Image
          source={{ uri: USER.image }}
          style={{ width: 35, height: 35, borderRadius: 50, objectFit: 'cover' }}
        />
      </TouchableOpacity>
    </View>
  )
  const headerRight = () => (
    <View style={{ width: 35, height: 35, borderRadius: 50, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={1}>
        <Iconify icon='solar:settings-linear' size={26} />
      </TouchableOpacity>
    </View>
  )
  const headerLeftRightContainerStyle = {
    headerLeftContainerStyle: { padding: 15 },
    headerRightContainerStyle: { padding: 15 },
    headerTitleStyle: { fontSize: 22 }
  }
  const searchTitle = (
    <View style={{ width: width - 150, height: '100%', borderRadius: 100, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#eff3f4' }}>
      <Text>Search X</Text>
    </View>
  )

  return (
    <Tab.Navigator
      screenOptions={TabOptions}
    >
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarBadge: '',
          tabBarBadgeStyle: { backgroundColor: 'steelblue', top: 13, left: 5, maxWidth: 5, maxHeight: 8 },
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <Iconify icon='mingcute:home-4-fill' size={26} />
                : <Iconify icon='mingcute:home-4-line' size={26} />
            )
          },
          tabBarLabel: 'Home',
          title: <Iconify icon='simple-icons:x' size={24} />,
          headerTitleAlign: 'center',
          headerLeft,
          headerRight,
          ...headerLeftRightContainerStyle,
        }}
      />
      <Tab.Screen name='Search' component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <Iconify icon='mingcute:search-fill' size={26} />
                : <Iconify icon='mingcute:search-line' size={26} />
            )
          },
          title: searchTitle,
          headerLeft,
          headerRight,
          ...headerLeftRightContainerStyle,
        }}
      />
      <Tab.Screen name='Community' component={Community}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <Iconify icon='mingcute:group-fill' size={26} />
                : <Iconify icon='mingcute:group-line' size={26} />
            )
          },
          headerLeft,
          headerRight,
          ...headerLeftRightContainerStyle,
        }}
      />
      <Tab.Screen name='Notification' component={Notification}
        options={{
          // Posts will be change to notification when is connected to real world data
          tabBarBadge: Posts.length,
          tabBarBadgeStyle: { backgroundColor: 'steelblue', position: 'absolute', top: 10, left: 0, borderWidth: 2, borderColor: 'white', height: 20, borderRadius: 22, padding: 1, fontSize: 10, fontWeight: '700' },
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <Iconify icon='mingcute:notification-fill' size={26} />
                : <Iconify icon='mingcute:notification-line' size={26} />
            )
          },
          headerLeft,
          headerRight,
          ...headerLeftRightContainerStyle,
        }}
      />
      <Tab.Screen name='Message' component={Message}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <Iconify icon='mingcute:mail-fill' size={26} />
                : <Iconify icon='mingcute:mail-line' size={26} />
            )
          },
          title: searchTitle,
          headerLeft,
          headerRight,
          ...headerLeftRightContainerStyle,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabLayout