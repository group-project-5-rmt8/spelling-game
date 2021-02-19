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
          v-text="charContainer[n]"
        ></div>
      </div>
    </div>

    <div class=" d-flex justify-content-center" style="margin-top: 10%">
      <form @submit.prevent="onChangeWord"></form>
      <input type="text" v-model="inputChar" maxlength="1" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  sockets: {
    connect () {
      console.log('-------------Connected')
    }
  },
  data () {
    return {
      word: 'development',
      inputChar: '',
      charContainer: []
    }
  },
  methods: {
    onChangeWord (event) {
      if (event.key !== 'Enter') {
        this.charContainer.push(this.inputChar)
        this.$socket.emit('test', event.key)
      }
      this.inputChar = ''
    }
  },
  computed: {
    wordArray: function () {
      return this.word.split('')
    }
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
