import React from 'react'

const Stack = createNativeStackNavigator();

export default  CreateStack = () => {
  return (
     <Stack.Navigator>
         <Stack.Screen name='home'/>
     </Stack.Navigator>
  )
}
