import { ButtonStyle } from "./style";

export const Button = ({displaytext, ...props}) => {
    return (
        <ButtonStyle {...props}>
            {displaytext}
        </ButtonStyle>
    );
}
