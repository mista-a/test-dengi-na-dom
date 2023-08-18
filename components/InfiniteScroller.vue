<template>
  <div ref="scroller" class="scroller">
    <slot></slot>
    <div ref="endOfScroller" class="end-of-scroller"></div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{ infinite: [] }>()

const scroller = ref(null)
const endOfScroller = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        emits('infinite')
      }
    },
    { root: null }
  )

  if (endOfScroller.value) {
    observer.observe(endOfScroller.value)
  }
})
</script>

<style scoped>
.scroller {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
