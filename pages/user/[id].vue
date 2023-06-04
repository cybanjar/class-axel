<template>
  <pre>{{ todo }}</pre>
  <pre>{{ counter }}</pre>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: todo } = await useFetching('todos/1')
const { x, y } = useMouse()
const description = ref('My amazing site in meta')
const counter = useCounter()

useHead({
  title: route.name,
  meta: [
    { name: 'desc', content: 'App name - ${route.meta.title}' }
  ],
  bodyAttrs: {
    class: 'testing'
  },
  script: [
    { children: 'console.log(\'hello\')'}
  ]
})

</script>