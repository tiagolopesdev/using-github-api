import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext } from "react";
import { NavBar } from "../../components/Navbar";
import { UserProfileContext } from "../../context/user";
import { Button } from "../../components/Button";

export const Profile = () => {

    const { user } = useContext(UserProfileContext);

    // useEffect(() => {

    //     getStorageProfileUser()

    //     if (isStorage) {
    //         getProfileUserStored()
    //     }

    // }, [isStorage])

    return (
        <>
            <NavBar />
            <div
                style={{ marginTop: '200px' }}
            >
                <Card sx={{ maxWidth: '80%' }}>
                    {/* <img src={user?.avatar_url} /> */}
                    {/* <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={`${user?.avatar_url}`}
                    /> */}
                    <CardContent>
                        <div style={{ display: "flex" }} >
                            <div>
                                <img src={user?.avatar_url} style={{ borderRadius: '50%' }} />
                                <div style={{ display: 'grid', justifyItems: "center" }} >
                                    <p>Biografia</p>
                                    <p>Localização</p>
                                </div>
                            </div>
                            <div >
                                <h1>NICKNAME</h1>
                                <h4>EMAIL</h4>
                                <div style={{ display: "flex", justifyContent: "end" }} >
                                    <div style={{
                                        display: 'grid',
                                        justifyItems: 'center'
                                    }}>
                                        <p style={{ marginBottom: '0px' }}>000</p>
                                        <p>Seguidores</p>
                                    </div>
                                    <div style={{
                                        marginLeft: '20px',
                                        display: 'grid',
                                        justifyItems: 'center'
                                    }} >
                                        <p style={{ marginBottom: '0px' }}>000</p>
                                        <p>Seguindo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Typography gutterBottom variant="h5" component="div">
                            {user?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Share</Button>
                        <Button>Learn More</Button>
                    </CardActions>
                </Card>
            </div>

            {/* <h1>Acesso aos dados do perfil</h1>
            <div>
                <h1>{user?.name}</h1>
                <h1>{user?.public_repos}</h1>
                <h1>{user?.avatar_url}</h1>
            </div> */}
        </>
    );
}
