<script lang="ts" setup>
import BaseCard from './BaseCard.vue'

</script>

<template>
  <Story
    title="BaseCard"
    :layout="{
      type: 'grid',
      width: 400,
    }"
  >
    <Variant
      title="Base Card Chat"
      icon="el:resize-full"
    >
      <BaseCard />
    </Variant>

  </Story>
</template>