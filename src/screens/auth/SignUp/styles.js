import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: height(4),
    flex: 1,
  },
  buttonWithIcon: {
    marginTop: height(10),
    height: height(70),
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    width: width(85),
    marginTop: height(2),
  },
  footer: {
    flexDirection: "row",
    width: width(85),
    alignSelf:'center',
    justifyContent: "space-between",
    marginTop:height(2)
  },
  row2: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: height(2),
  },
  spacing: {
    marginBottom: height(3),
    alignSelf: "center",
    paddingHorizontal: width(7),
  },
});
export default styles;
