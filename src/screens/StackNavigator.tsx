import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AuthNavigator from './Auth/AuthNavigator';
import {createStack} from '@mobile/utils/navigation';
import ContentNavigator from './Content/ContentNavigator';

const StackNavigation = createStack();
const StackNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StackNavigation.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigation.Screen name="Auth" component={AuthNavigator} />
      <StackNavigation.Screen name="Content" component={ContentNavigator} />
    </StackNavigation.Navigator>
  );
};

export default StackNavigator;
