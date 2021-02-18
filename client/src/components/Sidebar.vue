<template>
  <div class="bg-dark sidenav-container">

    <div class="row">
      <div class="col-6">
        <div class=" bg-info">
          <div class="card-body" style="width: max-content;font-weight: bold">
            Team 1
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card bg-info">
          <div class="card-body" style="width: max-content;">
            Point 2
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        v-for="itemT1 in team1"
        :key="itemT1"
        style="margin-top: 10px"
        v-text="itemT1"
        class="card"
      ></div>
    </div>

    <div class="row" style="margin-top: 20px;color: #fff">
      <div class="col-6">
        <div class="card bg-danger">
          <div class="card-body" style="width: max-content;font-weight: bold">
            Team 2
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card bg-danger">
          <div class="card-body" style="width: max-content;">
            Point 2
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        v-for="itemT2 in team2"
        :key="itemT2"
        style="margin-top: 10px"
        v-text="itemT2"
        class="card"
      ></div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      team1: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'],
      team2: [
        'Player7',
        'Player8',
        'Player9',
        'Player10',
        'Player11',
        'Player12'
      ]
    }
  }
}
</script>

<style>
.sidenav-container {
  padding: 30px;
  width: 350px
}
</style>
