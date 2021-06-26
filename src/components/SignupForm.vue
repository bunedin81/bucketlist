<template>
  <form v-on:submit.prevent>
    <div>
      <label for="userName">userName: </label>
      <input for="text" id="userName" v-model="userName" />
    </div>
    <div>
      <label for="birthYear">birthYear: </label>
      <input type="number" id="birthYear" v-model="birthYear" />
    </div>
    <div>
      <label for="sex">sex: </label>
      <input type="text" id="sex" v-model="sex" />
    </div>
    <div>
      <label for="country">country: </label>
      <input type="text" id="country" v-model="country" />
    </div>
    <div>
      <label for="city">city: </label>
      <input type="text" id="city" v-model="city" />
    </div>
    <button type="submit">Signup</button>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      userName: '',
      birthYear: '',
      sex: '',
      country: '',
      city: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        userId: this.$store.getters.getUserId,
        userEmail: this.$store.getters.getUserEmail,
        userName: this.userName,
        birthYear: this.birthYear,
        sex: this.sex,
        country: this.country,
        city: this.city,
      };
      const { data } = await registerUser(userData);
      if (data.response == 'OK') {
        this.$router.push('/mybucketlist');
      }
      this.initForm();
    },
    initForm() {
      this.userName = '';
      this.birthYear = '';
      this.sex = '';
      this.country = '';
      this.city = '';
    },
  },
};
</script>

<style></style>
