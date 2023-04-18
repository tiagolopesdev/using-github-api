/* eslint-disable jsx-a11y/alt-text */
import { Alert, Button, Card, CardActions, CardContent } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { NavBar } from "../../components/Navbar";
import { UserProfileContext } from "../../context/user";
import { getProfileUser } from "../../service";

interface IPropertysProfile {
    bio: string,
    blog: string,
    name: string,
    following: string,
    followers: string,
    location: string,
    html_url: string,
    avatar_url: string,
}

export const Profile = () => {

    const { user } = useContext(UserProfileContext);
    const [profile, setProfile] = useState<IPropertysProfile>();

    const getInformationsProfile = async (login: string) => {
        const response: IPropertysProfile = await getProfileUser(login);
        setProfile(response)
    }

    const redirectToGithub = () => {
        window.location.href = `${profile?.html_url}`;
    }

    useEffect(() => {

        if (user.login) getInformationsProfile(user.login)

    }, [user.login])

    const cardDisplayProfile = () => {
        return (
            <div
                style={{
                    marginTop: '200px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Card style={{ padding: '2rem', borderRadius: '15px', backgroundColor: '#E7FBFF' }}>
                    <CardContent style={{ minWidth: '40rem' }}>
                        {profile ?
                            <div style={{ display: "flex" }} >
                                <div style={{ minWidth: '5rem', width: '10rem' }}>
                                    <img
                                        src={profile?.avatar_url}
                                        style={{
                                            borderRadius: '50%',
                                            width: '15rem'
                                        }}
                                    />
                                    <div style={{ display: 'grid', justifyItems: "center" }} >
                                        <p style={{
                                            fontSize: '16pt',
                                            fontWeight: 'bold'
                                        }}>{profile?.bio}</p>
                                        <p>{profile?.location}</p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginLeft: '10%',
                                        marginTop: '5%',
                                        minWidth: '50%'
                                    }}
                                >
                                    <h1>{profile?.name}</h1>
                                    <p>{profile?.blog}</p>
                                    <div style={{ display: "flex", justifyContent: "end", marginTop: '15%' }} >
                                        <div style={{
                                            display: 'grid',
                                            justifyItems: 'center'
                                        }}>
                                            <h4 style={{ marginBottom: '0px' }}>{profile?.followers}</h4>
                                            <p>Seguidores</p>
                                        </div>
                                        <div style={{
                                            marginLeft: '20px',
                                            display: 'grid',
                                            justifyItems: 'center'
                                        }} >
                                            <h4 style={{ marginBottom: '0px' }}>{profile?.following}</h4>
                                            <p>Seguindo</p>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert severity="info" style={{ fontWeight: 'bold' }}>Insira seu nickname para obter informações do perfil</Alert>
                            </Stack>
                        }
                    </CardContent>
                    <CardActions
                        style={{
                            display: profile ? 'flex' : 'none',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            style={{
                                borderRadius: '20px',
                                padding: '5px 50px'
                            }}
                            onClick={() => { redirectToGithub() }}
                        >Perfil do github</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }

    return (
        <>
            <NavBar />
            {cardDisplayProfile()}
        </>
    );
}
