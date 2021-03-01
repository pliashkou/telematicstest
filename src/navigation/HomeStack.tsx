import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import MyDriverScoreScreen from '../screens/MyDriverScore';
import MyTripsScreen from '../screens/MyTrips';

const SCREENS = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'About',
    component: AboutScreen,
  },
  {
    name: 'My Driver Score',
    component: MyDriverScoreScreen,
  },
  {
    name: 'My Trips',
    component: MyTripsScreen,
  },
];

const HomeStack = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName='Home'
    >
      {SCREENS.map(screen => (
        <Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Navigator>
  )
};

export default HomeStack;