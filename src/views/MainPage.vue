<template>
  <div>
    <nav-bar v-bind:propsdata="userId" />
    <p>This is main Page.</p>
    <b-img
      src="https://hip2save.com/wp-content/uploads/2020/06/Summer-bucket-list-printable.jpg?resize=1024%2C538&strip=all?w=1200&strip=all"
      fluid
      alt="Responsive image"
    ></b-img>
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
      userId: null,
    };
  },
  created() {
    this.userId = this.$store.getters.getUserId;
  },
};
</script>

<style></style>
