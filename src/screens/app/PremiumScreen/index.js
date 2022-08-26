import React from "react";
import { Image, Text, View } from "react-native";
import { height } from "react-native-dimension";
import { Navigation } from "react-native-navigation";
import { SVGIcon } from "../../assets/Svg";
import MapViewHeader from "../../components/MapViewHeader";
import ScreenWrapper from "../../components/ScreenWrapper";
import SettingButtons from "../../components/SettingButtons";
import { CustomText, H1 } from "../../components/Text";
import { ProfileScreenName } from "../../routes/navigation/screenNames";
import AppColors from "../../utills/AppColors";
import CommonStyles from "../../utills/CommonStyles";
import styles from "./styles";
import RightIcon from "../../assets/Images/rightIcon.png";
import Button from "../../components/Button";
export default function PremiumScreen(props) {
  return (
    <ScreenWrapper componentId={props.componentId} transclucent={true}>
      <View style={styles.mainViewContainer}>
        <MapViewHeader
          onPressLeft={() =>
            Navigation.pop(props.componentId, {
              component: {
                name: ProfileScreenName,
              },
            })
          }
          calenderIcon={false}
          textField={false}
        />
        <View style={{ alignItems: "center" }}>
          <H1
            textStyles={CommonStyles.paddingBottom_3}
            color={AppColors.white}
            size={12}
          >
            Premium
          </H1>
          <CustomText
            color={AppColors.white}
            center
            size={4.1}
            fontWeight={"400"}
          >
            Sign up for a Premium POLR account{"\n"} to take advantage of these
            special features:
          </CustomText>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <Image
                source={RightIcon}
                resizeMode={"contain"}
                style={styles.img}
              />
              <CustomText color={AppColors.white} size={4.3} fontWeight={"400"}>
                Send someone a Crush {' '}
                <SVGIcon.smallCrush /> so they {"\n"}know you like them before you
                match
              </CustomText>
            </View>
            <View style={styles.row}>
              <Image
                source={RightIcon}
                resizeMode={"contain"}
                style={styles.img}
              />
              <CustomText
                justify
                color={AppColors.white}
                size={4.3}
                fontWeight={"400"}
              >
                See who is going to events or bars
              </CustomText>
            </View>
            <View style={styles.row}>
              <Image
                source={RightIcon}
                resizeMode={"contain"}
                style={styles.img}
              />
              <CustomText
                justify
                color={AppColors.white}
                size={4.3}
                fontWeight={"400"}
              >
                See who likes you before swiping
              </CustomText>
            </View>
          </View>
          <H1
            textStyles={CommonStyles.paddingBottom_4}
            color={AppColors.white}
            size={9}
          >
            $3.99/month
          </H1>
          <Button title={"Try one month free"} />
        </View>
        <View />
        <View />
      </View>
    </ScreenWrapper>
  );
}
