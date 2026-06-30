import React from "react";
import MascotSvg from "@/assets/images/mascot_startscreen.svg";

interface MascotProps {
  width?: number;
  height?: number;
}

export default function Mascot({ width = 200, height = 270 }: MascotProps) {
  return <MascotSvg width={width} height={height} />;
}
