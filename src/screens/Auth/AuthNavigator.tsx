import React, {useEffect} from 'react';
import {createStack} from '../../utils/navigation';
import SplashScreen from 'react-native-splash-screen';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import Registration from './Registration';

const AuthStack = createStack();
const AuthNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Welcome">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
