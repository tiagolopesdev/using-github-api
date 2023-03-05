import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: IButtonProps) => {

    const { children } = props;

    return (
        <ButtonStyle {...props}>
            {children}
        </ButtonStyle>
    );
}
