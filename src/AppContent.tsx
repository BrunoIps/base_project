import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import StackNavigator from './screens/StackNavigator';
import NavigationService from './utils/navigation';

const AppContent = () => {
  return (
    <NavigationContainer
      ref={navigatorRef =>
        NavigationService.setTopLevelNavigator(navigatorRef)
      }>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppContent;
