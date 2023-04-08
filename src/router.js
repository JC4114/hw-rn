import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/auth/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen';
import Home from './screens/Home'

const AuthStack = createNativeStackNavigator();

export const useRoute = () => {
  return (
    <AuthStack.Navigator initialRouteName="login">
      <AuthStack.Screen name='home' component={Home} options={{headerShown:false}} />
      <AuthStack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name='registration' component={RegistrationScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};