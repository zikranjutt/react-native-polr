import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {height, width} from 'react-native-dimension';
import {Button, CustomText, H1, ScreenWrapper} from '~components';
 import AppColors from '~utills/AppColors';
import {login} from '~redux/slices/authSlice';
import {useDispatch} from 'react-redux';
import { SVGIcon } from '~assets/Svg';

export default function AllSetProfile(props) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper
      scrollEnabled
      transclucent
      backgroundImage
      footerUnScrollable={() => (
        <View style={styles.footer}>
          <Button title={'Back'} onPress={() => props.navigation.goBack()} />
          <Button title={'Next'} onPress={() => dispatch(login({}))} />
        </View>
      )}>
      <View style={styles.container}>
        <SVGIcon.polr />
        <View style={styles.buttonWithIcon}>
          <H1 color={AppColors.white} size={12}>
            You’re all set!
          </H1>
          <CustomText
            color={AppColors.white}
            size={6.5}
            textStyles={{marginTop: height(2), width: width(100)}}
            lineHeight={30}
            center>
            Time to start breaking the ice.
          </CustomText>
        </View>
      </View>
    </ScreenWrapper>
  );
}
