<template>
    <div>
        <h2>{{ pokemon.nombre }}</h2>
        <p><strong>Tipo:</strong> {{ pokemon.tipo }}</p>
        <p><strong>Altura:</strong> {{ pokemon.altura }}</p>
        <p><strong>Peso:</strong> {{ pokemon.peso }}</p>
        <ul>
          <li v-for="(ataque, index) in ataques" v-bind:key="index">
            {{ pokemon.ataque }}
          </li>
        <router-link :to="{ name: 'vista', params: { id: pokemon.id }}">
        <button type="button" class="btn btn-primary">Ver detalles</button>
        </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name : "carta-pokemon",
        props: {
            pokemon: Object
        }
    }
</script>

<style scoped>


</style>