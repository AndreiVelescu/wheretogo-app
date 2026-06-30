import LogoSvg from "@/assets/images/logo.svg";
import LogoRedSvg from "@/assets/images/logoRed.svg";

interface LogoProps {
  width?: number;
  height?: number;
  color?: "white" | "red" | "black";
}

export default function Logo({ width = 230, height = 29, color }: LogoProps) {
  return (
    <>
      {color === "red" ? (
        <LogoRedSvg width={width} height={height} fill={"#ff0101ff"} />
      ) : (
        <LogoSvg width={width} height={height} />
      )}
      {color === "black" && (
        <LogoSvg width={width} height={height} fill="#333" />
      )}
    </>
  );
}
