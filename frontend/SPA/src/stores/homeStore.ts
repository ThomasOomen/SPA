import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios';

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    name: '',
    greeting: '',
  }),

  getters: {
  },
  actions: {
    addItem(name: string) {
      this.name = name
    },

    async getGreeting() {
        await axios.get('http://localhost:5000/greeting').then(response => {
            this.greeting = response.data
        }).catch(error => {
            console.log(error)
        })
    },

    async getUsername() {
      await axios.get('http://localhost:5000/get/username').then(response => {
        this.name = response.data
        console.log('get username')
        console.log(this.name)
      }).catch(error => {
        console.log(error)
      })
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot))
}
