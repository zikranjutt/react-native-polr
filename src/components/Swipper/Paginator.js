import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";
import { Button } from "..";

export default function Paginator({ currentIndex, onPress }) {
  return (
    <View style={styles.countainer}>
      {currentIndex == 1 && (
          <View style={styles.spacing}/>
      )}
      <View style={styles.innerCountainer}>
        <View style={[currentIndex == 0 ? styles.dots : styles.circle]}></View>
        <View style={[currentIndex == 1 ? styles.dots : styles.circle]}></View>
      </View>
      {currentIndex == 1 && <Button title={"Next"} onPress={onPress} />}
    </View>
  );
}

const styles = StyleSheet.create({
  countainer: {
    flexDirection: "row",
    height: height(20),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  innerCountainer: {
    flexDirection: "row",
    height: height(20),
    alignItems: "center",
  },
  circle: {
    height: height(1),
    width: height(1),
    borderRadius: height(5),
    marginHorizontal: width(1),
    borderColor: AppColors.white,
    borderWidth: width(0.2),
  },
  dots: {
    height: height(1),
    width: height(1),
    borderRadius: height(5),
    backgroundColor: AppColors.white,
    marginHorizontal: width(1),
  },
  spacing:{
    width:width(30)
  }
});
