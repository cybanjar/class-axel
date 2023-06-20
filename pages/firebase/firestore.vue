<script setup>
// definePageMeta({
//   middleware: ['auth']
// })

import { useCollection, useDatabaseList } from 'vuefire'



onMounted(() => {
  console.log('mounted')
})

</script>

<template>
  <ul>
    <!-- <li v-for="todo in todos" :key="todo.id">
     <span>{{ todo.text }}</span>
    </li> -->
  </ul>
</template>
