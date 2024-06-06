import { api } from '@/lib/axios'

export interface Court {
  id: string
  name: string
  value: string
  road: string
  city: string
  number: string
  reference: string
  neighborhood: string
  fk_user: string
}

export async function getUserCourts() {
  const response = await api.get('/court/getUserCourts')
  return response.data
}
