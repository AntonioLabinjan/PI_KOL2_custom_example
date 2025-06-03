<template>
  <div class="books-view">
    <h1>Knjižara</h1>
    <div class="book-list">
      <div v-for="(book, index) in books" :key="index" class="book-card">
        <img :src="book.image" alt="Book cover" class="book-image" />
        <h3>{{ book.title }}</h3>
        <p><strong>Autor:</strong> {{ book.author }}</p>
        <p><strong>Cijena:</strong> {{ book.price }} €</p>
        <button @click="addToCart(book)">Dodaj u košaricu</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from '@/stores/booksStore'

const store = useBooksStore()
const books = store.books
const addToCart = store.addToCart
</script>

<style scoped>
.books-view {
  padding: 20px;
}
.book-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.book-card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 200px;
  text-align: center;
}
.book-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
