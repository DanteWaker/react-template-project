import { IData } from '@/types/data.types'
import { axiosClient } from '../axios/axiosClient'

export const getData = async () => {
  const response = await axiosClient.get<IData>('/api/data')

  return response.data
}
