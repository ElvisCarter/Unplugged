import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChatScreen, LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
