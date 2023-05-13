<template>
  <input type="checkbox" class="checkbox" v-model="model">
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue        : false,
})

const emits = defineEmits(['update:modelValue'])

const model = computed({
  get () {
    return props.modelValue
  },
  set (value: boolean) {
    emits('update:modelValue', value)
  },
})

</script>