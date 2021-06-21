<template>
    <div>
        <p>This is Login Page.</p>
        <button @click="handleLogin">Google ID로 로그인</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: null,
            userName: null,
            userEmail: null,
        };
    },
    methods: {
        async handleLogin() {
            try {
                const googleUser = await this.$gAuth.signIn();
                this.$store.commit('setUserId', googleUser.getBasicProfile().getId());
                //this.userId = googleUser.getBasicProfile().getId();
                //this.userName = googleUser.getBasicProfile().getName();
                this.$store.commit('setUserName', googleUser.getBasicProfile().getName());
                //this.userEmail = googleUser.getBasicProfile().getEmail();
                this.$store.commit('setUserEmail', googleUser.getBasicProfile().getEmail());
            } catch (e) {
                console.error(e);
            } finally {
                this.$router.push('/');
            }
        },
    }
}
</script>

<style>

</style>