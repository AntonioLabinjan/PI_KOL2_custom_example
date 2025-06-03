<template>
  <div v-if="history.length">
    <h2>Povijest za {{ cityName }}</h2>
    <ul>
      <li v-for="record in history" :key="record.date">
        {{ record.date }} – {{ record.temperature }}°C
      </li>
    </ul>
    <router-link :to="`/weather/${cityName}`">← Nazad</router-link>
  </div>
  <div v-else>
    <p>Nema povijesnih podataka za ovaj grad.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useWeatherStore } from '@/stores/weatherStore'

const route = useRoute()
const weatherStore = useWeatherStore()

const cityName = route.params.city
const history = weatherStore.getCityHistory(cityName)
</script>
