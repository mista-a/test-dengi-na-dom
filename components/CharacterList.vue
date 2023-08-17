<template>
  <h2 v-if="!characters.length">Not found.</h2>
  <div class="characters-wrapper">
    <InfiniteScroller class="characters" @infinite="getNewCharactersPage">
      <CharacterCard
        v-for="(character, index) of characters"
        :key="character.id"
        :character="character"
      />
    </InfiniteScroller>
    <DataLoader :active="isCharactersFetching" />
  </div>
</template>

<script setup lang="ts">
import { useCharactersStore } from '~/store/characters'
import { storeToRefs } from 'pinia'

const charactersStore = useCharactersStore()
const { getCharacters, getNewCharactersPage } = charactersStore
const { characters, isCharactersFetching } = storeToRefs(charactersStore)

onMounted(() => getCharacters())
</script>

<style scoped>
.characters-wrapper {
  position: relative;
}
.characters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 15px;
  padding: 2px;
  position: relative;
}
</style>
