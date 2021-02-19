import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listWord: []
  },
  mutations: {
    CHANGE_LIST_WORD (state, data) {
      state.listWord = data
    }
  },
  actions: {
    socket_receiveOnChangeWord (ctx, data) {
      ctx.commit('CHANGE_LIST_WORD', data)
    }
  },
  modules: {
  }
})
