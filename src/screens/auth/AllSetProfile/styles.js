import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: width(12),
    flex: 1,
    justifyContent:'space-between',
  },
  buttonWithIcon: {
    marginTop: height(30),
    alignSelf: "center",
    alignItems:'center'
  },
  row: {
    flexDirection: "row",
    width: width(75),
    justifyContent: "space-between",
    marginBottom:height(5)
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
    alignSelf:'center',
    justifyContent: "space-between",
    paddingVertical:height(4)
  },
});
export default styles;
