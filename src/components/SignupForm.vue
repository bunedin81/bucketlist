<template>
  <b-form v-on:submit.prevent="submitForm" v-on:reset.prevent="initForm">
    <b-form-group
      id="userName"
      label="User Name"
      label-for="inputUserName"
      description="Please input your name."
    >
      <b-form-input
        id="inputUserName"
        v-model="userName"
        type="text"
        placeholder="Enter your Name"
        required
      >
      </b-form-input>
    </b-form-group>
    <b-form-group
      id="birthYear"
      label="Birth Year"
      label-for="inputBirthYear"
      description="Please input your birth year."
    >
      <b-form-input
        id="inputBirthYear"
        v-model="birthYear"
        type="text"
        placeholder="Enter your Birth Year"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="sex"
      label="Sex"
      label-for="inputSex"
      description="Please input your sex."
    >
      <b-form-input
        id="inputSex"
        v-model="sex"
        type="text"
        placeholder="Enter your Sex"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="country"
      label="Country"
      label-for="inputCountry"
      description="Please input your country."
    >
      <b-form-input
        id="inputCountry"
        v-model="country"
        type="text"
        placeholder="Enter your Country"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="city"
      label="City"
      label-for="inputCity"
      description="Please input your city."
    >
      <b-form-input
        id="inputCity"
        v-model="city"
        type="text"
        placeholder="Enter your City"
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Signup</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  props: ['propsdata'],
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
        userId: propsdata.userId.trinm(),
        userEmail: propsdata.userEmail.trim(),
        userName: this.userName.trim(),
        birthYear: this.birthYear,
        sex: this.sex.trim(),
        country: this.country.trim(),
        city: this.city.trim(),
      };
      const { data } = await registerUser(userData);
      if (data.response == 200) {
        $route.push('/login');
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
