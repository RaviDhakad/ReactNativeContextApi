import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardTwo from '../src/components/CardTwo'
import ThemeTogglerButton from '../src/theme/theme-toggler-button'
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ThemeTogglerButton" component={ThemeTogglerButton} />
        <Stack.Screen name="CardTwo" component={CardTwo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;