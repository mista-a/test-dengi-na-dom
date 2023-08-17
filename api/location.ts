import { AxiosInstance } from 'axios'
import { ILocation } from 'types/location'

const locationsAPI = (instance: AxiosInstance) => {
  return {
    async getLocation(locationId: number) {
      const { data } = await instance.get<ILocation>(`location/${locationId}`)
      return data
    },
  }
}

export default locationsAPI
