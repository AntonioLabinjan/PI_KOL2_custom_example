<template>
  <div class="cart-view">
    <h1>Košarica</h1>

    <div v-if="cart.length > 0">
      <ul>
        <li v-for="(item, index) in cart" :key="index" class="cart-item">
          <img :src="item.image" alt="Cover" class="cart-img" />
          <div>
            <p><strong>{{ item.title }}</strong> – {{ item.price }} €</p>
            <p>Autor: {{ item.author }}</p>
            <button @click="removeFromCart(index)">Ukloni</button>
          </div>
        </li>
      </ul>

      <h3>Ukupno: {{ cartTotal }} €</h3>
    </div>
    <div v-else>
      <p>Košarica je prazna.</p>
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from '@/stores/booksStore'

const store = useBooksStore()
const cart = store.cart
const cartTotal = store.cartTotal
const removeFromCart = store.removeFromCart
</script>

<style scoped>
.cart-view {
  padding: 20px;
}

.cart-item {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 20px;
}

.cart-img {
  width: 80px;
  height: auto;
  border: 1px solid #ccc;
}
</style>
