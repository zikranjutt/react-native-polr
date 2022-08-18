import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function GeofenceGrid({ item, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
    </TouchableOpacity>
  );
}
