<template>
  <div id="app">
    <nav-bar></nav-bar>
    <p>User BucketList</p>
    <div>
      <label for="ta-username">Name</label>
      <textarea
        name="ta-username"
        id=""
        cols="30"
        rows="1"
        v-model="userInfo.userName"
      ></textarea>
      <label for="ta-usersex">Sex</label>
      <textarea
        name="ta-usersex"
        id=""
        cols="30"
        rows="1"
        v-model="userInfo.userSex"
      ></textarea>
      <label for="ta-usercountry">Country</label>
      <textarea
        name="ta-usercountry"
        id=""
        cols="30"
        rows="1"
        v-model="userInfo.userCountry"
      ></textarea>
      <label for="ta-usercity">City</label>
      <textarea
        name="ta-usercity"
        id=""
        cols="30"
        rows="1"
        v-model="userInfo.userCity"
      ></textarea>
      <label for="ta-userbirthyear">Birth Year</label>
      <textarea
        name="ta-userbirthyear"
        id=""
        cols="30"
        rows="1"
        v-model="userInfo.userBirthYear"
      ></textarea>
    </div>
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
        <button v-on:click="deleteBucketlist(bucketlist)">
          Delete From List
        </button>
      </li>
    </ul>
    <button>New List</button>
  </div>
</template>

<script>
import { NavBar } from '../components/layout/NavBar.vue';
import { deleteUserBucketlist } from '../api/index.js';
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
    async deleteBucketlist(bucketlist) {
      userData = {
        userId: this.$store.getters.getUserInfo.userId,
        bucketlistId: bucketlist.id,
      };
      await deleteUserBucketlist(userData);
      //exception?
    },
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
