<template>
  <div class="home">
    <div class="card text-clue">
      Sanitizer
    </div>

    <div>
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

export default {
  name: 'Home',
  data () {
    return {
      word: 'SANITIZER',
      charContainer: [],
      isValid: false
    }
  },
  methods: {
    onChangeWord (event) {
      if (event.key !== 'Enter') {
        this.charContainer.push(this.inputChar)
        this.$socket.emit('onChangeWord', this.charContainer)
      }
    }
  }
  // computed: {
  //   wordArray: this.word.split('')
  // },
  // created () {
  //   console.log(this.wordArray)
  // }
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
</style>
