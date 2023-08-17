<template>
  <div>
    <label class="radio-label" :class="{ checked: isChecked }">
      <input
        class="radio-input"
        :for="value"
        type="radio"
        :name="name"
        :value="value"
        :checked="isChecked"
        @change="updateValue(value)"
      />
      <span>{{ value }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string
  value: string | null | number
  modelValue?: string | number
}>()

const emits = defineEmits(['update:modelValue'])

const updateValue = (value: string | number | null) => {
  if (value === 'none') value = null
  emits('update:modelValue', value)
}

const isChecked = computed(() => {
  if (props.value === 'none' && !props.modelValue) return true
  return props.modelValue === props.value
})
</script>

<style scoped>
.radio-label {
  display: flex;
  cursor: pointer;
  padding: 8px;
  background: #f2f2f2;
  border-radius: 6px;
  transition: background 0.3s;
  position: relative;
}
.checked {
  background: #1f1f1f;
  color: #ffffff;
}

.radio-input {
  visibility: hidden;
  padding: 4px;
  width: 0;
  height: 0;
  line-height: 0;
  position: absolute;
}
</style>
