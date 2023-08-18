import api from '~/api/api'
import { defineStore } from 'pinia'
import { FilterCharactersDto } from '~/api/types'
import { ICharacter, ICharacterDataInfo } from '~/types/character'
import { useCharactersFiltersStore } from './charactersFilters'

export const useCharactersStore = defineStore('charactersStore', () => {
  const charactersFilters = useCharactersFiltersStore()

  const characters = ref<ICharacter[]>([])
  const charactersDataInfo = ref<ICharacterDataInfo>({ pages: 0 })
  const charactersDataCurrentPage = ref(1)
  const isCharactersFetching = ref(false)

  const fetchCharacters = async () => {
    try {
      const { results, info } = await api.characters.filter({
        gender: charactersFilters.characterGenderFilter,
        name: charactersFilters.characterNameFilter,
        status: charactersFilters.characterStatusFilter,
        page: charactersDataCurrentPage.value,
      })
      charactersDataInfo.value = { ...info }
      return results
    } catch (error) {
      return []
    }
  }

  const getCharacters = async () => {
    isCharactersFetching.value = true
    charactersDataCurrentPage.value = 1
    characters.value = await fetchCharacters()
    isCharactersFetching.value = false
  }

  const getNewCharactersPage = async () => {
    charactersDataCurrentPage.value++
    if (charactersDataCurrentPage.value <= charactersDataInfo.value.pages) {
      const newCharacters = await fetchCharacters()
      characters.value = [...characters.value, ...newCharacters]
    }
  }

  return {
    characters,
    isCharactersFetching,
    charactersDataInfo,
    charactersDataCurrentPage,
    getCharacters,
    getNewCharactersPage,
  }
})
