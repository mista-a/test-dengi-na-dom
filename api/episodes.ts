import { AxiosInstance } from 'axios'
import { IEpisode } from 'types/episode'

const episodesAPI = (instance: AxiosInstance) => {
  return {
    async getMultiple(episodeIds: string[]): Promise<IEpisode[] | IEpisode> {
      const episodes = episodeIds.join(',')
      const { data } = await instance.get<IEpisode[]>(`episode/${episodes}`)
      return data
    },
  }
}

export default episodesAPI
