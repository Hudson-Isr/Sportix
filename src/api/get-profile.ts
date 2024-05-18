import { api } from '@/lib/axios'

export interface GetProfileResponse {
  name: string
  email: string
  senha: string
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/user')

  return response.data
}
