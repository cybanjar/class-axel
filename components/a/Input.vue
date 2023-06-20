<template>
  <label :for="label" class="label block">{{ label }}</label>
  <input 
    type="text" 
    :id="label" 
    class="input" 
    v-model="model" 
    :disabled="disabled"
    :placeholder="placeholder">
</template>

<script setup lang="ts">
interface Props {
  modelValue: string,
  label?     : string,
  placeholder: string,
  disabled?   : boolean,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue : '',
  label      : '',
  placeholder: '',
  disabled   : false,
})

const emits = defineEmits(['update:modelValue'])

const model = computed({
  get () {
    return props.modelValue
  },
  set (value: string) {
    emits('update:modelValue', value)
  },
})

</script>