<template>
  <div ref="endOfScroller" class="end-of-scroller"></div>
</template>

<script setup lang="ts">
const endOfScroller = ref(null)
const observer = ref<IntersectionObserver | null>(null)

const emits = defineEmits<{ infinite: [] }>()

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      emits('infinite')
    }
  })

  if (endOfScroller.value) {
    observer.value.observe(endOfScroller.value)
  }
})

onUnmounted(() => {
  observer.value?.disconnect()
})
</script>
