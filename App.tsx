import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import HomeStack from './src/navigation/HomeStack';

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};