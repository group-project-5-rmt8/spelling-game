import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    getDataWord(state, dataArray) {
      this.data = dataArray
    }
  },
  actions: {
    socket_receiveGetDataWord (data) {
      console.log(data, '<<<<< data dari socket')
    }
  },
  modules: {
  }
})
