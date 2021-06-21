import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    userId: '',
    userName: '',
    userEmail: '',
    userSex: '',
    userCountry: '',
    userCity: '',
    userBirthYear: '',
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
})