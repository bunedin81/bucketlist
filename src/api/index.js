import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
    return instance.post('signup', userData);
}

function getUserInfo(userId) {
    return instance.get('user', userId);
}

export { getUserInfo, registerUser };