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
    <table>
      <tr>
        <th>id</th>
        <th>Nombre</th>
        <th>Numero</th>
        <th>Correo</th>
        <th>Sabores</th>
        <th>Adornos</th>
      </tr>

      <tr v-for="(item, index) in pedidos" :key="item.nombre">
        <td>{{ index + 1 }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.numero }}</td>
        <td>{{ item.correo }}</td>
        <td>{{ item.sabores }}</td>
        <td>{{ item.adornos }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pedidos: [],
      pedido: "",
    };
  },
  mounted() {
    this.pedidos = JSON.parse(localStorage.getItem("pedidos"));
  },
};
</script>

<style>
.inventario {
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100%;
}
.pedido {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
