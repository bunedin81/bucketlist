<template>
    <div>
        <p>This is main Page.</p>
        <router-link to='/login' v-if="!userId">login</router-link>
        <button v-on:click="googleLogout" v-else>Logout</button>
        <router-link to='/mybucketlist' v-if="userId">My Bucketlist</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: null,
            userName: null,
            userEmail: null,
        }
    },
    methods: {
        async googleLogout() {
            try {
                await this.$gAuth.signOut();
                this.clearUserInfo();
                console.log("well done")
            } catch (e) {
                console.log("something happend")
                console.error(e);
            } finally {
                console.log("finished");
                this.$router.push('/');
            }
        },
        clearUserInfo() {
            this.$store.commit('setUserId', '');
            this.$store.commit('setUserName', '');
            this.$store.commit('setUserEmail', '');
        },
    },
    created() {
        this.userId = this.$store.getters.getUserId;
        this.userName = this.$store.getters.getUserName;
        this.userEmail = this.$store.getters.getUserEmail;
    }
}
</script>

<style>

</style>