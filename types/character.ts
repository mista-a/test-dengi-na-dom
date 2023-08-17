import { IEpisode } from './episode'
import { ILocation } from './location'

export interface ICharacter {
  id: number
  image: string
  name: string
  species?: string
  type?: string
  gender: CharacterGender
  status: CharacterStatus
  episode: string[]
  location: { name: string; url: string }
}

export interface IDetailCharacter extends ICharacter {
  episodes: IEpisode[]
  lastSeeLocation: ILocation
}

export interface ICharacterDataInfo {
  pages: number
}

export type CharacterStatus = 'alive' | 'dead' | 'unknown' | null
export type CharacterGender =
  | 'female'
  | 'male'
  | 'genderless'
  | 'unknown'
  | null
