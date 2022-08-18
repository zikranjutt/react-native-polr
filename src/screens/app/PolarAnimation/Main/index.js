import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import { height } from "react-native-dimension";
import { ACTION_OFFSET, CARD } from "../utils/constants";
import { pets as petsArray } from "./data";
import Card from "../Card";
import BottomSheet from "reanimated-bottom-sheet";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import CrushModal from "~components/CrushModal";
import BottomSheetProfile from "~components/BottomSheetProfile";
import { BarIcon } from "~assets/Svg/SettingIcons";
export default function Main(props) {
  const theme = useSelector((state) => state.Config.theme);
  const [pets, setPets] = useState(petsArray);
  const [premiumModal, setPremiumModal] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [petsTemp, setPetsTemp] = useState(petsArray);
  const [slectedIndex, setSlectedIndex] = useState(0);
  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const sheetRef = React.useRef(null);
  useEffect(() => {
    if (!pets?.length) {
      setPets(petsArray);
    }
  }, [pets?.length]);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      if (dy < -30 && dx >= 0 && dx < 20) {
        swipe.setValue({ x: 0, y: 0 });
        sheetRef.current.snapTo(1);
      } else {
        swipe.setValue({ x: dx, y: 0 });
        tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
      }
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;
      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_SCREEN,
            y: 0,
          },
          useNativeDriver: true,
        }).start(() => {
          setSlectedIndex((prev) => prev + 1);
          removeTopCard();
        });
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start(() => {});
      }
    },
  });
  const removeTopCard = useCallback(() => {
    setPets((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [petsTemp]);
  const handleChoice = useCallback((direction) => {
    setPets((prev) => {
      prev.splice(1, 0, petsTemp[slectedIndex - 1], petsTemp[slectedIndex]);
      return prev;
    });
    setSlectedIndex(slectedIndex - 1);
    Animated.timing(swipe.x, {
      toValue: direction * CARD.OUT_OF_SCREEN,
      duration: 900,
      useNativeDriver: true,
    }).start(() => {
      removeTopCard();
    }, []);
  });
  const nextCardOpacity = swipe.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  const nextCardScale = swipe.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  const rotate = swipe.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...swipe.getTranslateTransform(),
    ],
  };
  const renderBottomSheet = () => {
    return <BottomSheetProfile onclose={() => sheetRef.current.snapTo(0)} />;
  };
  return (
    <View style={styles.container}>
      {pets
        .map(({ name, source }, index) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};
          return index < 0 ? null : index == 0 ? (
            <Animated.View
              {...panResponder.panHandlers}
              key={name}
              style={[
                rotateAndTranslate,
                {
                  height: SCREEN_HEIGHT - 121,
                  width: SCREEN_WIDTH,
                  position: "absolute",
                },
              ]}
            >
              <Card
                // onPressName={() => sheetRef.current.snapTo(1)} need confirm with client that's why its still here
                // key={key}
                disabled={headerVisible}
                onPressCrush={() => setPremiumModal(true)}
                slectedIndex={slectedIndex}
                name={name}
                source={source}
                isFirst={isFirst}
                swipe={swipe}
                tiltSign={tiltSign}
                {...dragHandlers}
                handleChoice={handleChoice}
                index={index}
              />
            </Animated.View>
          ) : (
            <Animated.View
              key={name}
              style={[
                rotateAndTranslate,
                {
                  opacity: nextCardOpacity,
                  transform: [{ scale: nextCardScale }],
                  height: SCREEN_HEIGHT - 120,
                  width: SCREEN_WIDTH,
                  position: "absolute",
                },
              ]}
            >
              <Card
                // onPressName={() => sheetRef.current.snapTo(1)}
                // key={key}
                disabled={headerVisible}
                onPressCrush={() => setPremiumModal(true)}
                slectedIndex={slectedIndex}
                name={name}
                source={source}
                isFirst={isFirst}
                swipe={swipe}
                tiltSign={tiltSign}
                {...dragHandlers}
                handleChoice={handleChoice}
                index={index}
              />
            </Animated.View>
          );
        })
        .reverse()}
      {/* </View> */}
      <BottomSheet
        onOpenStart={() => setHeaderVisible(true)}
        onCloseEnd={() => setHeaderVisible(false)}
        ref={sheetRef}
        snapPoints={[0, height(80)]}
        borderRadius={10}
        renderContent={(item) => renderBottomSheet(item)}
        renderHeader={() => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPressOut={() => sheetRef.current.snapTo(0)}
              style={[
                styles.bottomSheet,
                { backgroundColor: theme.bottomSheetBackground },
              ]}
            >
              <BarIcon color={theme.color} />
            </TouchableOpacity>
          );
        }}
      />
      <CrushModal
        isVisible={premiumModal}
        onClose={() => setPremiumModal(false)}
      />
    </View>
  );
}
