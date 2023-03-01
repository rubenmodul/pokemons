<template>
    <div>
      <h2>Registro de usuario</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">Nombre de usuario:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Registrarse</button>
      </form>
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
  const response = await fetch('http://127.0.0.1:8000/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: this.username,
      password: this.password
    })
  });

  const responseData = await response.json();

    this.$router.push('/');

    alert(responseData.message);
  
}
    }
  };
  </script>