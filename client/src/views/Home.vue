<template>
  <div class="home">
    <div class="card text-clue">
      {{ word }}
    </div>

    <div class="container" style="margin-top: 5%">
      <div class="row">
        <div
          class="col card"
          v-for="n in word.length"
          :key="n"
          id="alphabetCard"
          v-text="charContainerComputed[n - 1]"
        ></div>
      </div>
    </div>

    <div class=" d-flex justify-content-center" style="margin-top: 10%">
      <form @submit.prevent="onChangeWord">
        <input type="text" v-model="inputChar" maxlength="1" />
        <button type="submit" >Enter</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'

export default {
  name: 'Home',
  sockets: {
    connect () {
      console.log('-------------Connected')
    }
  },
  data () {
    return {
      // word: 'development',
      inputChar: '',
      charContainer: [],
      words: []
    }
  },
  methods: {
    onChangeWord (event) {
      if (this.inputChar !== '') {
        this.inputChar = this.inputChar.toLowerCase()
        // this.charContainer.push(this.inputChar)
        this.$socket.emit('onChangeWord', this.inputChar)
      }
      this.inputChar = ''

    },
    getWords () {
      axios
        .get('http://localhost:3000/', {})
        .then(({ data }) => {
          console.log(data)
          this.words = data
        })
        .catch(err => {
          console.log(err)
        })

    updated () {
      console.log(this.$store.state.listWord, '<<<<< dataaaa')
      this.charContainer = this.$store.state.listWord
    },
    created () {
      this.charContainer = this.$store.state.listWord
    }
  },
  computed: {
    word: function () {
      const randomizer = Math.floor(Math.random() * 26)
      return this.words[randomizer]
    },
    wordArray: function () {
      return this.word.split('')
    },
    charContainerComputed: function () {
      return this.$store.state.listWord
    }
  },
  created () {
    this.getWords()
  }
}
</script>

<style>
.home {
  margin: 30px;
  width: 100%;
}
.text-clue {
  padding: 20px;
  font-size: 50px;
}
#alphabetCard {
  padding: 20px;
}
</style>
