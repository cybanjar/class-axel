import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  function add (value) {
    todos.value.push(value)
  }

  function deleted (id) {
    todos.value.splice(id, 1)
  }

  function edit (id, value) {
    todos.value.splice(id, 1, value)
  }

  return { todos, add, deleted, edit }
})