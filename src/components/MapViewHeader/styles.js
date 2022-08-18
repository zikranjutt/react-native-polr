import { Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: width(5.5),
    justifyContent: "space-between",
    alignItems: "center",
    width: width(100),
    paddingVertical: height(1),
    marginTop: height(5),
  },
  leftContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: width(5),
  },
  inputStyle: {
    width: width(70),
  },
});
export default styles;
