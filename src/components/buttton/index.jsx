import { ButtonStyle } from "./style";

export const Button = (...props) => {
    return (
        <ButtonStyle {...props}>
            {props[0].displaytext}
        </ButtonStyle>
    );
}
