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
        this.$store.commit('setUserId', googleUser.getBasicProfile().getId());
        this.$store.commit(
          'setUserEmail',
          googleUser.getBasicProfile().getEmail(),
        );
        const userData = {
          userId: this.$store.getters.getUserId,
          userEmail: this.$store.getters.getUserEmail,
        };
        this.getExistUser(userData);
      } catch (e) {
        console.error(e);
      } finally {
        this.$router.push('/mybucketlist');
      }
    },
    async getExistUser(userData) {
      try {
        const { data } = await getUserInfo(userData);
        if (data) {
          this.$store.commit('setUserName', data.name);
          this.$store.commit('setUserSex', data.sex);
          this.$store.commit('setUserCountry', data.country);
          this.$store.commit('setUserCity', data.city);
          this.$store.commit('setUserBirthYear', data.birthyear);
          this.$router.push('/mybucketlist');
        } else {
          this.$router.push('/signup');
        }
      } catch (e) {
        console.error(e);
        this.clearUserData();
        this.$router.push('/');
      }
    },
    clearUserData() {
      this.$store.commit('setUserId', '');
      this.$store.commit('setUserEmail', '');
    },
  },
};
</script>

<style></style>
