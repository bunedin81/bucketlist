import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

function getUserInfo(userData) {
  return instance.get('user', userData);
}

function getUserBucketlist(userId) {
  return instance.get('userbucketlist', userId);
}

function deleteUserBucketlist(userData) {
  return instance.delete('userbucketlist', userData);
}

export { getUserInfo, registerUser, getUserBucketlist, deleteUserBucketlist };
