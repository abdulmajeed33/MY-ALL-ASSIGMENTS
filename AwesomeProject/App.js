/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './src/screen/OnBoardScreen';
import TabBar from './src/Navigation/TabBar';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="onBoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="PurePrivicy" component={TabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
