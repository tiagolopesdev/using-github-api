import { InputStyle } from "./style";

export const Input = (...props) => {

    return (
        <InputStyle 
            {...props}
            type='text'
            placeholder={props[0].placeholder}
        />
    );
}
