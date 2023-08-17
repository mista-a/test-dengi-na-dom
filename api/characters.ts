import api from './api'
import { AxiosInstance } from 'axios'
import { FilterCharactersDto } from './types'
import { ICharacter, IDetailCharacter } from 'types/character'
import urlsToIds from '~/utils/urlToIds'

const charactersAPI = (instance: AxiosInstance) => {
  return {
    async filter(params?: FilterCharactersDto) {
      const { data } = await instance.get('character', {
        params,
      })
      return data
    },

    async getCharacter(id: number): Promise<ICharacter> {
      const { data } = await instance.get<ICharacter>(`character/${id}`)
      return data
    },

    async getDetailedCharacter(id: number): Promise<IDetailCharacter> {
      const character = await this.getCharacter(id)

      const episodesIds = urlsToIds(character.episode)
      let episodes = await api.episodes.getMultiple(episodesIds)
      if (!Array.isArray(episodes)) episodes = [episodes]

      const locationId = +character.location.url.slice(-1)
      const lastSeeLocation = await api.locations.getLocation(locationId)

      return {
        ...character,
        episodes,
        lastSeeLocation,
      }
    },
  }
}

export default charactersAPI
