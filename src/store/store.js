import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    userId: '',
    userName: '',
    userEmail: '',
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
})