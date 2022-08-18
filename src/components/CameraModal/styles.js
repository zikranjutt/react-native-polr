import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    imageModalContainer: {
        backgroundColor: AppColors.white,
        width: width(70),
        borderRadius: width(4),
        alignSelf: 'center',
        paddingBottom: height(3)
    },
    closeContainer: {
        alignSelf: 'flex-end',
        marginTop: width(4),
        paddingHorizontal: width(4),
    },
    buttonContainer: {
        width: width(70),
        height: height(15),
        justifyContent: 'space-evenly',
    },
    picOption: {
        paddingLeft: width(12),
        alignItems: 'center',
        flexDirection: 'row'
    },
    picOptionText: {
        marginLeft: width(2),
        fontSize: width(3.85),
        color: AppColors.black
    },
    line: {
        width: '70%',
        alignSelf: 'center',
        backgroundColor: AppColors.black,
        height: width(.15)
    }
})
export default styles;
