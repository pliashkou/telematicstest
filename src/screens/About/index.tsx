import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';

const TEXT = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
];

const AboutScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {TEXT.map((paragraph, idx) => (
          <Text
            key={idx.toString()}
            style={styles.paragraph}
          >
            {paragraph}
          </Text>
        ))}
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
  paragraph: {
    width: '96%',
    alignSelf: 'center',
    marginVertical: 20
  }
});

export default AboutScreen;