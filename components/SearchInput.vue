<template>
  <input
    class="input"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string
}>()

defineEmits(['update:modelValue'])
</script>

<style>
.input {
  width: 100%;
  border-radius: 6px;
  border: 1px solid;
  padding: 4px;
  font-size: 15px;
}
</style>
