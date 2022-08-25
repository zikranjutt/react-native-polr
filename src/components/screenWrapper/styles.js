import {Platform, NativeModules, StyleSheet} from 'react-native';
import AppColors from '~utills/AppColors';
import {height} from '~utills/Dimension';
const {StatusBarManager} = NativeModules;
const paddingTop = StatusBarManager.HEIGHT;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop:
      Platform.OS == 'ios' ? paddingTop - height(3) : paddingTop - height(1),
  },
  contentContainer:{
    marginTop:-height(1.5)
  },
  scroll: {
    flex: 1,
    paddingBottom: height(1.5),
  },
});
export default styles;
