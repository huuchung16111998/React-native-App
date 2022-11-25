import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './router/rootStack';

export default function Home({navigation}) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
