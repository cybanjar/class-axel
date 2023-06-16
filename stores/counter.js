import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', () => {
  const counter = ref(0)

  function increment () {
    counter.value++
  }

  return { counter, increment }


})