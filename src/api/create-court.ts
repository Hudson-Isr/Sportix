import { api } from '@/lib/axios'

export interface RegisterCourt {
  name: string
  road: string
  neighborhood: string
  city: string
  number: number
  reference: string
}

export async function createCourt(register: RegisterCourt) {
  await api.post('/court/create', register)
}
