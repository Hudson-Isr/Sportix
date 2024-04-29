import { api } from '@/lib/axios'

interface GetProfileResponse {
  name: string
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/user')

  return response.data
}
