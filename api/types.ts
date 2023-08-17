import { CharacterGender, CharacterStatus } from '~/types/character'

export type FilterCharactersDto = {
  name?: string | null
  status?: CharacterStatus
  species?: string | null
  type?: string | null
  gender?: CharacterGender
} & PageParamsDto

export type PageParamsDto = {
  page?: number
}
