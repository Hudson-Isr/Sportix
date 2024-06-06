import { api } from '@/lib/axios'

export interface GetProfileResponse {
  cpf: string
  name: string
  email: string
  senha: string
  phoneNumber: string
  isOwner: boolean
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/user/getUserInfo')

  return response.data
}
