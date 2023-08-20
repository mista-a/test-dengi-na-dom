<template>
  <div v-if="!isCharacterFetching" class="character">
    <div>
      <img class="character-avatar" :src="character?.image" alt="character" />
      <h1>{{ character?.name }}</h1>
      <p>{{ character?.species }}</p>
      <p>{{ character?.gender }}</p>
      <h2>Last see location:</h2>
      <p>
        <span>Name: </span>
        <span>{{ character?.lastSeeLocation.name }}</span>
      </p>
      <p>
        <span>Dimension: </span>
        <span>{{ character?.lastSeeLocation.dimension }}</span>
      </p>
      <p>
        <span>Type: </span>
        <span>{{ character?.lastSeeLocation.type }}</span>
      </p>
    </div>
    <div class="episodes">
      <div class="episode" v-for="episode in character?.episodes">
        <span class="episode-name">{{ episode.name }}</span>
        <span class="episode-number">{{ episode.episode }}</span>
      </div>
    </div>
  </div>
  <SpinnerLoader v-else="isCharacterFetching" />
</template>

<script setup lang="ts">
import api from '~/api/api'
import { IDetailCharacter } from '~/types/character'

const character = ref<IDetailCharacter>()
const isCharacterFetching = ref(false)

const route = useRoute()

onMounted(async () => {
  isCharacterFetching.value = true
  character.value = await api.characters.getDetailedCharacter(+route.params.id)
  isCharacterFetching.value = false
})
</script>

<style scoped>
.character {
  display: flex;
  gap: 30px;
}
.character-avatar {
  border-radius: 16px;
  min-width: 300px;
  min-height: 300px;
}
.episodes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5px;
  width: 100%;
  height: fit-content;
}
.episode {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #e9e9e9;
  border-radius: 6px;
  gap: 6px;
}
.episode-name {
  display: flex;
  align-items: center;
}
.episode-number {
  display: flex;
  align-items: center;
  background: white;
  padding: 4px;
  border-radius: 6px;
}
</style>
