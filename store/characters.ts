import api from '~/api/api'
import { defineStore } from 'pinia'
import { FilterCharactersDto } from '~/api/types'
import { ICharacter, ICharacterDataInfo } from '~/types/character'
import { useCharactersFiltersStore } from './charactersFilters'

export const useCharactersStore = defineStore('charactersStore', () => {
  const charactersFilters = useCharactersFiltersStore()

  const characters = ref<ICharacter[]>([])
  const charactersDataInfo = ref<ICharacterDataInfo>({ pages: 1 })
  const charactersDataCurrentPage = ref(1)
  const isCharactersFetching = ref(false)

  const fetchCharacters = async (parameters?: FilterCharactersDto) => {
    try {
      const { results, info } = await api.characters.filter(parameters)
      charactersDataInfo.value = { ...info }
      return results
    } catch (error) {
      return []
    }
  }

  const getCharacters = async () => {
    isCharactersFetching.value = true
    charactersDataCurrentPage.value = 1
    characters.value = await fetchCharacters({
      gender: charactersFilters.characterGenderFilter,
      name: charactersFilters.characterNameFilter,
      status: charactersFilters.characterStatusFilter,
    })
    isCharactersFetching.value = false
  }

  const getNewCharactersPage = async () => {
    charactersDataCurrentPage.value++
    if (charactersDataCurrentPage.value <= charactersDataInfo.value.pages) {
      const newCharacters = await fetchCharacters({
        gender: charactersFilters.characterGenderFilter,
        name: charactersFilters.characterNameFilter,
        status: charactersFilters.characterStatusFilter,
        page: charactersDataCurrentPage.value,
      })
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
