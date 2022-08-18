import React from "react";
import { Image, View } from "react-native";
import { COLORS } from "../utils/constants";

export default function Choice({ type, source }) {
  const color = COLORS[type];

  return (
    <View style={{ borderColor: color }}>
      <Image source={source} resizeMode="contain" />
    </View>
  );
}
