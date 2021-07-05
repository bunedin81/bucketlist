<template>
  <div>
    <nav-bar></nav-bar>
    <p>Welcome!</p>
    <p>{{ userIfo.userId }}</p>
    <signup-form v-bind:propsdata="userInfo"></signup-form>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import NavBar from '@/components/layout/NavBar.vue';

export default {
  data() {
    return {
      userInfo: {
        userId: this.$router.userInfo.userId,
        userEmail: this.$router.userInfo.userEmail,
        singup: 'YES',
      },
    };
  },
  components: {
    SignupForm,
    NavBar,
  },
};
</script>

<style></style>
