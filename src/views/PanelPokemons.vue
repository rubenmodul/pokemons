<template>
  <div>
    <header-component/>
    <h2>Pokemones</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Altura</th>
          <th>Peso</th>
          <th>Ataques</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pokemon, index) in pokemones" :key="pokemon.id">
          <td>{{ pokemon.nombre }}</td>
          <td>{{ pokemon.tipo }}</td>
          <td>{{ pokemon.altura }}</td>
          <td>{{ pokemon.peso }}</td>
          <td>{{ pokemon.ataques }}</td>
          <td>
            <router-link :to="{ name: 'editar', params: { id: pokemon.id } }">
              <button type="button" class="btn btn-primary">Editar</button>
            </router-link>
            <button
              type="button"
              class="btn btn-danger"
              @click="borrarPokemon(pokemon.id)"
            >
              Borrar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import headerComponent from '@/components/HeaderComponent.vue';

export default {
  data() {
    return {
      pokemones: [],
    };
  },
  mounted() {
    this.cargarPokemones();
  },
  components: {
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
      this.cargarPokemones(token);
    }
  },
  methods: {
    async cargarPokemones() {
      const response = await fetch("http://127.0.0.1:8000/api/pokemon", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}` // incluye el token en los encabezados de la solicitud
        },
      });
      this.pokemones = await response.json();
    },
    editarPokemon(pokemon) {
      // Lógica para editar el Pokemon
    },
    borrarPokemon(id) {
      fetch("http://127.0.0.1:8000/api/pokemon/" + id, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${this.token}` // incluye el token en los encabezados de la solicitud
        }
      })
        .then((response) => {
          console.log("Pokemon eliminado");
          this.cargarPokemones();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
