import React from 'react';
import {ScreenWrapper} from '~components';
import Main from '../PolarAnimation/Main';
import styles from './styles';
export default function Home({navigation, route}) {
  return (
    <ScreenWrapper containerStyle={styles.mainViewContainer} transclucent>
      <Main />
    </ScreenWrapper>
  );
}
