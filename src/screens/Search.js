import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import UserPosts from '../components/UserPosts';

const Tab = createMaterialTopTabNavigator()

const Search = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { elevation: 0 },
        tabBarLabelStyle: { textTransform: 'capitalize', fontWeight: '700' },
        tabBarIndicatorContainerStyle: { borderBottomWidth: .5, borderBottomColor: '#8599a9' },
        tabBarIndicatorStyle: { height: 4, bottom: -2.5 },
        tabBarScrollEnabled: true,
        // tabBarItemStyle: { width: 'auto', paddingHorizontal: 10},
        tabBarItemStyle: { width: 'auto', paddingHorizontal: 15 },
      }}
      overScrollMode={'never'}
    >
      <Tab.Screen name="For you" component={UserPosts} />
      <Tab.Screen name="Trending" component={UserPosts} />
      <Tab.Screen name="News" component={UserPosts} />
      <Tab.Screen name="Sports" component={UserPosts} />
      <Tab.Screen name="Entertainment" component={UserPosts} />
    </Tab.Navigator>
  );
}

export default Search