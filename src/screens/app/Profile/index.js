import React, { useState } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Navigation } from "react-native-navigation";
import BottomSheetEditProfile from "../../components/BottomSheetEditProfile";
import ScreenWrapper from "../../components/ScreenWrapper";
import SettingModal from "../../components/SettingModal";
import {
  LoginScreenName,
  PremiumScreenName,
  SettingPrivacyName,
} from "../../routes/navigation/screenNames";
import Card from "./ProfileAnimation/Card";
import BottomSheet from "reanimated-bottom-sheet";
import styles from "./styles";
import { height } from "react-native-dimension";
import { SVGIcon } from "../../assets/Svg";
import { setAuthFlow } from "../../routes/navigation/main";
import { useSelector } from "react-redux";
import { BarIcon } from "../../assets/Svg/SettingIcons";
export default function Profile(props) {
  const [settingModalVisible, setSettingModalVisible] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [onViewChange, setOnViewChange] = useState(false);
  const sheetRef = React.useRef(null);
  const theme = useSelector((state) => state.Config.theme);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      if (dy < -10) {
        sheetRef.current.snapTo(1);
      }
    },
  });
  const renderBottomSheet = () => {
    return (
      <BottomSheetEditProfile onclose={() => sheetRef.current.snapTo(0)} />
    );
  };
  return (
    <ScreenWrapper
      componentId={props.componentId}
      backgroundImage={false}
      transclucent={true}
    >
      {Platform.OS == "android" ? (
        onViewChange ? (
          <Card
            disabled={buttonDisable}
            onPressLogOut={() => setAuthFlow()}
            onPressMenuBar={() => {
              setOnViewChange(true);
              setTimeout(() => {
                setSettingModalVisible(true);
              }, 600);
            }}
            setSettingModalVisible={() => {
              setSettingModalVisible(false);
              setOnViewChange(false);
            }}
            settingModalVisible={settingModalVisible}
            onPressSetting={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: SettingPrivacyName,
                },
              })
            }
            onPressPremium={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: PremiumScreenName,
                },
              })
            }
          />
        ) : (
          <Animated.View {...panResponder.panHandlers}>
            <Card
              disabled={buttonDisable}
              onPressMenuBar={() => {
                setOnViewChange(true);
                setTimeout(() => {
                  setSettingModalVisible(true);
                }, 600);
              }}
              setSettingModalVisible={() => {
                setSettingModalVisible(false);
                setOnViewChange(false);
              }}
              settingModalVisible={settingModalVisible}
              onPressSetting={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: SettingPrivacyName,
                  },
                })
              }
              onPressPremium={() =>
                Navigation.push(props.componentId, {
                  component: {
                    name: PremiumScreenName,
                  },
                })
              }
            />
          </Animated.View>
        )
      ) : (
        <Animated.View {...panResponder.panHandlers}>
          <Card
            disabled={buttonDisable}
            onPressLogOut={() => setAuthFlow()}
            onPressMenuBar={() => {
              setSettingModalVisible(true);
            }}
            setSettingModalVisible={() => {
              setSettingModalVisible(false);
            }}
            settingModalVisible={settingModalVisible}
            onPressSetting={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: SettingPrivacyName,
                },
              })
            }
            onPressPremium={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: PremiumScreenName,
                },
              })
            }
          />
        </Animated.View>
      )}
      <BottomSheet
        ref={sheetRef}
        snapPoints={[0, height(80)]}
        borderRadius={10}
        renderContent={(item) => renderBottomSheet(item)}
        onOpenStart={() => setButtonDisable(true)}
        onCloseEnd={() => setButtonDisable(false)}
        renderHeader={() => {
          return (
            <TouchableOpacity
              onPressOut={() => sheetRef.current.snapTo(0)}
              style={[
                styles.bottomSheet,
                { backgroundColor: theme.bottomSheetBackground },
              ]}
              activeOpacity={0.8}
            >
              <BarIcon color={theme.color} />
            </TouchableOpacity>
          );
        }}
      />
    </ScreenWrapper>
  );
}
