<template>
  <div>
    Signup Page
    <signup-form v-bind:propsdata="userInfo"></signup-form>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  data: {
    userInfo: {
      userId = this.$router.userInfo.userId,
      userEmail = this.$router.userInfo.userEmail,
    },
  },
  components: {
    SignupForm,
  },
};
</script>

<style></style>
