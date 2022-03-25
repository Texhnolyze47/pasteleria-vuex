<template>
  <div class="inventario">
      <h2>Inventario</h2>
      <table>
          <tr>
              <td>Mango</td>
              <td>1kg</td>
          </tr>
          <tr>
              <td>Leche</td>
              <td>10L</td>
          </tr>
          <tr>
              <td>Harina</td>
              <td>5KG</td>
          </tr>
          <tr>
              <td>Nuez</td>
              <td>1kg</td>
          </tr>
      </table>
  </div>
  <div class="pedido">
      <h2>Pastel</h2>
      <p>Sabor</p>
      <p>Adornos</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.inventario{
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 100%;
}
.pedido{
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 25%;
   
}

</style>