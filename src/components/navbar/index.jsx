import './style.css';

export const NavBar = ({children, props}) => {

    return (
        <div style={{
            'position': 'fixed',
            'display': 'grid',
            width: '100%',
            height: '115px',
            left: '0px',
            top: '0px',
            background: '#4097E7',
            'boxShadow': '0px 4px 12px 1px rgba(0, 0, 0, 0.5)',
        }}>

            <img 
                src={props?.avatar_url} 
                className='imgStyle'
                alt='img profile'
            />
            
            {children}

            <p style={{
                'position': 'absolute',
                'width': '160%',
                'marginTop': '40px',
                'fontSize': '25px',
                'color': '#FFFFFF',
            }}>
                Repositórios: {props?.public_repos}
            </p>
        </div >
    );
}
