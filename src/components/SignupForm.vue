<template>
    <form v-on:submit.prevent>
        <div>
            <label for="userId">id: </label>
            <input type="text" id="userId" v-model="username"/>
        </div>
        <div>
            <label for="password">password: </label>
            <input type="password" id="password" v-model="password"/>
        </div>
        <div>
            <label for="birthYear">birthYear: </label>
            <input type="number" id="birthYear" v-model="birthYear"/>
        </div>
        <div>
            <label for="sex">sex: </label>
            <input type="text" id="sex" v-model="sex"/>
        </div>
        <div>
            <label for="country">country: </label>
            <input type="text" id="country" v-model="country"/>
        </div>
        <div>
            <label for="city">city: </label>
            <input type="text" id="city" v-model="city"/>
        </div>
        <button type="submit">Signup</button>
    </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
    data() {
        return {
            userId: '',
            password: '',
            birthYear: '',
            sex: '',
            country: '',
            city: '',
        };
    },
    methods: {
        async submitForm() {
            const userData = {
                userId: this.userId,
                password: this.password,
                birthYear: this.birthYear,
                sex: this.sex,
                country: this.country,
                city: this.city,
            };
            const { data } = await registerUser(userData);
            this.initForm();
        },
        initForm() {
            this.userId = '';
            this.password = '';
            this.birthYear = '';
            this.sex = '';
            this.country = '';
            this.city = '';
        }
    }
}
</script>

<style>

</style>