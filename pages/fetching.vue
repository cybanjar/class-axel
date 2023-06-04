<template>
  <div>
    <p>{{ pending ? 'Loading' : profile }}</p>
    
    <!-- <p>{{ todoErr ? 'Fetching data error' : todoData }}</p> -->
  
    <a-button class="btn-indigo" @click="refresh">Refresh</a-button>

    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { pending, data: profile, refresh, error: profileErr } = await useAsyncData('list', () => $fetch('https://api.github.com/orgs/nuxt'))

// const { data: todoData, error: todoErr } = await useFetching('todos/1')

const { data } = await useFetch('/api/foo')
</script>