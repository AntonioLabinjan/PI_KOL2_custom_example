<template>
  <div class="admin-view">
    <h1>Admin – Upravljanje knjigama</h1>

    <router-link to="/admin/add" class="add-link"> Dodaj novu knjigu</router-link>

    <div v-if="books.length > 0" class="admin-list">
      <div v-for="(book, index) in books" :key="index" class="book-card">
        <img :src="book.image" alt="Book cover" class="book-img" />
        <h3>{{ book.title }}</h3>
        <p>{{ book.author }}</p>
        <p>{{ book.price }} €</p>
        <button @click="removeBook(index)">Obriši</button>
      </div>
    </div>

    <div v-else>
      <p>Nema knjiga u ponudi.</p>
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from '@/stores/booksStore'

const store = useBooksStore()
const books = store.books
const removeBook = store.removeBook
</script>

<style scoped>
.admin-view {
  padding: 20px;
}

.add-link {
  display: inline-block;
  margin-bottom: 20px;
  color: green;
  text-decoration: none;
}

.book-card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 16px;
  width: 220px;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-right: 20px;
}

.book-img {
  width: 100%;
  height: auto;
}
</style>
