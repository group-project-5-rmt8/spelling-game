<template>
  <div class="home">
    <div class="card text-clue">
      Sanitizer
    </div>

    <div>
      <div class="row">
        <!-- <div class="col" v-for="aword in wordArray" :key="aword" v-text="aword" ></div> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      word: 'SANITIZER',
      wordArray: [],
      isValid: false
    }
  },
  methods: {
    getDataWord () {
      this.$socket.emit('getDataWord', ['t', 'e', 's', 't'])
    },
    onChangeWord (char) {
      this.wordArray.push(char)
      const wordCutted = this.word.slice(0, this.wordArray.length)
      if (wordCutted === this.wordArray) {
        this.isValid = true
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
