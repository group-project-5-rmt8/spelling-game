<template>
  <div class="home">
    <div class="card text-clue">
      Sanitizer
    </div>

    <div>
      <div class="row">
        <!-- <div class="col" v-for="aword in wordArray" :key="aword" v-text="aword" ></div> -->
      </div>
      <button @click="getDataWord" >test</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      word: 'SANITIZER'
    }
  },
  methods: {
    getDataWord () {
      this.$socket.emit('getDataWord', ['t', 'e', 's', 't'])
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
