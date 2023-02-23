import { userChannel, repositoryChannel } from "./api"

// https://api.github.com/users/tiagolopesdev
// https://api.github.com/users/tiagolopesdev/repos
// https://api.github.com/repos/tiagolopesdev/cobranca/commits

export const getCommitsByRepository = async (nickName: string, nameRepository: string) => {
    const response = await repositoryChannel.get(`${nickName}/${nameRepository}/commits`);
    return response.data;
}

export const getProfileUser = async (user: string) => {
    const response = await userChannel.get(`${user}`);
    return response.data;
}

export const getRepositoriesByUser = async (user: string) => {
    const response = await userChannel.get(`${user}/repos`);
    return response.data;
}
