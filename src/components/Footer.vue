<template>
  <div class="container">
    <footer>
        <div>
            <h2 class="title">Pasteleria Fabricio</h2>
            </div>
      <div class="text">
        <p>Dirección: Av. las Torres</p>
        <p>Teléfono: 2222222222</p>
        <p>Horario: 10am - 5:00pm</p>
      </div>
      <div class="text">
        <p>Acerca de nosotros</p>
        <p>Aviso Legal</p>
        <p>Política de de cancelación</p>
      </div>
      <div>
          <p>Hecho por Ivan Ramírez</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  height: 250px;
}

.text{
   padding-right: 140px;
    padding-left: 140px;
    color: black;
}
.title{
      padding-right: 200px;
      padding-left: 140px;

}

footer {
  display: flex;
  flex-direction: row;
}
</style>