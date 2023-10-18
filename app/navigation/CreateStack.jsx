import React from 'react'
import Home from '../screens/Home';
import TabNavigator from './TabNavigator';
import MsgDetail from '../screens/MsgDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../utils/colors';
import CustomIcon from '../components/customIcon';
import { Feather } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

export default CreateStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home} options={{headerShown:false }}/>
        <Stack.Screen name='main' component={TabNavigator} options={{headerShown:false }} />
        <Stack.Screen name='chat-detail' component={MsgDetail} options={{
           title:'',
           headerStyle:{
            backgroundColor:Colors.secondary_color
           },
           headerLeft:()=>(
            <CustomIcon userName={'Emma'}/>
           ),
           headerRight:()=>(
            <Feather name="phone-call" size={24} color={Colors.green_color} />
           )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
