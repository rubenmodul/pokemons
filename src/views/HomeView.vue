<template>
  <div class="login-container">
    <div class="card bg-light">
      <img src="../assets/logo.png" alt="logo" class="card-img-top">
      <div class="card-body">
        <form class="login-form" @submit.prevent="submitForm">
          <h1 class="card-title text-center mb-4">¡Bienvenido!</h1>
          <div class="form-group">
            <label for="username">Nombre de entrenador:</label>
            <input type="text" id="username" v-model="username" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña :</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-pokemon">A por ellos</button>
          <div class="text-center mt-3">
            ¿Eres nuevo en el Pokemon? <router-link to="/register">¡Regístrate aquí!</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async submitForm() {
      // realiza la llamada a la API para registrar la cuenta
      const response = await fetch('http://127.0.0.1:8000/api/login_check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, password: this.password })
      });
      const data = await response.json();

      // si la respuesta de la API incluye un token, lo guardamos en el localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.$router.push('/pokemons');
        console.log(data.token);
      }
    }
  }
};
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 0 auto;
  border: none;
}

.card-img-top {
  margin: 0 auto;
  max-width: 200px;
}

.btn-pokemon {
  background-color: #EF5350;
  border-color: #EF5350;
  font-size: 20px;
}

.btn-pokemon:hover {
  background-color: #FF8A65;
  border-color: #FF8A65;
}
</style>
