import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from 'react-native-dimension'
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.transparent,
        // paddingVertical: height(3),
        paddingHorizontal: width(3),
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',
        borderRadius: width(5),
        flexDirection:'row',
    },
    
});
export default styles;
