import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import RNSpeedometer from 'react-native-speedometer'

import ScreenWrapper from '../../components/ScreenWrapper';
import NavigationButton from '../../components/NavigationButton';

const HomeScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.speedometerWrapper}>

          <RNSpeedometer value={33} size={300} />
        </View>
        <NavigationButton
          title="My Driver Score"
          onPress={() => navigation.navigate('My Driver Score')}
        />
        <NavigationButton
          title="My Trips"
          onPress={() => navigation.navigate('My Trips')}
        />
        <NavigationButton
          title="About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  speedometerWrapper: {
    marginTop: 30,
    marginBottom: 50,
  }
});

export default HomeScreen;