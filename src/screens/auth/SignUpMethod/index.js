import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import ButtonWithIcon from "../../../components/Button/ButtonWithIcon";
import { SVGIcon } from "../../../assets/Svg";
import { height, width } from "react-native-dimension";
import { CustomText, H1 } from "../../../components/Text";
import AppColors from "../../../utills/AppColors";
import Button from "../../../components/Button";
import { LoginScreenName, SignUpScreenName } from "../../../routes/navigation/screenNames";
import { Navigation } from "react-native-navigation";
import { ScreenWrapper } from "~components";

export default function SignUpMethod(props) {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <SVGIcon.polr />
        <View style={styles.buttonWithIcon}>
          <H1 color={AppColors.white} size={7} textAlign={"center"}>
            Set up your profile in less than a minute with:
          </H1>
          <View>
            <ButtonWithIcon
              icon={() => <SVGIcon.instagram />}
              title={"Instagram"}
            />
            <ButtonWithIcon
              icon={() => <SVGIcon.facebook />}
              title={"Facebook"}
            />
          </View>
          <View style={styles.spacing}>
            <CustomText
              color={AppColors.white}
              size={width(1.1)}
              textAlign={"center"}
            >
              or sign up with:
            </CustomText>
          </View>
          <View style={styles.row}>
            <ButtonWithIcon
              icon={() => <SVGIcon.google />}
              title={"Google"}
              innerCountainerStyle={{ width: width(28) }}
              containerStyle={{ width: width(35) }}
              textStyle={{ fontSize: width(5.2) }}
            />
            <ButtonWithIcon
              icon={() => <SVGIcon.apple />}
              title={"Apple ID"}
              innerCountainerStyle={{ width: width(28) }}
              containerStyle={{ width: width(35) }}
              textStyle={{ fontSize: width(5.2) }}
            />
          </View>

          <Button
            title={"Sign up  with email"}
            onPress={() => {
              Navigation.push(props.componentId, {
                component: {
                  name: SignUpScreenName,
                },
              });
            }}
          />
          <View style={styles.row2}>
            <CustomText
              children={"Already a signed up?  "}
              color={AppColors.white}
            />
            <CustomText
              children={"Log in"}
              color={AppColors.white}
              underLine
              onPress={() => {
                Navigation.push(props.componentId, {
                  component: {
                    name: LoginScreenName,
                  },
                });
              }}
            />
          </View>
          <View
            style={[
              styles.row2,
              {
                marginTop: height(5),
              },
            ]}
          >
            <CustomText
              children={"By continuing you agree to POLR’s "}
              color={AppColors.white}
            />
            <CustomText
              children={"terms of use."}
              color={AppColors.white}
              underLine
              onPress={() => console.log(" Term of use")}
            />
          </View>
        </View>
        <View></View>
      </View>
    </ScreenWrapper>
  );
}
