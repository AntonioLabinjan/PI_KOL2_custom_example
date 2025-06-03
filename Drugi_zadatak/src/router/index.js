import { createRouter, createWebHistory } from 'vue-router'

import BooksView from '@/views/BooksView.vue'
import CartView from '@/views/CartView.vue'
import AdminView from '@/views/AdminView.vue'
import AddBookView from '@/views/AddBookView.vue'

const routes = [
  { path: '/', redirect: '/books' },
  { path: '/books', component: BooksView },
  { path: '/cart', component: CartView },
  { path: '/admin', component: AdminView },
  { path: '/admin/add', component: AddBookView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
