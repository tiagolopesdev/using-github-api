import { createContext, ReactNode, useEffect, useState } from "react";
import { IProfileUserProps } from "../@types/profileUser";

interface IUserProfileContext {
    children: ReactNode | ReactNode[];
}

export const UserProfileContext = createContext({} as any);


export const UserProfileProvider = ({ children }: IUserProfileContext) => {

    //const [user, setUser] = useState<IProfileUserProps>();
    const [isStorage, setIsStorage] = useState(false);

    // useEffect(() => {
    //     if(isStorage) {
    //         const userCurrent = getProfileUserStored();
    //         console.log('If COntext ', userCurrent)
    //         setUser(userCurrent)
    //     }
    // }, [isStorage, user])

    // console.log('User in context ', user)
    // console.log('IsStored ', isStorage)

    const setProfileUserLocalStored = (props: IProfileUserProps) => {        
        localStorage.setItem("profileUser.id", props.id)
        localStorage.setItem("profileUser.name", props.name)
        localStorage.setItem("profileUser.public_repos", props.public_repos.toString())
        localStorage.setItem("profileUser.avatar_url", props.avatar_url)
        localStorage.setItem("profileUser.login", props.login)
        setIsStorage(true);
    };

    const getProfileUserStored = () => {
        
        var userProfile: IProfileUserProps = { id: '', name: '', public_repos: '', avatar_url: '', login: '' };
        
        if (typeof window == 'undefined') return userProfile
        
        userProfile = {
            id: `${localStorage.getItem("profileUser.id")}`,
            name: `${localStorage.getItem("profileUser.name")}`,
            public_repos: `${localStorage.getItem("profileUser.public_repos")}`,
            avatar_url: `${localStorage.getItem("profileUser.avatar_url")}`,
            login: `${localStorage.getItem("profileUser.login")}`
        }
        return userProfile
    }

    return (
        <UserProfileContext.Provider 
            value={{ 
                setProfileUserLocalStored,
                //user,
                getProfileUserStored,
                isStorage,
                setIsStorage
            }}
        >
            {children}
        </UserProfileContext.Provider>
    );
}
