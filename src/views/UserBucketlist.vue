<template>
    <div id="app">
        <p>User BucketList</p>
        <ul v-model="userInfo">
            <li>
                {{ userInfo.userName }}
                {{ userInfo.userSex }}
                {{ userInfo.userCountry }}
                {{ userInfo.userCity }}
                {{ userInfo.userBirthYear }}
            </li>
        </ul>
        <ul v-model="bucketlists">
            <li v-for="bucketlist in bucketlists">
                {{ bucketlist.title }}
                <route-link to="`/bucketlist/${bucketlist.id}`">Detail</route-link>
                <button v-on:click="toggleAchived">Achived?</button>
                <button>Edit List</button>
                <button>Delete From List</button>
            </li>
        </ul>
        <button>New List</button>
    </div>
</template>

<script>
import { getUserBucketlist } from '@/api/index'
export default {
    data() {
        return {
            bucketlists: null,
            userInfo: {
                userName: this.$store.getters.getUserName,
                userSex: this.$store.getters.getUserSex,
                userCountry: this.$store.getters.getUserCountry,
                userCity: this.$store.getters.getUserCity,
                userBirthYear: this.$store.getters.getBirthYear,
            }
        }  
    },
    methods: {
        async getUserBucketlist() {
            const userId = this.$store.getters.getUserId;
            const { data } = await getUserBucketlist(userId);
            bucketlists = data;
        },
    },
    created() {
        this.getUserBucketlist();
    },
}
</script>

<style>

</style>