import React from 'react';
import {ScreenWrapper} from '~components';
import Main from '../PolarAnimation/Main';
export default function Home({navigation, route}) {
  return (
    <ScreenWrapper containerStyle={{paddingTop: 0}} transclucent>
      <Main />
    </ScreenWrapper>
  );
}
