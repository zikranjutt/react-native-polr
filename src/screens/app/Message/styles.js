import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
  
const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.black20,
    alignSelf: "center",
    paddingHorizontal:width(5)
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
  input: {
    width: width(90),
    marginTop: height(7),
  },
  textStyle: {
    alignSelf: "center",
  },
  matches: {
    paddingVertical: height(1.5),
    paddingBottom: height(8),
  },
});
export default styles;
