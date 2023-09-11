import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Screens/Login";
import MobileLogin from "./Screens/MobileLogin";
import Home from "./Screens/Home";

const Stack = createStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Mobile Login"
        component={MobileLogin}
        />
        <Stack.Screen
        name="Home"
        component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}