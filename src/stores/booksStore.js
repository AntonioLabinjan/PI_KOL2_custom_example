import { defineStore } from 'pinia'
import booksData from '@/data/bookData.js'

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: [...booksData],
    cart: []
  }),

  getters: {
    cartTotal(state) {
      return state.cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2)
    }
  },

  actions: {
    addToCart(book) {
      this.cart.push(book)
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    addBook(book) {
      this.books.push(book)
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  }
})
