import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  bottomSheet: {
    height: height(3),
    width: width(100),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
