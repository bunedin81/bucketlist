<template>
    <div>
        <p>This is Login Page.</p>
        <button @click="handleLogin">Google ID로 로그인</button>
    </div>
</template>

<script>
import { getUserInfo } from '@/api/index';
export default {
    data() {
        return {
        };
    },
    methods: {
        async handleLogin() {
            try {
                const googleUser = await this.$gAuth.signIn();
                this.$store.commit('setUserId', googleUser.getBasicProfile().getId());
                this.$store.commit('setUserEmail', googleUser.getBasicProfile().getEmail());
                const userData = {
                    userId: this.$store.getters.getUserId,
                    userEmail: this.$store.getters.getUserEmail,
                }
                getExistUser(userData)
            } catch (e) {
                console.error(e);
            } finally {
                this.$router.push('/mybucketlist');
            }
        },
        async getExistUser(userData) {
            const { data } = await getUserInfo(userData);
            if (data.isExist) {
                this.$store.commit('setUserName', data.name);
                this.$store.commit('setUserSex', data.sex);
                this.$store.commit('setUserCountry', data.country);
                this.$store.commit('setUserCity', data.city);
                this.$store.commit('setUserBirthYear', data.birthyear);
                this.$router.push('/mybucketlist');
            } else {
                this.$router.push('/signup')
            }
        },
    }
}
</script>

<style>

</style>