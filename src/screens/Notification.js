import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import UserPosts from '../components/UserPosts';

const Tab = createMaterialTopTabNavigator()

const Notification = ({ navigation }) => {
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
      <Tab.Screen name="All" component={UserPosts} />
      <Tab.Screen name="Verified" component={UserPosts} />
      <Tab.Screen name="Mentions" component={UserPosts} />
    </Tab.Navigator>
  );
}

export default Notification