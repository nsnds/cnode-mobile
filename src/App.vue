<template>
  <div id="app">
    <m-header></m-header>
    <m-Menu></m-Menu>
    <router-view/>
    <m-shade></m-shade>
  </div>
</template>

<script>
import mHeader from 'base/m-Header'
import mMenu from 'base/m-menu'
import mShade from 'base/m-shade'

export default {
  name: 'App',
  components: {
    mMenu,
    mHeader,
    mShade
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 45px 0 0 0;
}
</style>
