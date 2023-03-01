<template>
    <div id="tabla">
      <headerComponent/>
    <table>
      <thead>
        <tr>
          <th>Tipo de Pokémon</th>
          <th>Ventajas</th>
          <th>Desventajas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tipo in tipos" :key="tipo.nombre">
          <td>{{ tipo.nombre }}</td>
          <td>{{ tipo.ventajas }}</td>
          <td>{{ tipo.desventajas }}</td>
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
      tipos: [
      { nombre: 'Normal', ventajas: 'No tiene debilidades elementales. Resistente a Fantasma.', desventajas: 'No es muy efectivo contra tipos de Pokémon resistentes como Acero y Roca. Vulnerable a Lucha.' },
      { nombre: 'Fuego', ventajas: 'Efectivo contra tipos de Pokémon de Hierba, Hielo, Insecto y Acero. Resistente al tipo de Pokémon de Fuego, Hierba, Hielo, Bicho y Acero.', desventajas: 'Débil contra tipos de Pokémon de Agua, Tierra y Roca. Vulnerable a Pokémon de Agua.' },
      { nombre: 'Agua', ventajas: 'Efectivo contra tipos de Pokémon de Fuego, Tierra y Roca. Resistente a Pokémon de Fuego, Agua, Hielo y Acero.', desventajas: 'Débil contra tipos de Pokémon de Planta y Eléctrico. Vulnerable a Pokémon de Planta.' },
      { nombre: 'Hierba', ventajas: 'Efectivo contra tipos de Pokémon de Agua, Tierra y Roca. Resistente a tipos de Pokémon de Agua, Eléctrico y Planta.', desventajas: 'Débil contra tipos de Pokémon de Fuego, Hielo, Veneno, Volador, Bicho y Dragón. Vulnerable a tipos de Pokémon de Fuego, Hielo, Veneno, Volador, Bicho y Dragón.' },
      { nombre: 'Eléctrico', ventajas: 'Efectivo contra tipos de Pokémon de Agua y Volador. Resistente a tipos de Pokémon de Eléctrico y Acero.', desventajas: 'Débil contra tipos de Pokémon de Tierra. Vulnerable a tipos de Pokémon de Tierra.' },
      { nombre: 'Lucha', ventajas: 'Efectivo contra tipos de Pokémon de Normal, Hielo, Roca, Acero, Siniestro.', desventajas: 'Débil contra tipos de Pokémon de Volador, Psíquico y Hada. Vulnerable a tipos de Pokémon de Volador, Psíquico y Hada.' }
      ]
    };
  },
  components: {
    headerComponent
  }, 
  created() {
    const token = localStorage.getItem('token');
    if(!token) {
      this.$router.push('/');
    }
  }
};
  

</script>

  