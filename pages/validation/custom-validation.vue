<template>
  <div class="container">
      <div class="navigation">
      <NuxtLink to="/validation">&#8592</NuxtLink>
      <h2>Custom Validations</h2>
      </div>
  
      <Simple />
      <Async />
  </div>
</template>

<script setup>
import Simple from "@/components/validate/CustomValidation/Simple"
import Async from "@/components/validate/CustomValidation/Async"

</script>