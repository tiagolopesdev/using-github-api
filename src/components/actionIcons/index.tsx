import { HTMLAttributes } from "react";
import { ImgStyle } from "./style";

interface IActionIconProps extends HTMLAttributes<HTMLImageElement> {}

export function ActionIcon(props: IActionIconProps){
  return <ImgStyle {...props}/>
}
