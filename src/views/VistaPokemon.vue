<template>
    <div class="card mx-auto mt-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ pokemon.nombre }}</h5>
        <p class="card-text"><strong>Tipo:</strong> {{ pokemon.tipo }}</p>
        <p class="card-text"><strong>Altura:</strong> {{ pokemon.altura }}</p>
        <p class="card-text"><strong>Peso:</strong> {{ pokemon.peso }}</p>
        <p class="card-text"><strong>Ataques:</strong> {{ pokemon.ataques }}</p>
        <button class="btn btn-primary" @click="$router.push('/pokemons')">Volver</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pokemon: {},
        ataques: [],
      };
    },
    methods: {
      async getDatos(id) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/pokemon/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${this.token}` // incluye el token en los encabezados de la solicitud

            },
          });
          this.pokemon = await response.json();
          this.ataques = this.pokemon.ataques;
          console.log(this.ataques);
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      },
    },
    mounted() {
      this.getDatos(this.$route.params.id);
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
      this.getDatos();
    }
  },
    computed: {
  ataquesArray() {
    return this.ataques.split(", ");
  }
}
  };
  </script>