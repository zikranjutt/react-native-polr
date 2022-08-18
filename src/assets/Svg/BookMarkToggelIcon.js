import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path, G, Defs, ClipPath, Rect, Circle } from "react-native-svg";
const BookMarkToggelIcon = ({
  color = "#fff",
  height = 25,
  width = 25,
  iconStyle,
}) => {
  const [visible, setvisible] = useState(false);
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => setvisible(!visible)}>
      {!visible ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.698"
          height="22.753"
          viewBox="0 0 18.698 22.753"
        >
          <Path
            id="Path_309"
            data-name="Path 309"
            d="M2635.105,1608.82l-7.663-5.376-7.663,5.376V1591h15.325Z"
            transform="translate(-2618.093 -1589.311)"
            fill="none"
            stroke={color}
            stroke-miterlimit="10"
            stroke-width="3.373"
          />
        </Svg>
      ) : (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.698"
          height="22.753"
          viewBox="0 0 18.698 22.753"
        >
          <Path
            id="Path_309"
            data-name="Path 309"
            d="M2635.105,1608.82l-7.663-5.376-7.663,5.376V1591h15.325Z"
            transform="translate(-2618.093 -1589.311)"
            fill="none"
            stroke="#e181dc"
            stroke-miterlimit="10"
            stroke-width="3.373"
          />
        </Svg>
      )}
    </TouchableOpacity>
  );
};
export default BookMarkToggelIcon;
