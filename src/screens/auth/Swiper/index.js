import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {ScreenWrapper} from '~components';
import Onboarding from '~components/Swipper/Onboarding';
import ScreenNames from '~routes/routes';
import {SVGIcon} from '~assets/Svg';

export default function Swiper(props) {
  return (
    <ScreenWrapper transclucent backgroundImage>
      <View style={styles.countainer}>
        <SVGIcon.polr />
        <Onboarding
          onPress={() => props.navigation.navigate(ScreenNames.SIGNUPMETHOD)}
        />
      </View>
    </ScreenWrapper>
  );
}
