import { userChannel, repositoryChannel } from "./api"

// https://api.github.com/users/tiagolopesdev
// https://api.github.com/users/tiagolopesdev/repos
// https://api.github.com/repos/tiagolopesdev/cobranca/commits

export const getCommitsByRepository = async (nickName: string, nameRepository: string) => {
    return await repositoryChannel.get(`${nickName}/${nameRepository}/commits`)
        .then(res => { return res.data });
}

export const getProfileUser = async (user: string) => {
    return await userChannel.get(`${user}`)
        .then(res => { return res.data });
}

export const getRepositoriesByUser = async (user: string) => {
    return await userChannel.get(`${user}/repos`)
        .then((res) => { return res.data });
}
