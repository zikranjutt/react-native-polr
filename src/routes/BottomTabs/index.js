import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform, Text, Veiw, View} from 'react-native';
import {useSelector} from 'react-redux';
import Home from '~screens/app/home';
import AppColors from '~utills/AppColors';
import {height, width} from '~utills/Dimension';
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  const darkMode = useSelector(state => state.Config.isDarkTheme);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
              borderTopWidth: 0
        },
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../../assets/images/home.png')
              : require('../../assets/images/home.png');
          } else if (route.name === 'AddPost') {
            iconName = focused
              ? require('../../assets/images/home.png')
              : require('../../assets/images/home.png');
          } else if (route.name === 'SearchTab') {
            iconName = focused
              ? require('../../assets/images/home.png')
              : require('../../assets/images/home.png');
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
                  width: width(5),
                  height: width(5),
                  resizeMode: 'contain',
                  tintColor: color,
                }}
                source={iconName}
              />
            </>
          );
        },
        tabBarLabel: ({focused, color, size}) => {
          let label;
          if (route.name === 'Home') {
            label = focused ? 'Message' : '';
          } else if (route.name === 'AddPost') {
            label = focused ? 'Add Post' : '';
          } else if (route.name === 'SearchTab') {
            label = focused ? 'Profile' : '';
          }
          return (
            <Text
              style={{
                fontSize: width(3.5),
                color: color,
                marginTop: -height(1.6),
              }}>
              {label}
            </Text>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: AppColors.primaryColor,
        inactiveTintColor: AppColors.inActive,
        tabStyle: {
          height: height(10),
          backgroundColor: AppColors.black,
          paddingBottom: height(0.5),
        },
        style: {
          position: 'absolute',
          backgroundColor: AppColors.black,
          height: height(Platform.OS == 'ios' ? 8 : 7.5),
          shadowOffset: {width: 0, height: 12},
          shadowOpacity: 0.58,
          shadowRadius: 10.0,
          elevation: 24,
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddPost" component={Home} />
      <Tab.Screen name="SearchTab" component={Home} />
    </Tab.Navigator>
  );
}
