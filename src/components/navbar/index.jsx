import './style.css';
import ProfileIcon from '../../assets/profile.svg';
import SettingsIcon from '../../assets/settings.svg';

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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img src={SettingsIcon} alt='Icon profile page' style={{ width: '40px', margin: '15px' }}/>
                <img src={ProfileIcon} alt='Icon profile page' style={{ width: '40px', margin: '15px' }}/>
            </div>
            
            {/* <img 
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
            </p> */}
        </div >
    );
}
