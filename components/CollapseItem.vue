<script setup>
const isOpen = ref(false);
</script>

<template>
  <div>
    <div class="navigation">
      <a-button class="btn-secondary" @click="isOpen = !isOpen">{{ isOpen ? "-" : "+" }}</a-button>
      <h4><slot name="title"></slot></h4>
    </div>
    <div v-show="isOpen">
      <slot/>
    </div>
  </div>
</template>
