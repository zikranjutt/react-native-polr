import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    width: width(90),
    marginBottom: height(2),
    alignSelf: "center",
  },
  dayLabelsWrapper: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  dateStyles: {
    color: AppColors.white,
    fontSize: width(5),
  },
  desableDateStyles: {
    color: AppColors.lightGrey,
    fontSize: width(5),
  },
  headerStyle: {
    color: AppColors.white,
    fontSize: width(4.3),
  },
  headerText: {
    color: AppColors.white,
    fontSize: width(8.2),
    fontWeight:'400',
    paddingHorizontal:width(3)
  },
  selectedDayStyle: {
    borderColor: AppColors.primaryColor,
    borderRadius: height(5),
    width: height(5),
    height: height(5),
    borderWidth: width(0.3),
    fontSize: width(24.5),
  },
  selectedDayTextStyle: {
    fontSize: width(4.5),
  },
});
export default styles;
