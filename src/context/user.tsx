import { createContext, ReactNode, useState } from "react";
import { IProfileUserProps } from "../@types/profileUser";

interface IUserProfileContextProvider {
    children: ReactNode
}

interface IUserProfileContext {
    user: IProfileUserProps;
    handleSetUserProfile: (user: IProfileUserProps) => void;
    handleGetUserProfile: () => IProfileUserProps;
}

export const UserProfileContext = createContext({} as IUserProfileContext);

export const UserProfileProvider = ({ children }: IUserProfileContextProvider) => {

    const [user, setUser] = useState<IProfileUserProps>({
        id: "",
        name: "",
        public_repos: "",
        avatar_url: "",
        login: ""
    });

    const handleSetUserProfile = (userProps: IProfileUserProps) => { 
        setUser(userProps);
        localStorage.setItem("@app-profileUser-v1", JSON.stringify(userProps));
    };

    const handleGetUserProfile = () => {        
        const actualUser: IProfileUserProps = JSON.parse(localStorage.getItem("@app-profileUser-v1") as string);

        setUser(actualUser);

        return actualUser;
    }

    return (
        <UserProfileContext.Provider 
            value={{ 
                user,
                handleSetUserProfile,
                handleGetUserProfile,
            }}
        >
            {children}
        </UserProfileContext.Provider>
    );
}
