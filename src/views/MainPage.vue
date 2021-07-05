<template>
  <div>
    <nav-bar v-bind:propsdata="userToken" />
    <b-jumbotron
      bg-variant="secondary"
      text-variant="white"
      border-variant="dark"
      header="Bucketlist Main Page"
      lead="Why don't you share your bucketlist?"
    >
      <b-img
        src="https://hip2save.com/wp-content/uploads/2020/06/Summer-bucket-list-printable.jpg?resize=1024%2C538&strip=all?w=1200&strip=all"
        fluid
        alt="Responsive image"
      ></b-img>
      <p>
        Don't forget your dreams
      </p>
    </b-jumbotron>
    <p align="right">Copywright with Bunedin, Goun</p>
  </div>
</template>

<script>
import NavBar from '../components/layout/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      userToken: null,
    };
  },
  created() {
    this.userToken = this.$cookies.get('access-token');
  },
};
</script>

<style></style>
