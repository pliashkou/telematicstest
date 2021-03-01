import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const NavigationButton = ({ title, onPress }) => {
  return (
    <View style={styles.button}>
      <Button
        title={title}
        onPress={onPress}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    alignSelf: 'center',
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 30
  }
});

export default NavigationButton;