<template>
  <div>
    <p>This is Login Page.</p>
    <b-button @click="handleLogin">
      <b-icon icon="google" /> Google ID로 로그인</b-button
    >
  </div>
</template>

<script>
import { getUserInfo } from '@/api/index';
export default {
  data() {
    return {};
  },
  methods: {
    async handleLogin() {
      try {
        const googleUser = await this.$gAuth.signIn();

        const userInfo = {
          userId: googleUser.getBasicProfile().getId(),
          userEmail: googleUser.getBasicProfile().getEmail(),
        };
        this.getExistUser(userInfo);
        this.$router.push('/mybucketlist');
      } catch (e) {
        console.error(e);
        this.$router.push('/login');
      }
    },
    async getExistUser(userInfo) {
      try {
        const { response } = await getUserInfo(userInfo.userId);
        if (response.status) {
          setData(response.data);
        } else {
          alert('Not a user!');
          this.$router.push({
            path: '/signup',
            params: { userId: userInfo.userId, userEmail: userInfo.userEmail },
          });
        }
      } catch (e) {
        console.error(e);
        this.clearUserData();
        this.$router.push('/');
      }
    },
    setData(data) {
      this.$store.commit('setUserInfo', data.userInfo);
      this.$store.commit('setUserBucketlist', data.userBucketlist);
      this.$cookies.set('jwt-auth-token', data.headers.jwtAuthToken);
    },
    clearUserData() {
      this.$store.commit('setUserInfo', null);
      this.$store.commit('setUserBucketlist', null);
      this.$cookies.set('jwt-auth-token', null);
    },
  },
};
</script>

<style></style>
