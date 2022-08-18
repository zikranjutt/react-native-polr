import { Platform, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: width(12),
    justifyContent: "space-between",
    flex: 1,
  },
  buttonWithIcon: {
    marginTop: height(10),
    height: height(70),
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    width: width(75),
    justifyContent: "space-between",
    marginBottom: height(5),
  },
  row2: {
    flexDirection: "row",
    alignSelf: "center",
  },
  spacing: {
    marginTop: height(2),
  },
});
export default styles;
