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
      <li v-for="bucketlist in userBucketlist" v-bind:key="bucketlist">
        {{ bucketlist.title }}
        <route-link to="`/bucketlist/${bucketlist.id}/detail`"
          >Detail</route-link
        >
        <b-button v-if="bucketlist.achieved == 1" v-on:click="toggleAchieved">
          Not yet Achieved..
        </b-button>
        <b-button v-on:click="toggleAchieved" v-else>Achieved!</b-button>
        <button v-on:click="moveToEdit(bucketlist)">Edit List</button>
        <button v-on:click="deleteBucketlist">Delete From List</button>
      </li>
    </ul>
    <button>New List</button>
  </div>
</template>

<script>
import { NavBar } from '../components/layout/NavBar.vue';
export default {
  data() {
    return {
      userInfo: this.$store.getters.getUserInfo,
      userBucketlist: this.$store.getters.getUserBucketlist,
    };
  },
  components: {
    NavBar,
  },
  data() {
    return {};
  },
  methods: {
    toggleAchieved() {},
    moveToEdit(bucketlist) {
      this.$route.push({
        path: `/mybucetlist/{{ bucketlist.id }}/edit`,
        params: bucketlist,
      });
    },
    deleteBucketlist() {},
    // async getUserBucketlist() {
    //   const userId = this.$store.getters.getUserId;
    //   try {
    //     const { data } = await getUserBucketlist(userId);
    //     this.bucketlists = data;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
  },
  created() {
    // this.getUserBucketlist();
  },
};
</script>

<style></style>
