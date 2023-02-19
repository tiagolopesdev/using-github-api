import { useContext, useEffect } from "react";
import { NavBar } from "../../components/navbar";
import { UserProfileContext } from "../../context/user";

export const Profile = () => {

    const { user, isStorage, getStorageProfileUser, getProfileUserStored } = useContext(UserProfileContext);

    useEffect(() => {

        getStorageProfileUser()

        if (isStorage) {
            getProfileUserStored()
        }

    }, [isStorage])

    return (
        <>
            <NavBar />
            <h1>Acesso aos dados do perfil</h1>
            <div>
                <h1>{user?.name}</h1>
                <h1>{user?.public_repos}</h1>
                <h1>{user?.avatar_url}</h1>
            </div>
        </>
    );
}
