import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';
import TabLayout from './TabLayout';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import UserDrawerScreen from '../components/UserDrawerScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerTabScreen = ({ navigation }) => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerLeft: () => (
          <View>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        ),
        headerLeftContainerStyle: { paddingLeft: 20 },
        headerTitleAlign: 'center',
        drawerStyle: {
          width: '90%'
        }
      }}
      drawerContent={props => <UserDrawerScreen {...props} />}
    >
      <Drawer.Screen name='HomeScreen' component={TabLayout} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

const StackDrawerLayout = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
      }}
      // initialRouteName='Profile'
    >
      <Stack.Screen name='Tabs' component={DrawerTabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Profile' component={Profile}
        // options={{ headerStyle: { backgroundColor: '#0000' }, headerShadowVisible: false, headerTitle: ''}}
      options={{ headerShown: false }}
      />
      <Stack.Screen name='Notification' component={Notification}
      // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackDrawerLayout