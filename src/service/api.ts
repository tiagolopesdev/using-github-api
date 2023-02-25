import axios from "axios";

export const userChannel = axios.create({
    baseURL: 'https://api.github.com/users/'
});

export const repositoryChannel = axios.create({
    baseURL: 'https://api.github.com/repos/'
});
