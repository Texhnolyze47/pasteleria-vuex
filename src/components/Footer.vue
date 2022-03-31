<template>
  <div class="container">
    <footer>
      <div class="title marca">
        <h2 class="title-pink">Pasteleria</h2>
        <h2 class="title-blue">Fabricio</h2>
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
    </footer>
  </div>
  <div>
    <p>Hecho por Ivan Ramírez</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  height: 150px;
}

.text {
  padding-right: 155px;
  padding-left: 155px;
  color: black;
}
.title {
  padding-right: 155px;
  padding-left: 155px;
}

.marca {
  display: flex;
  flex-direction: row;
}
footer {
  display: flex;
  flex-direction: row;
}

.title-pink {
  color: #ff759f;
  padding-right: 10px;
}
.title-blue {
  color: #5bc0eb;
}
</style>
