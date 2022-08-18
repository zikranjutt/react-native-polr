import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent:'space-between'
  },
  innerContainer: {
    alignItems: "center",
  },
  buttonWithIcon: {
    marginTop: height(16),
    alignSelf: "center",
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
  footer: {
    flexDirection: "row",
    width: width(85),
    alignSelf: "center",
    justifyContent: "space-between",
    paddingVertical: height(4),
  },
  wrapperStyle: {
    justifyContent: "space-between",
    width: width(75),
  },
  flatList:{
    height:height(45)
  }
});
export default styles;
