import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";
import { SVGIcon } from "../../assets/Svg";
import { CustomText, H1 } from "..";

export default function OnboardingItem({ currentIndex, item }) {
  return (
    <View style={styles.container}>
      {item == 0 ? (
        <H1
          fontWeight={"400"}
          color={AppColors.white}
          size={12}
          textAlign={"center"}
        >
          Most dating apps{"\n"} don’t fit into our {"\n"}social lives.{"\n"}
          {"\n"} But Polr {"\n"}is different.
        </H1>
      ) : (
        <>
          <H1
            fontWeight={"normal"}
            color={AppColors.white}
            size={11.5}
            textAlign={"center"}
          >
            Polr works best{"\n"} while you’re doing{"\n"} the things you love.
          </H1>
          <View style={styles.spacing}>
            <CustomText color={AppColors.white} center={"center"} fontWeight={'500'} size={4.1}>
              Meet people who are at, are going, or have{"\n"} been at the same venues
              and events. And turn an{"\n"} ice breaker into an in-person hang faster.
            </CustomText>
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width(100),
    // paddingHorizontal: width(1),
    justifyContent: "center",
    alignItems: "center",
    marginTop: height(12),
  },
  FlatListText: {
    fontSize: width(6),
    color: AppColors.white,
  },
  spacing: {
    paddingTop: height(6),
    alignItems:'center'
  },
});
