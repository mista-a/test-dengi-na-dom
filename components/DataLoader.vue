<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  background: rgb(48, 48, 48);
  opacity: 30%;
  border-radius: 8px;
  overflow: hidden;
}
</style>
