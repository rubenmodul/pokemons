<template>
    <div class="container">
      <h1>Editar Pokémon</h1>
      <form @submit.prevent="guardarPokemon">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="pokemon.nombre">
        </div>
        <div class="form-group">
          <label for="tipo">Tipo:</label>
          <select id="tipo" v-model="pokemon.tipo" class="form-control" required>
            <option value="Normal">Normal</option>
            <option value="Fuego">Fuego</option>
            <option value="Agua">Agua</option>
            <option value="Hierba">Hierba</option>
            <option value="Eléctrico">Eléctrico</option>
            <option value="Lucha">Lucha</option>
          </select>
        </div>
        <div class="form-group">
          <label for="altura">Altura</label>
          <input type="number" class="form-control" id="altura" v-model="pokemon.altura">
        </div>
        <div class="form-group">
          <label for="peso">Peso</label>
          <input type="number" class="form-control" id="peso" v-model="pokemon.peso">
        </div>
        <div class="form-group">
          <label for="ataques">Ataques</label>
          <input type="text" class="form-control" id="ataques" v-model="pokemon.ataques">
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pokemon: {}
      }
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
  // this.guardarPokemon(token);
  }
  },
    mounted() {
      // Obtener el id del Pokémon a editar de la URL
      const id = this.$route.params.id;
      console.log(id);
      console.log(this.token)
      // Obtener el Pokémon de la API REST
      fetch(`http://127.0.0.1:8000/api/pokemon/${id}`, {
        method: 'GET',
          headers: {
            "Authorization": `Bearer ${this.token}` // incluye el token en los encabezados de la solicitud
          },
      })
        .then(response => response.json())
        .then(data => this.pokemon = data)
        .catch(error => console.log(error));
    },
    methods: {
      guardarPokemon() {
        // Enviar la solicitud PUT a la API REST
        const id = this.$route.params.id;
        fetch(`http://127.0.0.1:8000/api/pokemon/${id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${this.token}` // incluye el token en los encabezados de la solicitud
          },
          body: JSON.stringify(this.pokemon)
        })
        .then(response => {
          console.log('Pokemon actualizado');
          this.$router.push('/panel');
        })
        .catch(error => console.log(error));
      }
    }
  }
  </script>