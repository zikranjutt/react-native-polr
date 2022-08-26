import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform, Text, Veiw, View} from 'react-native';
import {useSelector} from 'react-redux';
import Home from '~screens/app/home';
import Message from '~screens/app/Message';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  const darkMode = useSelector(state => state.Config.isDarkTheme);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../../assets/images/home.png')
              : require('../../assets/images/home.png');
          } else if (route.name === 'Message') {
            iconName = focused
              ? require('../../assets/images/message.png')
              : require('../../assets/images/message.png');
          } else if (route.name === 'Geofence') {
            iconName = focused
              ? require('../../assets/images/geofence.png')
              : require('../../assets/images/geofence.png');
          }
           else if (route.name === 'Profile') {
            iconName = focused
              ? require('../../assets/images/profile.png')
              : require('../../assets/images/profile.png');
          }
          return (
            <>
              {focused && (
                <View
                  style={{
                    height: height(0.3),
                    width: width(16),
                    backgroundColor: AppColors.primary,
                    position: 'absolute',
                    top: 0,
                  }}
                />
              )}
              <Image
                style={{
                  width: width(7),
                  height: width(7),
                  resizeMode: 'contain',
                  tintColor: color,
                }}
                source={iconName}
              />
            </>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: AppColors.green,
        inactiveTintColor: AppColors.white,
        tabStyle: {
          // height: height(10),/
          backgroundColor: AppColors.black,
          paddingBottom: height(0.5),
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Geofence" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
}
