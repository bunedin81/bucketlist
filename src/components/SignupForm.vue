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
        v-model="userInfo.userName"
        type="text"
        placeholder="Enter your Name"
        required
      >
      </b-form-input>
    </b-form-group>
    <b-form-group
      id="birthYear"
      label="Birth Year"
      label-for="dpickerBirthYear"
      description="Please input your birth year."
    >
      <vuejs-datepicker
        id="dpickerBirthYear"
        v-model="userInfo.birthYear"
        minimum-view="year"
        required
      ></vuejs-datepicker>
    </b-form-group>
    <b-form-group
      id="sex"
      label="Sex"
      label-for="inputSex"
      description="Please input your sex."
    >
      <b-form-select
        id="inputSex"
        v-model="userInfo.sex"
        v-bind:options="sexoption"
        placeholder="Enter your Sex"
        required
      ></b-form-select>
    </b-form-group>
    <b-form-group
      id="country"
      label="Country"
      label-for="inputCountry"
      description="Please input your country."
    >
      <b-form-select
        id="inputCountry"
        v-model="userInfo.country"
        v-bind:options="countryOption"
        placeholder="Enter your Country"
        required
      ></b-form-select>
    </b-form-group>
    <b-form-group
      id="city"
      label="City"
      label-for="inputCity"
      description="Please input your city."
    >
      <b-form-select
        id="inputCity"
        v-model="userInfo.city"
        :options="cityOption"
        placeholder="Enter your City"
        required
      ></b-form-select>
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
      userInfo: {
        userName: '',
        birthYear: '',
        sex: '',
        country: '',
        city: '',
      },
      sexOption: [{ text: 'Choose your sex', value: null }, 'male', 'female'],
      countryOption: ['South Korea', 'U.S.A', 'Russia', 'Jappan', 'China'],
      cityOption: [
        'Seoul',
        'Busan',
        'Nevada',
        'Vladivostok',
        'Tokyo',
        'Beijing',
      ],
    };
  },
  methods: {
    async submitForm() {
      if (propsdata.signup == 'YES') {
        //modify user
      } else {
        const userData = {
          userId: propsdata.userId.trim(),
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
      }

      this.initForm();
    },
    initForm() {
      this.userInfo.userName = '';
      this.userInfo.birthYear = '';
      this.userInfo.sex = '';
      this.userInfo.country = '';
      this.userInfo.city = '';
    },
  },
  created() {
    if (propsdata.signup == 'YES') {
      this.userInfo.userName = propsdata.userName;
      this.userInfo.birthYear = propsdata.birthYear;
      this.userInfo.sex = propsdata.sex;
      this.userInfo.country = propsdata.country;
      this.userInfo.city = propsdata.city;
    }
  },
};
</script>

<style></style>
