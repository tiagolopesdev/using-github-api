import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useContext } from "react";
import { NavBar } from "../../components/Navbar";
import { UserProfileContext } from "../../context/user";

export const Profile = () => {

    const { user } = useContext(UserProfileContext);

    return (
        <>
            <NavBar />
            <div
                style={{
                    marginTop: '200px',
                    display: 'flex',
                    justifyContent: 'center'                    
                }}
            >
                <Card style={{ padding: '2rem', borderRadius: '15px', backgroundColor: '#E7FBFF' }}>
                    <CardContent>
                        <div style={{ display: "flex" }} >
                            <div>
                                <img src='https://avatars.githubusercontent.com/u/58925056?v=4' style={{ borderRadius: '50%', width: '15rem' }} />
                                <div style={{ display: 'grid', justifyItems: "center" }} >
                                    <p style={{
                                        fontSize: '18pt',
                                        fontWeight: 'bold'
                                    }}>Biografia</p>
                                    <p>Localização</p>
                                </div>
                            </div>
                            <div
                                style={{
                                    marginLeft: '10%',
                                    marginTop: '5%',
                                    minWidth: '50%'
                                }}
                            >
                                <h1>Tiago Lopes</h1>
                                <p>saxtiago14@gmail.com</p>
                                <div style={{ display: "flex", justifyContent: "end", marginTop: '15%' }} >
                                    <div style={{
                                        display: 'grid',
                                        justifyItems: 'center'
                                    }}>
                                        <h4 style={{ marginBottom: '0px' }}>000</h4>
                                        <p>Seguidores</p>
                                    </div>
                                    <div style={{
                                        marginLeft: '20px',
                                        display: 'grid',
                                        justifyItems: 'center'
                                    }} >
                                        <h4 style={{ marginBottom: '0px' }}>000</h4>
                                        <p>Seguindo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            style={{
                                borderRadius: '20px',
                                padding: '5px 50px'
                            }}
                        >Perfil do github</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}
