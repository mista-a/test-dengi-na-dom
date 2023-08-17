<template>
  <NuxtLink :to="`characters/${character.id}`" class="character">
    <img class="character-img" :src="character.image" alt="character" />
    <div class="character-description">
      <span class="character-name">{{ character.name }}</span>
      <p>{{ character.species }}</p>
      <p>{{ character.gender }}</p>
      <p>{{ character.type }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ICharacter } from 'types/character'

defineProps<{
  character: ICharacter
}>()
</script>

<style scoped>
.character {
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  background: #f7f7f7;
  width: 100%;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
}
.character-img {
  min-height: 275px;
  width: 100%;
}
.character-description {
  padding: 10px;
}
.character-name {
  font-weight: bold;
}
</style>
