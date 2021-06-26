<template>
  <div id="app">
    <nav-bar></nav-bar>
    <p>User BucketList</p>
    <p>
      {{ userInfo.userName }}, {{ userInfo.userSex }},
      {{ userInfo.userCountry }}, {{ userInfo.userCity }},
      {{ userInfo.userBirthYear }}
    </p>
    <ul>
      <li v-for="bucketlist in bucketlists" v-bind:key="bucketlist">
        {{ bucketlist.title }}
        <route-link to="`/bucketlist/${bucketlist.id}/detail`"
          >Detail</route-link
        >
        <button v-on:click="toggleAchived">Achived?</button>
        <button>Edit List</button>
        <button>Delete From List</button>
      </li>
    </ul>
    <button>New List</button>
  </div>
</template>

<script>
import { getUserBucketlist } from '@/api/index';
import { NavBar } from '../components/layout/NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      bucketlists: null,
      userInfo: {
        userName: this.$store.getters.getUserName,
        userSex: this.$store.getters.getUserSex,
        userCountry: this.$store.getters.getUserCountry,
        userCity: this.$store.getters.getUserCity,
        userBirthYear: this.$store.getters.getBirthYear,
      },
    };
  },
  methods: {
    async getUserBucketlist() {
      const userId = this.$store.getters.getUserId;
      try {
        const { data } = await getUserBucketlist(userId);
        this.bucketlists = data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getUserBucketlist();
  },
};
</script>

<style></style>
