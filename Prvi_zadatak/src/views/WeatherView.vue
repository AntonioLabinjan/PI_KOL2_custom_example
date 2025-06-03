<template>
  <div>
    <h1>Pregled vremena</h1>
    <ul>
      <li v-for="city in cities" :key="city.name">
        <router-link :to="`/weather/${city.name}`">
          {{ city.name }} – {{ city.current.temperature }}°C, {{ city.current.condition }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/stores/weatherStore'
const weatherStore = useWeatherStore()
const cities = weatherStore.getCities
</script>
