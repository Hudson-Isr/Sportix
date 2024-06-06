import { api } from '@/lib/axios'

export interface Court {
  id: string
  name: string
  type: string
  value: string
  road: string
  city: string
  number: string
  reference: string
  neighborhood: string
  fk_user: string
}

export async function getCourts() {
  const response = await api.get('/court/getCourts')
  return response.data
}
