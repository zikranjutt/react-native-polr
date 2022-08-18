import React from 'react';
import {View} from 'react-native';

import RoundButton from '../RoundButton';
import {COLORS} from '../utils/constants';
import {styles} from './styles';
import AppColors from '~utills/AppColors';
import { SVGIcon } from '~assets/Svg';

export default function Footer({handleChoice}) {
  return (
    <View style={styles.container}>
      <RoundButton
        name="back"
        size={40}
        color={AppColors.white}
        IconName={SVGIcon.cameraIcon}
        counatinerStyle={false}
        onPress={() => handleChoice(-1)}
      />
      {/* <RoundButton
        name="times"
        size={40}
        color={COLORS.nope}
        onPress={() => handleChoice(-1)}
      /> */}
      {/* <RoundButton
        name="heart"
        size={34}
        color={COLORS.like}
        onPress={() => handleChoice(1)}
      /> */}
    </View>
  );
}
