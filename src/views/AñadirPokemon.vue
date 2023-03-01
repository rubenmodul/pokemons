<template>
    <div class="container">
      <headerComponent/>
      <h1>Nuevo Pokémon</h1>
      <form @submit.prevent="addPokemon">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nuevoPokemon.nombre" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="tipo">Tipo:</label>
          <select id="tipo" v-model="nuevoPokemon.tipo" class="form-control" required>
            <option value="Normal">Normal</option>
            <option value="Fuego">Fuego</option>
            <option value="Agua">Agua</option>
            <option value="Hierba">Hierba</option>
            <option value="Eléctrico">Eléctrico</option>
            <option value="Lucha">Lucha</option>
          </select>
        </div>
        <div class="form-group">
          <label for="altura">Altura (cm):</label>
          <input type="number" id="altura" v-model.number="nuevoPokemon.altura" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="peso">Peso (kg):</label>
          <input type="number" id="peso" v-model.number="nuevoPokemon.peso" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="ataques">Ataques:</label>
          <textarea id="ataques" v-model="nuevoPokemon.ataques" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Agregar Pokémon</button>
      </form>
    </div>
  </template>
  
  <script>
  import headerComponent from '@/components/HeaderComponent.vue';


  export default {
    data() {
      return {
        pokemons: [],
        nuevoPokemon: {
          nombre: "",
          tipo: "",
          altura: "",
          peso: "",
          ataques: "",
        },
      };
    },
    components: {
      headerComponent
    },
    methods: {
      async getDatos() {
        // ...
      },
      async addPokemon() {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/pokemon", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${this.token}` // incluye el token en los encabezados de la solicitud
            },
            body: JSON.stringify(this.nuevoPokemon),
          });
          const pokemonCreado = await response.json();
          this.pokemons.push(pokemonCreado);
          this.nuevoPokemon = {
            nombre: "",
            tipo: "",
            altura: "",
            peso: "",
            ataques: "",
          };
          this.$router.push('/pokemons');
        } catch (error) {
          console.error("Error al añadir el Pokémon:", error);
        }
      },
    },
    created() {
    // verifica si existe un token en el almacenamiento local
    const token = localStorage.getItem('token');
    this.token = token;
    if (!token) {
      // si no existe un token, redirige al usuario al componente de pokemons
      this.$router.push('/');
    } else {
      // si existe un token, realiza la solicitud fetch para obtener los datos
      this.getDatos(token);
    }
  },
    mounted() {
      this.getDatos();
    },
  };
  </script>