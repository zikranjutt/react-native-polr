import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path, G, Defs, ClipPath, Rect, Circle } from "react-native-svg";
const CommentToggelIcon = ({
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
          width="27.938"
          height="26.969"
          viewBox="0 0 27.938 26.969"
        >
          <G
            id="Group_505"
            data-name="Group 505"
            transform="translate(-2659.696 -1925.422)"
          >
            <G id="Group_503" data-name="Group 503">
              <Path
                id="Path_306"
                data-name="Path 306"
                d="M2663.876,1952.39v-5.673h-4.18l.522-7.28a19.743,19.743,0,0,0,.011-2.663l-.525-8.263,10.364.567a29.011,29.011,0,0,0,3.122,0l10.356-.567-.451,7.544a32.419,32.419,0,0,0,.016,4.1l.444,6.561h-10.989Zm-.373-9.217h3.917v2.671l4.092-2.671h8.251l-.188-2.777a36.03,36.03,0,0,1-.018-4.552l.214-3.577-6.387.35a32.56,32.56,0,0,1-3.51,0l-6.38-.349.272,4.281a23.389,23.389,0,0,1-.013,3.142Z"
                fill={color}
              />
            </G>
          </G>
        </Svg>
      ) : (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="27.938"
          height="26.969"
          viewBox="0 0 27.938 26.969"
        >
          <G
            id="Group_505"
            data-name="Group 505"
            transform="translate(-2659.696 -1925.422)"
          >
            <G id="Group_503" data-name="Group 503">
              <Path
                id="Path_306"
                data-name="Path 306"
                d="M2663.876,1952.39v-5.673h-4.18l.522-7.28a19.743,19.743,0,0,0,.011-2.663l-.525-8.263,10.364.567a29.011,29.011,0,0,0,3.122,0l10.356-.567-.451,7.544a32.419,32.419,0,0,0,.016,4.1l.444,6.561h-10.989Zm-.373-9.217h3.917v2.671l4.092-2.671h8.251l-.188-2.777a36.03,36.03,0,0,1-.018-4.552l.214-3.577-6.387.35a32.56,32.56,0,0,1-3.51,0l-6.38-.349.272,4.281a23.389,23.389,0,0,1-.013,3.142Z"
                fill="#e181dc"
              />
            </G>
          </G>
        </Svg>
      )}
    </TouchableOpacity>
  );
};
export default CommentToggelIcon;
