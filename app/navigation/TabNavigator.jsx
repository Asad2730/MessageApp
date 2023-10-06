import React from 'react'
import { createBottomTabNavigator ,Text} from '@react-navigation/bottom-tabs';
import Chats from '../screens/Chats';;
import Calls from '../screens/Calls';
import Users from '../screens/Users';
import { Entypo,Feather } from '@expo/vector-icons'; 
import { Colors } from '../utils/colors';

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
      <Tab.Navigator screenOptions={{
         headerShown:false,
         headerShown:false,
         tabBarActiveTintColor:Colors.txt_white,
         tabBarStyle:{
            backgroundColor:Colors.primary_colr,
         }
         }}>
        <Tab.Screen name='chats' component={Chats} options={{
          tabBarLabel:'',
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name='calls' component={Calls} options={{
          tabBarLabel:'',
          tabBarIcon: ({ color }) => (
            <Feather name="phone-call" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name='users' component={Users} options={{
          tabBarLabel:'',
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={24} color="black" />
          ),
        }}/>
      </Tab.Navigator>
  )
}
