import * as React from 'react';
import {NavigationContainer,DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
// import {HomeScreen} from '~screens/app';
// import {Loader} from '~components';
import ScreenNames from './routes';
import BottomTab from './BottomTabs';
import {IntroScreen, Login} from '~screens/auth';
import {selectIsLogin} from '~redux/slices/authSlice';
import Swiper from '~screens/auth/Swiper';
import SignUpMethod from '~screens/auth/SignUpMethod';
import SignUp from '~screens/auth/SignUp';
import SignUpDetail from '~screens/auth/SignUpDetail';
import ProfilePicture from '~screens/auth/ProfilePicture';
import AllSetProfile from '~screens/auth/AllSetProfile';
import AppColors from '~utills/AppColors';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <NavigationContainer
theme={{ colors: { background: '#000' }}}

    >
      {/* <Loader /> */}
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.INTROSCREEN}
          screenOptions={{
            header: () => false,
           
          }}>
          <Stack.Screen
            name={ScreenNames.INTROSCREEN}
            component={IntroScreen}
          />
          <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
          <Stack.Screen name={ScreenNames.SWIPER} component={Swiper} />
          <Stack.Screen
            name={ScreenNames.SIGNUPMETHOD}
            component={SignUpMethod}
          />
          <Stack.Screen name={ScreenNames.SIGNUP} component={SignUp} />
          <Stack.Screen
            name={ScreenNames.SIGNUPDETAIL}
            component={SignUpDetail}
          />
          <Stack.Screen
            name={ScreenNames.PROFILEPICTURE}
            component={ProfilePicture}
          />
          <Stack.Screen
            name={ScreenNames.ALLSETPROFILE}
            component={AllSetProfile}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME}
          screenOptions={{header: () => false}}>
          <Stack.Screen name={ScreenNames.HOME} component={BottomTab} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
