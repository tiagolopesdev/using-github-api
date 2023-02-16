import { createContext, useState } from "react";
import { IProfileUserProps } from "../types/profileUser";

export const UserProfileContext = createContext({} as any);


export const UserProfileProvider = ({ children }: any) => {

    const [user, setUser] = useState<IProfileUserProps>();
    const [isStorage, setIsStorage] = useState(false);

    const getStorageProfileUser = async () => {

        const profileExist = await getProfileUserStored()

        if (profileExist.login !== 'null') setIsStorage(true);
    }

    const setProfileUserLocalStored = (props: IProfileUserProps) => {        
        localStorage.setItem("profileUser.id", props.id)
        localStorage.setItem("profileUser.name", props.name)
        localStorage.setItem("profileUser.public_repos", props.public_repos.toString())
        localStorage.setItem("profileUser.avatar_url", props.avatar_url)
        localStorage.setItem("profileUser.login", props.login)
    };

    const getProfileUserStored = async (): Promise<IProfileUserProps> => {
        
        var userProfile: IProfileUserProps = { id: '', name: '', public_repos: '', avatar_url: '', login: '' };
        
        if (typeof window == 'undefined') return userProfile
        
        userProfile = {
            id: `${localStorage.getItem("profileUser.id")}`,
            name: `${localStorage.getItem("profileUser.name")}`,
            public_repos: `${localStorage.getItem("profileUser.public_repos")}`,
            avatar_url: `${localStorage.getItem("profileUser.avatar_url")}`,
            login: `${localStorage.getItem("profileUser.login")}`
        }
        setUser(userProfile);

        return userProfile;
    }

    return (
        <UserProfileContext.Provider 
            value={{ 
                setProfileUserLocalStored,
                user,
                getProfileUserStored,
                getStorageProfileUser,
                isStorage
            }}
        >
            {children}
        </UserProfileContext.Provider>
    );
}
