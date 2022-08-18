import { View, Text } from "react-native";
import React from "react";
import Onboarding from "../../../components/Swipper/Onboarding";
import styles from "./styles";
import { SignUpMethodName } from "../../../routes/navigation/screenNames";
import { Navigation } from "react-native-navigation";
import { SVGIcon } from "../../../assets/Svg";
import { ScreenWrapper } from "~components";

export default function Swiper(props) {
  return (
    <ScreenWrapper componentId={props.componentId}>
      <View style={styles.countainer}>
        <SVGIcon.polr />
        <Onboarding
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: SignUpMethodName,
              },
            });
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
