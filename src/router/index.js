import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonsView from '../views/PokemonsView.vue'
import VistaPokemon from '../views/VistaPokemon.vue'
import AgregarPokemon from '../views/AñadirPokemon.vue'
import TablaView from '../views/TablaView.vue'
import PanelPokemons from '../views/PanelPokemons.vue'
import EditarPokemon from '../views/EditarPokemon.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemons',
    name: 'pokemons',
    component: PokemonsView
  },
  {
    path: '/vista/:id',
    name: 'vista',
    component: VistaPokemon
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: AgregarPokemon
  },
  {
    path: '/tabla',
    name: 'tabla',
    component: TablaView
  },
  {
    path: '/panel',
    name: 'panel',
    component: PanelPokemons
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: EditarPokemon
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
