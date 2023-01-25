import {CommonActions} from '@react-navigation/native';

import {NavigationContainerRef} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

let navigator: NavigationContainerRef | undefined;

export const createStack = createNativeStackNavigator;
export const createBottomTab = createBottomTabNavigator;

const NavigationService = {
  setTopLevelNavigator(navigatorRef: NavigationContainerRef) {
    navigator = navigatorRef;
  },
  navigate(routeName: string, params?: any) {
    if (navigator) {
      navigator.dispatch(
        CommonActions.navigate({
          name: routeName,
          params,
        }),
      );
    }
  },
  goBack() {
    if (navigator) {
      navigator.dispatch(CommonActions.goBack());
    }
  },
  reset(routeName: string, params: any) {
    if (navigator) {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: routeName, params}],
      });
      navigator.dispatch(resetAction);
    }
  },
};

export default NavigationService;
