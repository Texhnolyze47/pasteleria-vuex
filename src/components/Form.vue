<template>
  <div class="layout">
    <div class="mitad">
      <form id="form-pe">
        <h2>Informacion Personal</h2>
        <br />
        <label class="margin-right10" for="sabor">Numero de teléfono</label>
        <input type="text" />
        <br />
        <br />

        <label class="margin-right10" for="sabor">Nombre</label>
        <input type="text" />
        <br />
        <br />
        <label class="margin-right10" for="sabor">Correo Electrónico</label>
        <input type="text" />
        <h2>Información del pastel</h2>

        <p>Escoge uno</p>
        <input type="text" />
        <br />
        <label class="margin-right10" for="sabor">Sabor de pastel</label>

        <p>Escoge uno</p>
        <input type="text" />
        <br />
        <label for="sabor">Adorno del pastel</label>
        <div>
          <button class="margin-top10">Enviar pedido</button>
        </div>
      </form>
    </div>
    <div class="mitad">
      <h2 class="title">Sabores</h2>
      <ul>
        <li>Mango</li>
        <li>Fresa</li>
        <li>Chocolate</li>
      </ul>
      <h2>Adornos</h2>
      <ul>
        <li>Betún</li>
        <li>Glaseado</li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style>
.mitad {
  width: 50%;
}

.layout {
  display: flex;
}

.margin-top10 {
  margin-top: 10px;
}
.margin-right10 {
  margin-right: 10px;
}

ul li {
  list-style: none;
  text-align: initial;
}
</style>