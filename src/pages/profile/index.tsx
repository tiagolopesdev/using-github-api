import { useContext, useEffect } from "react";
import { UserProfileContext } from "../../context/user";

export const Profile = () => {

    const { assigUserProfile, user } = useContext(UserProfileContext);

    console.log('User in profile ', user);

    if(!user) {
        return (
            <div>
                <h1>{user?.name}</h1>
                <h1>{user?.public_repos}</h1>
                <h1>{user?.avatar_url}</h1>
            </div>
        );
    }
}
