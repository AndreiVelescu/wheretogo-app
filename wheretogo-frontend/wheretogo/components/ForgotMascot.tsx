import React from "react";
import ForgotMascotSvg from "@/assets/images/forgotmascot.svg";

interface MascotProps {
  width?: number;
  height?: number;
}

export default function ForgotMascot({
  width = 200,
  height = 270,
}: MascotProps) {
  return <ForgotMascotSvg width={width} height={height} />;
}
