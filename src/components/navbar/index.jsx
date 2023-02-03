import './style.css';

export const NavBar = ({props}) => {

    //console.log('Img ', props.avatar_url);

    return (
        <div style={{
            // position: 'fixed',
            width: '100%',
            height: '115px',
            left: '0px',
            top: '0px',
            background: '#4097E7',
            'boxShadow': '0px 4px 12px 1px rgba(0, 0, 0, 0.5)',
        }}>

        <img src={props?.avatar_url} className='imgStyle'/>

            <p style={{
                'position': 'absolute',
                'width': '350px',
                'height': '49px',
                'left': '900px',
                'marginTop': '40px',
                'fontFamily': 'Montserrat',
                'fontSize': '25px',
                'color': '#FFFFFF',
            }}>
                Repositórios: 000
            </p>
        </div >
    );
}
