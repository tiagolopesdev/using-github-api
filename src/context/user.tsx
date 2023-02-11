import { createContext, useState } from "react";

export const UserProfileContext = createContext({} as any);

interface IProfileUserProps {
    id: string,
    name: string,
    public_repos: string,
    avatar_url: string,
    login: string
}

export const UserProfileProvider = ({ children }: any) => {

    const [user, setUser] = useState<IProfileUserProps>();
    const [isStorage, setIsStorage] = useState(false);

    const getStorageProfileUser = async () => {

        const profileExist = await getProfileUserStored()

        if (profileExist.login !== 'null') setIsStorage(true);
    }

    const setProfileUser = (id: string, name: string, public_repos: string, avatar_url: string, login: string) => {
        localStorage.setItem("profileUser.id", id)
        localStorage.setItem("profileUser.name", name)
        localStorage.setItem("profileUser.public_repos", public_repos.toString())
        localStorage.setItem("profileUser.avatar_url", avatar_url)
        localStorage.setItem("profileUser.login", login)
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

    const assigUserProfile = async (profileUserProps: IProfileUserProps) => {
        await setProfileUser(
            profileUserProps.id, 
            profileUserProps.name, 
            profileUserProps.public_repos, 
            profileUserProps.avatar_url,
            profileUserProps.login
        );        
    }

    return (
        <UserProfileContext.Provider 
            value={{ 
                assigUserProfile, 
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
