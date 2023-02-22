import './style.css';
import ListIcon from '../../assets/list.svg';
import ProfileIcon from '../../assets/profile.svg';
import SettingsIcon from '../../assets/settings.svg';
import { ModalComponent } from '../modal';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ActionIcon } from '../actionIcons';

const styleButton = {
    height: '55px'
}

export const NavBar = () => {

    return (
        <div style={{
            position: 'fixed',
            display: 'grid',
            width: '100%',
            height: '115px',
            left: '0px',
            top: '0px',
            background: '#4097E7',
            boxShadow: '0px 4px 12px 1px rgba(0, 0, 0, 0.5)',
        }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <ModalComponent>
                    <ActionIcon
                        src={SettingsIcon}
                        descriptAlt='Icon settings user'
                    />
                </ModalComponent>
                <Link
                    to='/profile'
                    style={{
                        alignSelf: 'center',
                        borderRadius: '15px',
                        backgroundColor: '#114df545',
                        marginLeft: '2%'
                    }}>
                    <Button
                        sx={styleButton}
                    >
                        <ActionIcon
                            src={ProfileIcon}
                            descriptAlt='Icon profile page'
                        />
                    </Button>
                </Link>
                <Link to='/' style={{
                    alignSelf: 'center',
                    borderRadius: '15px',
                    backgroundColor: '#114df545',
                    marginLeft: '2%'
                }}>
                    <Button
                        sx={styleButton}
                    >
                        <ActionIcon
                            src={ListIcon}
                            descriptAlt='Icon list repositories'
                        />
                    </Button>
                </Link>
            </div>
        </div >
    );
}
