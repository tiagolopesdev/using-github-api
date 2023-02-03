import { api } from "./api"

// https://api.github.com/users/tiagolopesdev
// https://api.github.com/users/tiagolopesdev/repos

export const getProfileUser = async (user: string) => {
    return await api.get(`${user}`)
        .then(res => { return res.data });;
}

export const getRepositoriesByUser = async (user: string) => {
    return await api.get(`${user}/repos`)
        .then((res) => { return res.data });
}
