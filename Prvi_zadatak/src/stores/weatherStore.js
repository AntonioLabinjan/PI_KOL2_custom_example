import { defineStore } from 'pinia'
import weatherData from '@/data/weatherData.js'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    cities: weatherData
  }),

  getters: {
    getCities: (state) => {
      return state.cities
    },

    getCityWeather: (state) => {
      return (cityName) => {
        return state.cities.find(city => city.name.toLowerCase() === cityName.toLowerCase())
      }
    },

    getCityHistory: (state) => {
      return (cityName) => {
        const city = state.cities.find(city => city.name.toLowerCase() === cityName.toLowerCase())
        return city?.history || []
      }
    }
  }
})
