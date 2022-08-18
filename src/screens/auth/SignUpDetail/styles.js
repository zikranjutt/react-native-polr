import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  buttonWithIcon: {
    height: height(40),
    // height: height(70),
    alignItems: "center",
    marginTop:height(15)
  },
  row: {
    flexDirection: "row",
    width:width(75),
    justifyContent: "space-between",
    // alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: height(2),
  },
  spacing: {
    marginBottom: height(0.5),
    alignSelf:'center',
    paddingHorizontal:width(7)
  },
  range:{
    alignItems:"flex-start",
    justifyContent:'center',
  },
  footer: {
    flexDirection: "row",
    width: width(85),
    alignSelf:'center',
    justifyContent: "space-between",
    paddingVertical:height(3),
  },
});
export default styles;
