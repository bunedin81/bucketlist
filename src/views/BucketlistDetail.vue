<template>
  <div>
    <nav-bar></nav-bar>
    <h4>{{ bucketlist.title }}</h4>
    <textarea
      name="description"
      id=""
      cols="30"
      rows="10"
      v-model="bucketlist.description"
      readonly
    ></textarea>
    <textarea
      name="goalDate"
      id=""
      cols="30"
      rows="10"
      v-model="bucketlist.goalDate"
      readonly
    ></textarea>
    <button v-bind="editBucketlist(userData)">Edit</button>
    <button v-bind="deleteBucketlist(userData)">Delte</button>
    <button>Cancel</button>
  </div>
</template>

<script>
import NavBar from '../components/layout/NavBar.vue';

export default {
  props: ['propsdata'],
  components: {
    NavBar,
  },
  data() {
    return {
      bucketlist: {
        title: this.propsdata.title,
        description: this.propsdata.description,
        goalDate: this.propsdata.goalDate,
      },
    };
  },
  methods: {
    editBucketlist(userData) {},
    deleteBucketlist(userData) {},
  },
};
</script>

<style></style>
