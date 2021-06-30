<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Bucketlist</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button size="sm" v-if="!propsdata" href="/login">Login</b-button>
          <b-nav-item-dropdown right v-else>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="/user">
              Edit UserInfo
            </b-dropdown-item>
            <b-dropdown-item href="/mybucketlist"
              >My Bucketlist</b-dropdown-item
            >
            <b-dropdown-item v-on:click="googleLogout"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    async googleLogout() {
      try {
        await this.$gAuth.signOut();
        this.clearUserInfo();
        console.log('Signout Success');
      } catch (e) {
        console.log('Error exception when signing out');
        console.error(e);
      } finally {
        console.log('finished');
        this.$router.push('/');
      }
    },
    clearUserInfo() {
      this.$state.commit('setUserInfo', null);
      this.$state.commit('setUserBucketlist', null);
      this.$cookies.set('access-token', null);
      this.$cookies.set('refresh-token', null);
    },
  },
};
</script>

<style></style>
