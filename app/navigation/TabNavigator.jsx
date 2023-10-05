import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from '../screens/Chats';;
import Calls from '../screens/Calls';
import Users from '../screens/Users';

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name='chats' component={Chats}/>
        <Tab.Screen name='calls' component={Calls}/>
        <Tab.Screen name='users' component={Users}/>
      </Tab.Navigator>
  )
}
