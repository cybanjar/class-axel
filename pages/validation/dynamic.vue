<template>
  <div class="container">
    <div class="navigation">
      <NuxtLink to="/validation" title="Back to List">&#8592</NuxtLink>
      <h2>Dynamic Form</h2>
    </div>

    <ArrayForeach />
    <ArrayCollection />
    <DynamicFormField />
  </div>
</template>

<script setup>
import ArrayForeach from '@/components/validate/Dynamic/ArrayForEach'
import ArrayCollection from '@/components/validate/Dynamic/ArrayCollection'
import DynamicFormField from '@/components/validate/Dynamic/Field'

</script>
