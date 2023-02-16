import { InputStyle } from "./style";

export const Input = ({ placeholder, ...props }) => {

    return (
        <InputStyle 
            {...props}
            type='text'
            placeholder={placeholder}
            style={{
                'border': 'none',
                'padding': '0.8rem',
                'marginRight': '10px',
                'borderRadius': '30px',
                'outlineStyle': 'none'
            }}
        />
    );
}
