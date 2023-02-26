import ListIcon from '../../assets/list.svg';
import ProfileIcon from '../../assets/profile.svg';
import SettingsIcon from '../../assets/settings.svg';

import { ModalComponent } from '../Modal';
import { Link } from 'react-router-dom';
import { ActionIcon } from '../ActionIcons';

import Button from '@mui/material/Button';

import './style.css';

const styleLink = {
    alignSelf: 'center',
    borderRadius: '15px',
    backgroundColor: '#114df545',
    marginLeft: '2%'
}

const styleButton = {
    height: '55px'
}

export const NavBar = () => {

    //TODO: Convenção de uso de container
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
                    <ActionIcon src={String(SettingsIcon)} alt='Icon settings user'/>
                </ModalComponent>
                <Link to='/profile' style={styleLink}>
                    <Button
                        sx={styleButton}
                    >
                        <ActionIcon
                            src={String(ProfileIcon)}
                            alt='Icon profile page'
                        />
                    </Button>
                </Link>
                <Link to='/' style={styleLink}>
                    <Button
                        sx={styleButton}
                    >
                        <ActionIcon
                            src={String(ListIcon)}
                            alt='Icon list repositories'
                        />
                    </Button>
                </Link>
            </div>
        </div >
    );
}
