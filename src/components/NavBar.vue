<template>
  <nav>
    <div class="search">
      <form action="#">
        <input type="text" placeholder=" Busca un pastel" name="search" />
        <button>
          <box-icon name="search"></box-icon>
        </button>
      </form>
    </div>
    <div class="container-title">
      <h1 class="title-pink">Pastelería</h1>
      <h1 class="title-blue">Fabricio</h1>
    </div>
    <div>
      <box-icon class="icon" name="cart" color="#ff759f"></box-icon>
      <box-icon  name="user-circle" color="#ff759f"></box-icon>
    </div>
    <div class="container">
      <ul>
        <li>Home</li>
        <li>Pasteles</li>
        <li>Personaliza tu pastel</li>
        <li>Acerca de</li>
        <li>Contáctenos</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
     padding-bottom: 10px;
    background-color: #fff9fa;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* styling search bar */
.search input[type="text"] {
  position: absolute;
  flex-basis: 40%;
  width: 300px;
  height: 25px;
  border-radius: 25px;
  border: solid 1px #ff759f;
}
form{
  padding-right: 350px;
}

.search {
  float: left;
}

.search button {
  position: relative;
  background-color: rgb(255, 255, 255, 0.1);
  color: #f2f2f2;
  margin-left: 270px;
  margin-top: 1px;
  margin-right: 16px;
  font-size: 12px;
  border: none;
  cursor: pointer;
}
.container-title {
  display: flex;
  padding-right: 450px;
  
}
.title-pink {
  color: #ff759f;
  padding-right: 10px;
}
.title-blue {
  color: #5bc0eb;
}

.icon{
  margin-right: 15px;
}

.container{
  padding-left: 500px;
}
.container ul li{
  display: inline-flex;
  list-style: none;
  padding-right: 20px;
}
</style>