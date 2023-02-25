import { ImgStyle } from "./style";


export const ActionIcon = ({...props}) => {
  return (
    <ImgStyle {...props} alt={props.descriptAlt}/>
  );
}
