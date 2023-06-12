<template>
  <div class="container">
    <div class="navigation">
      <NuxtLink to="/validation">&#8592</NuxtLink>
      <h2>Custom Error Messages</h2>
    </div>

    <Simple />
    <Outside />
  </div>
</template>

<script setup>
import Simple from '@/components/validate/CustomMessages/SimpleExample'
import Outside from '@/components/validate/CustomMessages/OutsideExample'

</script>