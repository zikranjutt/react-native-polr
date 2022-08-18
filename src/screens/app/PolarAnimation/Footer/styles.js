import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: height(5),
    left: width(5),
    width: 170,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // zIndex: -1,
  },
});
