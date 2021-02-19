<template>
  <div class="container">
    <div class="row">
      <div class="col card">
        <form action="">
          <label class="form-control mb-3">Username</label>
          <input type="text" v-model="name" class="form-control mb-3">
          <button class="btn btn-primary form-control mb-3" >Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>
