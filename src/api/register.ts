import { api } from '@/lib/axios'

export interface RegisterUser {
  name: string
  password1: string
  password2: string
  cpf: string
  phoneNumber: string
  email: string
}

export async function signUp(register: RegisterUser) {
  await api.post('/user/create', register)
}
