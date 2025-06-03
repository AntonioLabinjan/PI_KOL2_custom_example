import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '@/views/WeatherView.vue'
import CityView from '@/views/CityView.vue'
import HistoryView from '@/views/HistoryView.vue'

const routes = [
  { path: '/', redirect: '/weather' },
  { path: '/weather', component: WeatherView },
  { path: '/weather/:city', component: CityView },
  { path: '/weather/:city/history', component: HistoryView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
