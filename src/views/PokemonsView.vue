<template>
  <div>
    <header-component/>
    <button class="btn btn-fuego" @click="filtrar('Fuego')">Fuego</button>
    <button class="btn btn-hierba" @click="filtrar('Hierba')">Hierba</button>
    <button class="btn btn-normal" @click="filtrar('Normal')">Normal</button>
    <button class="btn btn-agua" @click="filtrar('Agua')">Agua</button>
    <button class="btn btn-electrico" @click="filtrar('Electrico')">Electrico</button>
    <button class="btn btn-lucha" @click="filtrar('Lucha')">Lucha</button>
    <button class="btn btn-primary" @click="filtrar('Todos')">Mostrar Todos</button>
    <div class="grid-container">
      <div v-for="pokemon in pokemons_mostrados" v-bind:key="pokemon.id" class="card grid-item">
        <cartacomponent :pokemon="pokemon"/>
      </div>
    </div>
  </div>
</template>

<script>

import cartacomponent from '@/components/CartaComponent.vue';
import headerComponent from '@/components/HeaderComponent.vue';

export default {
  data() {
    return {
      pokemons: [],
      pokemons_mostrados: []
    };
  },
  components: {
    cartacomponent,
    headerComponent
  },
  created() {
    // verifica si existe un token en el almacenamiento local
    const token = localStorage.getItem('token');
    this.token = token;
    if (!token) {
      // si no existe un token, redirige al usuario al componente de inicio de sesión
      this.$router.push('/');
    } else {
      // si existe un token, realiza la solicitud fetch para obtener los datos
      this.getDatos(token);
    }
  },
  methods: {
    async getDatos() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/pokemon", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.token}` // incluye el token en los encabezados de la solicitud
          },
        });
        this.pokemons = await response.json();
        this.pokemons_mostrados = [...this.pokemons];
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },

    filtrar(tipo){
      if(tipo === "Todos"){
        this.pokemons_mostrados = [...this.pokemons];
        return;
      }

      this.pokemons_mostrados = this.pokemons.filter(pokemon => {
        return pokemon.tipo === tipo;
      })
    }
  }
};
</script>

<style scoped>

.grid-container{
  display: grid;
  grid-template-columns: repeat(3, auto);
}

.grid-item{
  margin: 10px;
}

.btn-fuego {
  background-color: red;
  color: white;
}

.btn-hierba {
  background-color: greenyellow;
}
.btn-lucha {
  background-color: gray;
  color: white;
}
.btn-agua {
  background-color: cyan;
}
.btn-electrico {
  background-color: yellow;
}

.btn-normal{
  border: 1px solid black;
}
.btn {
  margin: 10px;
}
</style>