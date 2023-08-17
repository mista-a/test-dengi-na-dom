import axios, { AxiosInstance } from 'axios'
import charactersAPI from './characters'
import episodesAPI from './episodes'
import locationsAPI from './location'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
})

const api = {
  characters: charactersAPI(instance),
  episodes: episodesAPI(instance),
  locations: locationsAPI(instance),
}

export default api
