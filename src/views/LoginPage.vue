<template>
  <div>
    <b-jumbotron
      header="Welcome & Share your bucketlist!"
      lead="Here's login Page!"
    >
      <b-button variant="light" @click="handleLogin">
        <b-icon icon="google" /> Login with Google Account</b-button
      >
    </b-jumbotron>
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
      } catch (e) {
        console.error(e);
        this.$router.push('/login');
      }
    },
    async getExistUser(userInfo) {
      try {
        const { response } = await getUserInfo(userInfo.userId);
        if (response.status) {
          this.setData(response.data);
          this.$router.push('/mybucketlist');
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
