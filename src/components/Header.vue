<template>
  <nav class="nav-bar">
    <router-link to="/books" class="nav-link" :class="{ active: isActive('/books') }">Knjige</router-link>
    <router-link to="/admin" class="nav-link" :class="{ active: isActive('/admin') }">Admin</router-link>
    <router-link to="/cart" class="nav-link" :class="{ active: isActive('/cart') }">
      Košarica ({{ cart.length }})
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useBooksStore } from '@/stores/booksStore'

const route = useRoute()
const store = useBooksStore()
const cart = store.cart

const isActive = (path) => route.path.startsWith(path)
</script>

<style scoped>
.nav-bar {
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ddd;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-link.active {
  color: green;
  font-weight: bold;
}
</style>
