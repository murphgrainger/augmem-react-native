import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Screens/Home';
import Store from './Screens/Store';
import Retrieve from './Screens/Retrieve';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Store" component={Store}/>
        <Stack.Screen name="Retrieve" component={Retrieve}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
