<template>
  <div class="layout">
    <div class="mitad">
      <form id="form-pe" @submit.prevent="formP">
        <h2>Informacion Personal</h2>

        <label class="margin-right10">Nombre</label>
        <input type="text" v-model="nombre" />
        <br />
        <br />
        <label class="margin-right10">Numero de teléfono</label>
        <input type="number" v-model="numero" />
        <br />
        <br />
        <label class="margin-right10">Correo Electrónico</label>
        <input type="email" v-model="correo" />
        <h2>Información del pastel</h2>

        <div class="layout-column">
           <p>Escoge uno</p>
        <input type="text" v-model="sabores" />
                <label class="margin-right10 margin-top10">Sabor de pastel</label>

        </div>
       
            
  <div class="layout-column">
     <p>Escoge uno</p>
        <input type="text" v-model="adornos" />


        <label class="margin-right10 margin-top10" >Adorno del pastel </label>
  </div>

       
        
          <button  v-on="addPedido" class="margin-top10 boton">Enviar pedido</button>
       
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
  data() {
    return {
      nombre: "",
      numero: "",
      correo: "",
      sabores: "",
      adornos: "",
      pedidos: [],
    };
  },
  methods: {
    formP() {
      let pedido = {
        nombre: this.nombre,
        numero: this.numero,
        correo: this.correo,
        sabores: this.sabores,
        adornos: this.adornos,
      };
      //console.log(pedido)
      if (localStorage.pedidos) {
        let lsPedidos = localStorage.pedidos;
        this.users = JSON.parse(lsPedidos);
      }
      this.pedidos.push(pedido);
      localStorage.setItem("pedidos", JSON.stringify(this.pedidos));
      this.nombre = "";
      this.numero = "";
      this.correo = "";
      this.sabores = "";
      this.adornos = "";
    },
  },
};
</script>

<style scoped>
.mitad {
  width: 50%;
}

.layout {
  display: flex;
}

.layout-column {
     display: flex;
    align-content: stretch;
    align-items: center;
    flex-direction: column;
}


.margin-top10 {
  margin-top: 10px;
}
.margin-right10 {
  margin-right: 10px;
}

ul li {
  list-style: none;
  padding-right: 40px;
  padding-top: 10px ;
  text-align: center;
}
.boton{
  background-color:  #5bc0eb;
  margin-top: 20px;
  margin-bottom:20px ;
  border-color: #5bc0eb;
  color: white;
}

.boton:hover{
   background-color:  #ff759f;
  border-color: #ff759f;
  color: white;
}
</style>
