'use client'

import React, {PropsWithChildren, useRef} from "react";
import { useParallax } from 'react-scroll-parallax';

const interpolate = require('color-interpolate');

interface Props {
  colors?: string[]
  className?: string
}

const ColorChangingText: React.FC<PropsWithChildren<Props>> = ({colors, className, children}) => {
  
  const [color, setColor] = React.useState(colors?.[0]);
  const interpolator = interpolate(colors);

  function rgbToHex(rgb: string) {
    var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
    var result, r, g, b, hex = "";

    function componentFromStr(numStr:string, percent:string) {
      var num = Math.max(0, parseInt(numStr, 10));
      return percent ?
          Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
    }

    if ( (result = rgbRegex.exec(rgb)) ) {
        r = componentFromStr(result[1], result[2]);
        g = componentFromStr(result[3], result[4]);
        b = componentFromStr(result[5], result[6]);
  
        hex = "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return hex;
  }
  

  const onProgressChange = (progress: number) => {
    let newColorRgb = interpolator(progress);
    let newColorHex = rgbToHex(newColorRgb);
    if (newColorHex !== color) {
      setColor(newColorHex);
    }
  }

  const { ref } = useParallax({
    // onChange: (e) => console.log('change', e),
    onProgressChange: onProgressChange,
    speed:0,
  });


  return (

    <div className={className} ref={ref as React.RefObject<HTMLDivElement>} style={{
      color: color,
      willChange: "color",
    }}>
      {children}
      </div>

  )
}

export default ColorChangingText;