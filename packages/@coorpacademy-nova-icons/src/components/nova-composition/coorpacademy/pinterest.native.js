import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 1024 1024" {...props}>
    <Path d="M512 68.4C267 68.4 68.4 267 68.4 512c0 188 117 348.4 282 413-3.8-35-7.4-89 1.6-127.2 8-34.6 52-220.4 52-220.4s-13.2-26.6-13.2-65.8c0-61.6 35.8-107.8 80.2-107.8 37.8 0 56.2 28.4 56.2 62.4 0 38-24.2 95-36.8 147.6-10.6 44.2 22 80.2 65.6 80.2 78.8 0 139.4-83.2 139.4-203.2 0-106.2-76.4-180.4-185.2-180.4C384 310.4 310 405 310 503c0 38.2 14.6 79 33 101.2 3.6 4.4 4.2 8.2 3 12.8-3.4 14-10.8 44.2-12.4 50.4-2 8.2-6.4 9.8-14.8 6-55.4-25.8-90-106.8-90-171.8 0-140 101.6-268.4 293-268.4 153.8 0 273.4 109.6 273.4 256.2 0 152.8-96.4 276-230.2 276-45 0-87.2-23.4-101.6-51 0 0-22.2 84.6-27.6 105.4-10 38.6-37 86.8-55.2 116.2 41.6 12.8 85.6 19.8 131.4 19.8 245 0 443.6-198.6 443.6-443.6C955.6 267 757 68.4 512 68.4z" />
  </Svg>
);

export default SvgComponent;