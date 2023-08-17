import { defineStore, storeToRefs } from 'pinia'
import { useCharactersStore } from './characters'
import { CharacterGender, CharacterStatus } from 'types/character'

export const useCharactersFiltersStore = defineStore(
  'charactersFilterStore',
  () => {
    const characterStatusFilter = ref<CharacterStatus>(null)
    const characterGenderFilter = ref<CharacterGender>(null)
    const characterNameFilter = ref('')

    const charactersStore = useCharactersStore()
    const { getCharacters } = charactersStore

    watch(
      [characterStatusFilter, characterGenderFilter, characterNameFilter],
      async () => getCharacters()
    )

    return {
      characterStatusFilter,
      characterGenderFilter,
      characterNameFilter,
    }
  },
  { persist: { storage: persistedState.localStorage } }
)
