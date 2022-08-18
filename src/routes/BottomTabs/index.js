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
        headerShown:false,
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
            // <Veiw
            //   style={{
            //     borderTopWidth: width(0.3),
            //     borderColor: AppColors.primary,
            //   }}>
            <Text
              style={{
                fontSize: width(3.5),
                color: color,
                marginTop: -height(1.6),
              }}>
              {label}
            </Text>
            // </Veiw>
          );
        },
      })}
      tabBarOptions={{
        
        activeTintColor: AppColors.primary,
        inactiveTintColor: AppColors.inActive,
        tabStyle: {
          // height: height(10),
          backgroundColor: AppColors.white,
          paddingBottom: height(0.5),
          // elevation: 2,
        },
        style: {
          borderTopWidth: 0,
          position: 'absolute',
          // overflow: 'hidden',
          //   borderTopRightRadius: width(6),
          //   borderTopLeftRadius: width(6),
          backgroundColor: AppColors.white,
          height: height(Platform.OS == 'ios' ? 8 : 7.5),
          // paddingVertical: height(4)
          // shadowColor: AppColors.bottomShadow,
          // shadowOffset: { width: 0, height: 0 },
          // shadowOpacity: 0.9,
          // shadowRadius: 5,
          shadowOffset: {width: 0, height: 12},
          shadowOpacity: 0.58,
          shadowRadius: 10.0,
          elevation: 24,
        },
        // bottomNavigationOptions: {
        //     style: {
        //         borderTopWidth: 0,
        //         elevation: 8,
        //         marginBottom: 50,
        //         backgroundColor: 'red'
        //         // marginTop: 4
        //     },
        //     labelColor: '#fff',
        //     rippleColor: '#fff',
        // },
        // labelPosition: 'below-icon'
        keyboardHidesTabBar: true,
      
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddPost" component={Home} />
      <Tab.Screen name="SearchTab" component={Home} />
    </Tab.Navigator>
  );
}
