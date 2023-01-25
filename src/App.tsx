/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppContent from './AppContent';
import {SafeAreaView, StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <AppContent />
    </SafeAreaView>
  );
}

export default App;
