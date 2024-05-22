import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  password: string
}

export async function signIn(login: SignInBody) {
  const response = await api.post('/login', login)

  return response.data
}
