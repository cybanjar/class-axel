<template>
  <pre>{{ $hello('ok') }}</pre>
</template>

<script setup lang="ts">
const { $hello } = useNuxtApp()
</script>