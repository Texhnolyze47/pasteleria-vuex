<template>
  <div>
    <NavBar/>
     <landing-page/>
     <categories/>
     <Footer/>
  </div>
</template>

<script>
import LandingPage from '../components/LandingPage.vue'
import Categories from '../components/Categories.vue'
import Footer from '../components/Footer.vue'


export default{
  name: 'app',
  components:{
    LandingPage,
    Categories,
    Footer
  }
}

</script>

<style>

</style>