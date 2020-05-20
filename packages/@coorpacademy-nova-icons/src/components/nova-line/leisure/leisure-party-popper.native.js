import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill={props.color}>
      <Path d="M9 6h2c0-2.205-1.795-4-4-4v2c1.104 0 2 .898 2 2zM18 13v2c1.104 0 2 .898 2 2h2c0-2.205-1.794-4-4-4zM14.03 1.757l1.94.486-1 4-1.94-.486zM21.758 8.031l.484 1.94-4 .998-.484-1.94zM9.242 7.191c-.759 0-1.226.309-1.484.566-.234.235-5.542 12.54-5.674 12.845a.998.998 0 001.315 1.315c.308-.134 12.607-5.438 12.843-5.674 1.458-1.458-.077-4.321-2.121-6.364-1.656-1.658-3.527-2.688-4.879-2.688zm5.568 7.572c-.751.326-2.923-1.461-3.517-2.056-.602-.601-2.376-2.775-2.055-3.515h.003c.679 0 2.087.722 3.466 2.102 1.61 1.608 2.118 3.007 2.103 3.469zm-6.73-2.911a12.223 12.223 0 001.8 2.27 11.879 11.879 0 002.277 1.798l-7.223 3.147 3.146-7.215zM19.293 3.294l1.413 1.413-1.999 2-1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
