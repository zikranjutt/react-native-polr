import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
// import {HomeScreen} from '~screens/app';
// import {Loader} from '~components';
import ScreenNames from './routes';
import BottomTab from './BottomTabs';
import { IntroScreen, Login } from '~screens/auth';
import { selectIsLogin } from '~redux/slices/authSlice';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <NavigationContainer>
      {/* <Loader /> */}
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.IntroScreen}
          screenOptions={{header: () => false}}>
          <Stack.Screen name={ScreenNames.IntroScreen} component={IntroScreen} />
          <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
          {/* <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} /> */}
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME}
          screenOptions={{header: () => false}}
          >
          <Stack.Screen name={ScreenNames.HOME} component={BottomTab} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
