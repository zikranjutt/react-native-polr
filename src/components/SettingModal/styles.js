import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    padding: 0,
    margin: 0,
  },
  container: {
    backgroundColor: AppColors.black20,
    width: width(100),
    paddingVertical: height(2),
    paddingHorizontal: width(15),
  },
  text: {
    color: AppColors.black,
    fontSize: width(3.2),
    marginLeft: width(2),
    fontWeight: "bold",
  },
  innerContainer: {
    paddingVertical: height(2),
    justifyContent: "center",
    height: height(20),
    justifyContent: "space-between",
  },
  btn: {
    borderColor: AppColors.black50,
    alignSelf: "flex-start",
    marginVertical: height(2),
  },
  closeIcon: {
    position: "absolute",
    top: -height(1),
    right: -width(1),
  },
  box: {
    flexDirection: "row",
    width: width(100),
    alignItems: "center",
  },
});
export default styles;
