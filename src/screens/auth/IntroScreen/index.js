import React from "react";
import { View } from "react-native";
import { SVGIcon } from "../../../assets/Svg";
import { Button, ScreenWrapper } from "~components";
import ScreenNames from "~routes/routes";
import styles from "./styles";
export default function IntroScreen({navigation}) {

  return (
    <ScreenWrapper transclucent backgroundImage >
      <View style={styles.mainViewContainer}>
        <View style={styles.title}>
          <SVGIcon.polrH1 />
        </View>
        <View style={styles.btnCountainer}>
          <Button
            textStyle={styles.btnText}
            containerStyle={styles.button}
            title={"Sign up"}
            // onPress={() => {
            //   Navigation.push(props.componentId, {
            //     component: {
            //       name: SwiperScreenName,
            //     },
            //   });
            // }}
          />
          <Button
            textStyle={styles.btnText}
            title={"Login"}
            containerStyle={{ borderWidth: 0 }}
            onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
