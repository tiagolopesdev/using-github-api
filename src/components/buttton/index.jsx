
export const Button = ({...props}) => {
    return (
        <button {...props} style={{
            'width': '10rem',
            'padding': '0.4rem',
            'border': 'none',
            'borderRadius': '30px',
            'backgroundColor': '#FFFFFF',
            'color': '#4C86BB',
            'fontSize': '12pt',
            'fontWeight': 'bold'
        }}>{props.diplaytext}</button>
    );
}
