/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Home';
import TabBar from './src/Navigation/TabBar';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ScreenA" component={TabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
