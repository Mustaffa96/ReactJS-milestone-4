import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export interface User {
  id: number
  name: string
  email: string
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get<User[]>('/users')
  return data
}

export default api
