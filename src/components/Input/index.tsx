import { HTMLAttributes } from "react";
import { InputStyle } from "./style";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {}

export const Input = (props: IInputProps) => {

    return (
        <InputStyle {...props} />
    );
}
