<template>
  <div class="characters-filters">
    <div class="filters-list">
      <span>Name</span>
      <SearchInput v-model="characterNameFilter" :value="characterNameFilter" />
    </div>
    <p>Status</p>
    <div class="filters-list">
      <RadioInput
        v-for="statusFilter in statusFilters"
        :key="statusFilter"
        name="Status"
        :value="statusFilter"
        v-model="characterStatusFilter"
      />
    </div>
    <p>Gender</p>
    <div class="filters-list">
      <RadioInput
        v-for="genderFilter in genderFilters"
        :key="genderFilter"
        name="Gender"
        :value="genderFilter"
        v-model="characterGenderFilter"
      />
    </div>
  </div>
</template>

<script setup>
import { useCharactersFiltersStore } from '~/store/charactersFilters'
import { storeToRefs } from 'pinia'

const characterFiltersStore = useCharactersFiltersStore()
const { characterStatusFilter, characterGenderFilter, characterNameFilter } =
  storeToRefs(characterFiltersStore)

const statusFilters = ['none', 'alive', 'dead', 'unknown']
const genderFilters = ['none', 'female', 'male', 'genderless', 'unknown']
</script>

<style scoped>
.filters-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.characters-filters {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 30px;
  height: fit-content;
}
</style>
store/charactersFilters
