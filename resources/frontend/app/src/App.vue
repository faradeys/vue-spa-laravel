<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
  @import './assets/sass/reset'
  @import './assets/sass/variables'

  html,body
    height: 100%
    width: 100%

  .app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    width: 100%
    height: 100%

    @import './assets/sass/our'


</style>
