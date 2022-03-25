<template>
<div class="layout">
    <div class="mitad">
    <form id="form-pe">
      <p>Escoge uno </p>
  <input type="text" value="Sabor" />
  <br/>
  <label for="sabor">Sabor de pastel</label>

        <p>Escoge uno </p>
  <input type="text" value="Adorno" />
  <br/>
  <label for="sabor">Adorno del pastel</label>

   
  </form>
  
</div>
<div class="mitad">
    <h2 class="title">Sabores</h2>
    <ul>
        <li>
            Mango
        </li>
        <li>
            Fresa
        </li>
        <li>
            Chocolate
        </li>
    </ul>
    <h2>Adornos</h2>
    <ul>
        <li>
          Betún
        </li>
        <li>
            Glaseado
        </li>
    </ul>
</div>
</div>

</template>



<script>
export default {};
</script>

<style>
.mitad{
    width: 50%;
}

.layout{
display: flex;

}

ul li{
    list-style: none;
    text-align: initial;

}

</style>