
import { TextField } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { IRepositoryProps } from '../../types/repositories';
import { UserProfileContext } from '../../context/user';
import { getProfileUser } from '../../service';
import { IProfileUserProps } from '../../types/profileUser';

export const ModalComponent = ({children}: any) => {
  
  const [show, setShow] = useState(false);
  const [nickname, setNickName] = useState('');
  const [repositories, setRepositories] = useState<IRepositoryProps[]>([]);
  const { setProfileUserLocalStored } = useContext(UserProfileContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSetNickname = async () => {
    if (nickname !== '') {
      
      var resProfile = await getProfileUser(nickname);

      const profileUserProp: IProfileUserProps = {
        id: resProfile.id,
        name: resProfile.name,
        public_repos: resProfile.public_repos,
        avatar_url: resProfile.avatar_url,
        login: resProfile.login
      }

      await setProfileUserLocalStored(profileUserProp)      
      
    } else if (nickname === '' && !repositories) {
      setRepositories([]);
    }
  }

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Button onClick={handleShow} style={{
          height: '55px',
          alignSelf: 'center',
          borderRadius: '15px',
          backgroundColor: '#114df545',
          fontWeight: '700'
        }}>
          {children}
        </Button>

      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body
          style={{ display: 'grid', padding: '5%' }}
        >
          <TextField
            label='Nickname'
            variant="standard"
            onChange={(event: any) => { setNickName(event.target.value) }}
          />
          <div style={{
            marginTop: '8%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button
              onClick={handleSetNickname}
              variant="contained"
              style={{
                margin: '2%',
                borderRadius: '20px'
              }}
            >Buscar usuário</Button>
            <Button
              variant="outlined"
              style={{
                margin: '2%',
                borderRadius: '20px',
                width: '30%'
              }}
              onClick={() => handleClose()}
            >Close</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}