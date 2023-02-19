
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';

export const ModalComponent = ({children}: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            onChange={(e: any) => console.log('Clickando')}
          />
          <div style={{
            marginTop: '8%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button
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