import { ImgHTMLAttributes } from "react";
import { ImgStyle } from "./style";

interface IActionIconProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function ActionIcon(props: IActionIconProps){
  return <ImgStyle {...props}/>
}
