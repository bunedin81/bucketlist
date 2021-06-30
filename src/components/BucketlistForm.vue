<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="title">title: </label>
      <input type="text" id="title" v-model="title" />
    </div>
    <div>
      <label for="description">description: </label>
      <input type="text" id="description" v-model="description" />
    </div>
    <div>
      <label for="goalDate">goal date: </label>
      <input type="text" id="goalDate" v-model="goalDate" />
    </div>
    <b-button variant="info" type="submit"></b-button>
  </form>
</template>

<script>
export default {
  props: ['propsdata'],
  data() {
    return {
      title: '',
      description: '',
      goalDate: '',
    };
  },
  methods: {
    submitForm() {
      if (this.propsdata) {
        this.modifyBucketlist();
      } else {
        this.registerBucketlist();
      }
    },
    registerBucketlist() {
      const bucketlistData = {
        title: this.title,
        description: this.description,
        goalDate: this.goalDate,
        jwtToken: this.$cookies.get('jwt-auth-token'),
      };
    },
    modifyBucketlist() {
      const bucketlistData = {
        bucketlistId: propsdata.bucketlistId,
        title: this.title,
        description: this.description,
        goalDate: this.goalDate,
        jwtToken: this.$cookies.get('jwt-auth-token'),
      };
    },
  },
};
</script>

<style></style>
