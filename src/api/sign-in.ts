import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  password: string
}

export async function signIn(login: SignInBody) {
  await api.post('/login', login)
}
