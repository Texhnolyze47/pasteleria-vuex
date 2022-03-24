<template>
  <NavBar></NavBar>
  <LandingPage></LandingPage>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingPage from './components/LandingPage.vue'
export default{
  name: 'app',
  components:{
    NavBar,
    LandingPage
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
