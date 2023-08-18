<template>
  <div>
    <button id="count" @click="count++">{{ count }}</button>
    <a-button class="btn-indigo" @click="$router.push({ path: '/login' })">Lifecycle</a-button>
  </div>
</template>

<script lang="ts" setup>
const framework = ['react', 'vue']
console.log('framework: ', framework)

const count = ref(0)
const fe    = ref('start')

onMounted(() => {
  console.log('mounted')
})

onBeforeMount(() => {
  console.log('onBeforeMount: ', fe.value)
})

onUnmounted(() => {
  console.log('onUnmounted: ', fe.value)
})

onBeforeUpdate (() => {
  count.value = count.value + 1
  console.log('onBeforeUpdate: ', count.value)
})

onUpdated(() => {
  console.log('onUpdated: ', count.value)
  console.log('onUpdated: ', document.getElementById('count').textContent)
  console.log('id: ', document.getElementById('__nuxt'))
})
</script>