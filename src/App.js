import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Routers />
    </NavigationContainer>
  );
};
export default App;
