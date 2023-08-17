<template>
  <div ref="scroller" class="scroller">
    <slot></slot>
    <div ref="endOfScroller" class="end-of-scroller"></div>
  </div>
</template>

<script setup>
const emits = defineEmits(['infinite'])

let scroller = ref(null)
let endOfScroller = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      let entry = entries[0]
      if (entry.isIntersecting) {
        emits('infinite')
      }
    },
    { root: null }
  )
  observer.observe(endOfScroller.value)
})
</script>

<style scoped>
.scroller {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
