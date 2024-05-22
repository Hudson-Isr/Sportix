import { api } from '@/lib/axios'

export interface RegisterCourt {
  name: string
  road: string
  neighborhood: string
  city: string
  number: string
  reference: string
}

export async function signUp(register: RegisterCourt) {
  await api.post('/user/create', register)
}
