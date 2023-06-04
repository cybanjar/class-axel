<template>
  <button 
    type="button" 
    href="#" 
    :disabled="props.disabled"
    class="btn">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  disabled?: boolean,
}

const props =  withDefaults(defineProps<Props>(),{
  disabled: false,
})

</script>