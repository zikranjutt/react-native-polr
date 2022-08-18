import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../utills/AppColors";
import Button from "../Button";
import { CustomText, H1 } from "../Text";
import styles from "./styles";
import Stars from "react-native-stars";
import { SVGIcon } from "../../assets/Svg";
import CommonStyles from "../../utills/CommonStyles";

export default function TypeDetail({ item, onPress }) {
  return (
    <ImageBackground source={{ uri: item.coverImage }} style={styles.container}>
      <View style={styles.container2}>
        <View
          style={[styles.row, { alignItems: "center", height: height(5.5) }]}
        >
          <View style={[styles.circle, { backgroundColor: item.color }]}>
            <CustomText size={5} color={AppColors.white}>
              {item.id}
            </CustomText>
          </View>
          <View style={styles.innerContainer}>
            <H1 color={AppColors.white} size={6}>
              {item.name}
            </H1>
            <CustomText size={4.5} color={AppColors.white}>
              {item.type + " | " + item.distance}
            </CustomText>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <CustomText color={AppColors.white}>
            {item.user + " Polr Users"}
          </CustomText>
          <View style={styles.row}>
            {item.userImages.map((element, index) => {
              return (
                <Image
                  key={String(index)}
                  source={{ uri: element.source }}
                  style={[
                    styles.image,
                    { marginLeft: index == 0 ? 0 : width(1.3) },
                  ]}
                />
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.reviews}>
        <CustomText
          textStyles={CommonStyles.marginLeft_3}
          color={AppColors.white}
        >
          {item.reviews + "  "}
        </CustomText>
        <Stars
          fullStar={<SVGIcon.star />}
          emptyStar={<SVGIcon.emptyStar />}
          display={Number(item.reviews)}
          spacing={3}
          count={5}
          starSize={13}
        />
        <CustomText
          textStyles={CommonStyles.marginLeft_2}
          size={3.7}
          underLine
          color={AppColors.white}
        >
          {item.totalReviews + " Google reviews"}
        </CustomText>
      </View>
      <View
        style={[styles.row, { alignSelf: "center", marginVertical: height(1.5) }]}
      >
        {item.restaurantDetailImages.map((element, index) => {
          return (
            <Image
              key={String(index)}
              source={{ uri: element.source }}
              style={[
                styles.restaurantDetailImages,
                { marginLeft: index == 0 ? 0 : width(1.3) },
              ]}
            />
          );
        })}
      </View>
      <View style={[styles.row, { marginTop: height(1), alignSelf: "center" }]}>
        <Button title={"Call"} containerStyle={styles.btn} />
        <Button title={"Website"} containerStyle={styles.btn} />
        <Button title={"Directions"} containerStyle={styles.btn} />
      </View>
    </ImageBackground>
  );
}
