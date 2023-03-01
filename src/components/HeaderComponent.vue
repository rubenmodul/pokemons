<template>
    <div>
        <br>
            <button @click="clearStorage">Salir</button>
            <nav>
                <router-link to="/pokemons">Pokemons</router-link>  |
                <router-link to="/agregar">Añadir</router-link>  |
                <router-link to="/tabla">Tabla</router-link>  |
                <router-link to="/panel">Panel</router-link>
            </nav>
    </div>
</template>

<script>
    export default {
        name: 'header-component',
        methods: {
            clearStorage() {
                localStorage.clear();
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>