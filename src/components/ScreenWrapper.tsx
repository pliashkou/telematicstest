import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';

const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
});

export default ScreenWrapper;