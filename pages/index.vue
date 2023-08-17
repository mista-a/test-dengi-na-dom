<template>
  <div class="character-list">
    <CharactersFilters />
    <CharacterList />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.character-list {
  position: relative;
  display: grid;
  grid-template-columns: 20% 1fr;
  justify-content: center;
  gap: 30px;
}
</style>
