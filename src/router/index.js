import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EntrarView from '../views/EntrarView.vue'
import CadastrarView from '../views/CadastrarView.vue'
import NoticiaView from '../views/NoticiaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: EntrarView
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: CadastrarView
  },
  {
    path: '/noticia',
    name: 'noticia',
    component: NoticiaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router