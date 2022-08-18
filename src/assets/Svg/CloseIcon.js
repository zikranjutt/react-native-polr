import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
const CloseIcon = ({ color = "#000", height = 25, width = 25, iconStyle,colorIcon=true }) => {
  return (
    <>
      {colorIcon ? (
        <Svg
          style={iconStyle}
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill={color}
          class="bi bi-x-circle-fill"
          viewBox="0 0 16 16"
        >
          <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </Svg>
      ) : (
        <Svg
          style={iconStyle}
          xmlns="http://www.w3.org/2000/svg"
          width="32.386"
          height="32.386"
          viewBox="0 0 32.386 32.386"
        >
          <G
            id="Group_105"
            data-name="Group 105"
            transform="translate(-347.848 -3570.348)"
          >
            <Path
              id="Path_73"
              data-name="Path 73"
              d="M364.041,3570.348a16.193,16.193,0,1,0,16.193,16.193A16.193,16.193,0,0,0,364.041,3570.348Zm6.233,20.462-1.964,1.964-4.269-4.269-4.269,4.269-1.964-1.964,4.269-4.269-4.269-4.269,1.964-1.964,4.269,4.269,4.269-4.269,1.964,1.964-4.269,4.269Z"
              fill="#e181dc"
            />
            <Path
              id="Path_74"
              data-name="Path 74"
              d="M370.274,3590.81l-1.964,1.964-4.269-4.269-4.269,4.269-1.964-1.964,4.269-4.269-4.269-4.269,1.964-1.964,4.269,4.269,4.269-4.269,1.964,1.964-4.269,4.269Z"
              fill="#fff"
            />
          </G>
        </Svg>
      )}
    </>
  );
};
export default CloseIcon;
