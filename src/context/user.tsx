import { createContext, ReactNode, useEffect, useState } from "react";

const UserProfileContext = createContext({} as any);

interface IUserProfileProviderProps {
    children: ReactNode | ReactNode[]
}

interface IProfileUserProps {
  id: string,
  name: string,
  public_repos: number,
  avatar_url: string
}

function UserProfileProvider ({children}: IUserProfileProviderProps) {

    const [user, setUser] = useState<IProfileUserProps>();

    const assigUserProfile = async (nickname: IProfileUserProps) => {
        await setUser(nickname);
    }

    console.log('User in context ', user);
    
    return (
        <UserProfileContext.Provider
            value={{
                assigUserProfile,
                user
            }}
        >
            {children}
        </UserProfileContext.Provider>
    );
}

export { UserProfileContext, UserProfileProvider}

