<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
     <vfooter v-show="$route.meta.isShow"></vfooter> 
  </div>
</template>

<script>
import vfooter from './components/vfooter'
export default {
  name: 'App',
 components: {
    vfooter
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
  margin-top: 60px;
}
</style>
