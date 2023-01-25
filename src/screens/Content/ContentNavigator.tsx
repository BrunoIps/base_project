import React, {useEffect} from 'react';
import {createBottomTab} from '../../utils/navigation';
import Home from './Home';
import Search from './Search';

const BottomTab = createBottomTab();
const ContentNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
      }}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Search} />
    </BottomTab.Navigator>
  );
};

export default ContentNavigator;
