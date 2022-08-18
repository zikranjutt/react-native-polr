import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";

export default Onboarding = ({ onPress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={["0", "2"]}
        renderItem={({ item, index }) => (
          <OnboardingItem item={item} currentIndex={currentIndex} />
        )}
        keyExtractor={(item, index) => String(index)}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: false }
        )}
        viewabilityConfig={viewConfig}
      />
      <Paginator currentIndex={currentIndex} onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
