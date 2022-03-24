<template>

  
  <NavBar></NavBar>
  <LandingPage></LandingPage>
  <Categories></Categories>
  <Footer></Footer>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingPage from './components/LandingPage.vue'
import Categories from './components/Categories.vue'
import Footer from './components/Footer.vue'

export default{
  name: 'app',
  components:{
    NavBar,
    LandingPage,
    Categories,
    Footer
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
