import axios, { AxiosError, AxiosInstance } from 'axios'

export const axiosClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 500) {
        throw new Error('Server Error')
      }
      console.log(error)
    }
    return Promise.reject(error)
  },
)
