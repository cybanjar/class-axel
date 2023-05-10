<template>
  <div>
    counter
    {{ counterStore.count }}

    <a-button @click="counterStore.increment()">Increment</a-button>

    <template v-if="pending">
      Loading...
    </template>
    <template v-else>
      <pre>{{ count }}</pre>
    </template>


  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import AButton from '@/components/atoms/AButton'

const counterStore = useCounterStore()

const { pending, data: count } = await useFetch('http://localhost:4000/data')



</script>
