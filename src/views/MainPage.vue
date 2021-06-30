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
        Meaning of Bucketlist
      </p>
      <p>
        From kick the bucket (“to die”) + list, hence a “list of things to do
      </p>
      <p>before you die”. The term was coined by American and British</p>
      <p>screenwriter Justin Zackham in his screenplay for the 2007 film The</p>
      <p>
        Bucket List. Zackham had created his own list called “Justin’s List of
      </p>
      <p>Things to Do Before I Kick the Bucket” which he then shortened to</p>
      <p>“Justin’s Bucket List”. The first item on his list was to have a</p>
      <p>screenplay produced at a major Hollywood studio. After a time, it</p>
      <p>occurred to him that the notion of a “bucket list” could itself be</p>
      <p>
        fodder for a film, so he wrote a screenplay about two dying men racing
      </p>
      <p>to complete their own bucket lists with the time they had left.</p>
      <p>Articles about the movie are the earliest known uses</p>
    </b-jumbotron>
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
