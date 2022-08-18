import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
const ToggelBox = ({
  color = "#fff",
  visibleColor = "#fff",
  height = 25,
  width = 25,
  iconStyle,
  visible = false,
}) => {
  return !visible ? (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.55"
      height="24.392"
      viewBox="0 0 22.55 24.392"
    >
      <Rect
        id="Rectangle_433"
        data-name="Rectangle 433"
        width="21.301"
        height="23.143"
        transform="translate(0.625 0.625)"
        fill="none"
        stroke={visibleColor}
        stroke-miterlimit="10"
        stroke-width="1.249"
      />
    </Svg>
  ) : (
    <Svg
      style="color: white"
      xmlns="http://www.w3.org/2000/svg"
      width="22.55"
      height="24.392"
      fill="currentColor"
      class="bi bi-check-square"
      viewBox="0 0 16 16"
    >
      <Path
        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        fill={color}
      ></Path>
      <Path
        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"
        fill={color}
      ></Path>
    </Svg>
  );
};
export default ToggelBox;
