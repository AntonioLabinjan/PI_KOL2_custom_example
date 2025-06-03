<template>
  <div class="add-book">
    <h1>Dodaj novu knjigu</h1>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Naslov:</label>
        <input v-model="form.title" id="title" required />
      </div>

      <div class="form-group">
        <label for="author">Autor:</label>
        <input v-model="form.author" id="author" required />
      </div>

      <div class="form-group">
        <label for="price">Cijena (€):</label>
        <input v-model="form.price" id="price" type="number" step="0.01" required />
      </div>

      <div class="form-group">
        <label for="image">URL slike:</label>
        <input v-model="form.image" id="image" required />
      </div>

      <button type="submit">Dodaj knjigu</button>
    </form>

    <router-link to="/admin" class="back-link"> Nazad na admin stranicu</router-link>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useBooksStore } from '@/stores/booksStore'
import { useRouter } from 'vue-router'

const store = useBooksStore()
const router = useRouter()

const form = reactive({
  title: '',
  author: '',
  price: '',
  image: ''
})

const handleSubmit = () => {
  store.addBook({ ...form })
  router.push('/admin')
}
</script>

<style scoped>
.add-book {
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

input {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
}

.back-link {
  display: block;
  margin-top: 20px;
  color: #555;
  text-decoration: none;
}
</style>
