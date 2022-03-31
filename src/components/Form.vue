<template>
  <div class="layout">
    <div class="mitad">
      <form id="form-pe" @submit.prevent="formP">
        <h2>Informacion Personal</h2>
     

        <label class="margin-right10" >Nombre</label>
        <input type="text" v-model="nombre"  />
        <br />
        <br />
        <label class="margin-right10" >Numero de teléfono</label>
        <input type="text" v-model="numero"  />
        <br />
        <br />
        <label class="margin-right10" >Correo Electrónico</label>
        <input type="text" v-model="correo"  />
        <h2>Información del pastel</h2>

        <p>Escoge uno</p>
        <input type="text" v-model="sabores"  />
        <br />
        <label class="margin-right10"  >Sabor de pastel</label>

        <p>Escoge uno</p>
        <input type="text"  v-model="adornos"  />
        <br />
        <label >Adorno del pastel</label>
        <div>
          <button v-on="addPedido" class="margin-top10">Enviar pedido</button>
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

export default {
  data(){
    return{
      nombre: '',
      numero: '',
      correo: '',
      sabores: '',
      adornos: '',
      pedidos: []

    }
  },
  methods:{
    formP(){
      let pedido = {
        nombre: this.nombre,
        numero: this.numero,
        correo: this.correo,
        sabores: this.sabores,
        adornos: this.adornos
      }
      //console.log(pedido)
      if (localStorage.pedidos){
        let lsPedidos = localStorage.pedidos;
        this.users = JSON.parse(lsPedidos);
      }
      this.pedidos.push(pedido)
      localStorage.setItem("pedidos", JSON.stringify(this.pedidos))
      this.nombre = ''
      this.numero = ''
      this.correo = ''
      this.sabores = ''
      this.adornos = ''

    }
  }
};
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