import React from "react";
import { View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import styles from "./styles";
import GeoFenceScreen from "./GeoFenceScreen";
import { Navigation } from "react-native-navigation";
import { MapScreenName } from "../../routes/navigation/screenNames";
import { useSelector } from "react-redux";
export default function GeoFence(props) {
  const theme = useSelector((state) => state.Config.theme);
  return (
    <ScreenWrapper
      componentId={props.componentId}
      backgroundImage={false}
      transclucent={true}
    >
      <View
        style={[
          styles.mainViewContainer,
          { backgroundColor: theme.bottomSheetBackground },
        ]}
      >
        <GeoFenceScreen
          onPressRight={() =>
            Navigation.push(props.componentId, {
              component: {
                name: MapScreenName,
              },
            })
          }
        />
      </View>
    </ScreenWrapper>
  );
}
