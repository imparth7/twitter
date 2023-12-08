import React from 'react'
import { Button, Image, ScrollView } from 'react-native';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserPosts from '../components/UserPosts';

const Tab = createMaterialTopTabNavigator()

const Home = ({ navigation }) => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { elevation: 0 },
        tabBarLabelStyle: { textTransform: 'capitalize', fontWeight: '700' },
        tabBarIndicatorContainerStyle: { borderBottomWidth: .5, borderBottomColor: '#8599a9' },
        tabBarIndicatorStyle: { height: 4, borderRadius: 5, bottom: -2.5 },
      }}
      overScrollMode={'never'}
    >
      <Tab.Screen name="For you" component={UserPosts} />
      <Tab.Screen name="Following" component={UserPosts} />
    </Tab.Navigator>
  );
}

export default Home