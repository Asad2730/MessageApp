import React from 'react'
import Home from '../screens/Home';
import TabNavigator from './TabNavigator';
import MsgDetail from '../screens/MsgDetail';

const Stack = createNativeStackNavigator();

export default  CreateStack = () => {
  return (
     <Stack.Navigator initialRouteName='home'>
         <Stack.Screen name='home'component={Home}/>
          <Stack.Screen name='main' component={TabNavigator}/>
          <Stack.Screen name='chat-detail' component={MsgDetail}/>
     </Stack.Navigator>
  )
}
