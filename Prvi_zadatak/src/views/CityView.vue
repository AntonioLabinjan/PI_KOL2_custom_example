<template>
  <div v-if="city">
    <h2>{{ city.name }}</h2>
    <p>Trenutna temperatura: {{ city.current.temperature }}°C</p>
    <p>Stanje: {{ city.current.condition }}</p>

    <router-link :to="`/weather/${city.name}/history`">Pogledaj povijest</router-link>
  </div>
  <div v-else>
    <p>Grad nije pronađen.</p>
  </div>
  <div>
    <router-link to="/">Vrati se na početak</router-link> <!-- bez dvotočke -> statička ruta; ako je dvotočka imamo dinamičku rutu za dohvat po nazivu/id-ju/nečemu-->

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useWeatherStore } from '@/stores/weatherStore'

const route = useRoute()
const weatherStore = useWeatherStore()

const city = weatherStore.getCityWeather(route.params.city)
</script>
